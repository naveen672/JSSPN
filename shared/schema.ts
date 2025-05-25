import { pgTable, text, serial, integer, boolean, timestamp, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table for administrators
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  fullName: text("full_name"),
  role: text("role").default("user"),
  isAdmin: boolean("is_admin").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Visitor count table
export const visitorCounter = pgTable("visitor_counter", {
  id: serial("id").primaryKey(),
  count: integer("count").notNull().default(0),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// News/Announcements table
export const newsItems = pgTable("news_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  isActive: boolean("is_active").default(true),
  priority: integer("priority").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Contact form submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  isRead: boolean("is_read").default(false),
});

// Admissions inquiries table
export const admissionsInquiries = pgTable("admissions_inquiries", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  parentName: text("parent_name"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  program: text("program"),
  previousEducation: text("previous_education"),
  message: text("message"),
  submittedAt: timestamp("submitted_at").defaultNow(),
  status: text("status").default("new"),
});

// Important dates table
export const importantDates = pgTable("important_dates", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  eventDate: date("event_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Creating insertion schemas for all tables
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  role: true,
  isAdmin: true,
});

export const insertVisitorCounterSchema = createInsertSchema(visitorCounter).pick({
  count: true,
});

export const insertNewsItemSchema = createInsertSchema(newsItems).pick({
  title: true,
  content: true,
  isActive: true,
  priority: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertAdmissionsInquirySchema = createInsertSchema(admissionsInquiries).pick({
  studentName: true,
  parentName: true,
  email: true,
  phone: true,
  program: true,
  previousEducation: true,
  message: true,
  status: true,
});

export const insertImportantDateSchema = createInsertSchema(importantDates).pick({
  title: true,
  description: true,
  eventDate: true,
});

// Types for insertion and selection
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertVisitorCounter = z.infer<typeof insertVisitorCounterSchema>;
export type VisitorCounter = typeof visitorCounter.$inferSelect;

export type InsertNewsItem = z.infer<typeof insertNewsItemSchema>;
export type NewsItem = typeof newsItems.$inferSelect;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

export type InsertAdmissionsInquiry = z.infer<typeof insertAdmissionsInquirySchema>;
export type AdmissionsInquiry = typeof admissionsInquiries.$inferSelect;

export type InsertImportantDate = z.infer<typeof insertImportantDateSchema>;
export type ImportantDate = typeof importantDates.$inferSelect;
