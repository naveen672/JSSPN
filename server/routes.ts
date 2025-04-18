import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/info', (req, res) => {
    res.json({
      name: 'JSS Polytechnic Nanjangud',
      established: 1965,
      location: 'Nanjangud, Karnataka, India'
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
