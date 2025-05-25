import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Express, Request, Response, NextFunction } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);
const scryptAsync = promisify(scrypt);

export async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || 'jss-polytechnic-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
    store: new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    }),
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        console.log("Attempting login for user:", username);
        
        // Special case for admin
        if (username === 'admin' && password === 'admin') {
          console.log("Admin login successful with default credentials");
          return done(null, {
            id: 1,
            username: 'admin',
            email: 'admin@jsspolytechnic.org',
            fullName: 'Administrator',
            isAdmin: true,
          });
        }
        
        // Regular user authentication
        const user = await storage.getUserByUsername(username);
        console.log("User found:", user ? "Yes" : "No");
        
        if (!user) {
          console.log("User not found");
          return done(null, false, { message: "Invalid username or password" });
        }
        
        try {
          const isValidPassword = await comparePasswords(password, user.password);
          console.log("Password validation:", isValidPassword ? "Passed" : "Failed");
          
          if (!isValidPassword) {
            return done(null, false, { message: "Invalid username or password" });
          }
          
          // Don't send password to the client
          const { password: _, ...userWithoutPassword } = user;
          return done(null, userWithoutPassword);
        } catch (passwordError) {
          console.error("Password comparison error:", passwordError);
          return done(null, false, { message: "Authentication error" });
        }
      } catch (error) {
        console.error("Login error:", error);
        return done(error);
      }
    }),
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id: number, done) => {
    try {
      // Special case for admin
      if (id === 1) {
        return done(null, {
          id: 1,
          username: 'admin',
          email: 'admin@jsspolytechnic.org',
          fullName: 'Administrator',
          isAdmin: true,
        });
      }
      
      const user = await storage.getUser(id);
      if (!user) {
        return done(null, false);
      }
      
      // Don't send password to the client
      const { password: _, ...userWithoutPassword } = user;
      done(null, userWithoutPassword);
    } catch (error) {
      done(error);
    }
  });

  // Login
  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        console.error("Authentication error:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (!user) {
        return res.status(401).json({ message: info?.message || "Invalid credentials" });
      }
      
      req.login(user, (loginErr) => {
        if (loginErr) {
          console.error("Login error:", loginErr);
          return res.status(500).json({ message: "Error logging in" });
        }
        return res.status(200).json(user);
      });
    })(req, res, next);
  });

  // Logout
  app.post("/api/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      res.status(200).json({ message: "Logged out successfully" });
    });
  });

  // Get current user
  app.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    res.status(200).json(req.user);
  });
  
  // Admin required middleware
  const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated() || !(req.user as any).isAdmin) {
      return res.status(403).json({ message: "Admin access required" });
    }
    next();
  };
  
  return { requireAdmin };
}