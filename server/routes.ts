import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertNewsItemSchema,
  insertContactSubmissionSchema,
  insertAdmissionsInquirySchema,
  insertImportantDateSchema
} from "@shared/schema";
import { ZodError } from "zod";
import { sendContactConfirmation } from "./email";

// Error handler middleware
const handleError = (res: Response, error: any) => {
  console.error("API Error:", error);
  if (error instanceof ZodError) {
    return res.status(400).json({ 
      error: "Validation error", 
      details: error.errors 
    });
  }
  res.status(500).json({ error: "Internal server error" });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic info API route
  app.get('/api/info', (req, res) => {
    res.json({
      name: 'JSS Polytechnic Nanjangud',
      established: 1965,
      location: 'Nanjangud, Karnataka, India'
    });
  });

  // News routes
  app.get('/api/news', async (req, res) => {
    try {
      const activeOnly = req.query.active === 'true';
      const news = activeOnly 
        ? await storage.getActiveNewsItems() 
        : await storage.getNewsItems();
      res.json(news);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.post('/api/news', async (req, res) => {
    try {
      const newsItem = insertNewsItemSchema.parse(req.body);
      const createdNews = await storage.createNewsItem(newsItem);
      res.status(201).json(createdNews);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.put('/api/news/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const newsItem = insertNewsItemSchema.partial().parse(req.body);
      const updatedNews = await storage.updateNewsItem(id, newsItem);
      if (!updatedNews) {
        return res.status(404).json({ error: "News item not found" });
      }
      res.json(updatedNews);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.delete('/api/news/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteNewsItem(id);
      if (!success) {
        return res.status(404).json({ error: "News item not found" });
      }
      res.status(204).end();
    } catch (error) {
      handleError(res, error);
    }
  });

  // Visitor counter routes
  app.get('/api/visitors', async (req, res) => {
    try {
      const count = await storage.getVisitorCount();
      res.json({ count });
    } catch (error) {
      handleError(res, error);
    }
  });

  app.post('/api/visitors/increment', async (req, res) => {
    try {
      const count = await storage.incrementVisitorCount();
      res.json({ count });
    } catch (error) {
      handleError(res, error);
    }
  });

  // Contact form routes
  app.post('/api/contact', async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      const createdSubmission = await storage.createContactSubmission(submission);
      
      // Send confirmation email to the user
      try {
        await sendContactConfirmation(submission.name, submission.email);
      } catch (emailError) {
        // Log the error but don't fail the request
        console.error("Error sending confirmation email:", emailError);
      }
      
      res.status(201).json(createdSubmission);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.get('/api/contact', async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.put('/api/contact/:id/read', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.markContactSubmissionAsRead(id);
      if (!success) {
        return res.status(404).json({ error: "Submission not found" });
      }
      res.status(204).end();
    } catch (error) {
      handleError(res, error);
    }
  });

  // Admissions inquiries routes
  app.post('/api/admissions/inquiries', async (req, res) => {
    try {
      const inquiry = insertAdmissionsInquirySchema.parse(req.body);
      const createdInquiry = await storage.createAdmissionsInquiry(inquiry);
      res.status(201).json(createdInquiry);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.get('/api/admissions/inquiries', async (req, res) => {
    try {
      const inquiries = await storage.getAdmissionsInquiries();
      res.json(inquiries);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.put('/api/admissions/inquiries/:id/status', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ error: "Status is required" });
      }
      
      const success = await storage.updateAdmissionsInquiryStatus(id, status);
      if (!success) {
        return res.status(404).json({ error: "Inquiry not found" });
      }
      res.status(204).end();
    } catch (error) {
      handleError(res, error);
    }
  });

  // Important dates routes
  app.get('/api/important-dates', async (req, res) => {
    try {
      const dates = await storage.getImportantDates();
      res.json(dates);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.post('/api/important-dates', async (req, res) => {
    try {
      const date = insertImportantDateSchema.parse(req.body);
      const createdDate = await storage.createImportantDate(date);
      res.status(201).json(createdDate);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.put('/api/important-dates/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const date = insertImportantDateSchema.partial().parse(req.body);
      const updatedDate = await storage.updateImportantDate(id, date);
      if (!updatedDate) {
        return res.status(404).json({ error: "Important date not found" });
      }
      res.json(updatedDate);
    } catch (error) {
      handleError(res, error);
    }
  });

  app.delete('/api/important-dates/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteImportantDate(id);
      if (!success) {
        return res.status(404).json({ error: "Important date not found" });
      }
      res.status(204).end();
    } catch (error) {
      handleError(res, error);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
