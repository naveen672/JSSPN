import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { 
  users, 
  newsItems,
  visitorCounter,
  contactSubmissions,
  admissionsInquiries,
  importantDates,
  type User, 
  type InsertUser,
  type NewsItem,
  type InsertNewsItem,
  type VisitorCounter,
  type InsertVisitorCounter,
  type ContactSubmission,
  type InsertContactSubmission,
  type AdmissionsInquiry,
  type InsertAdmissionsInquiry,
  type ImportantDate,
  type InsertImportantDate,
} from "@shared/schema";
import { eq } from "drizzle-orm";

// Get the database connection string from environment variables
const databaseUrl = process.env.DATABASE_URL || "";

// Create the postgres client
const client = postgres(databaseUrl);

// Create the drizzle database instance
const db = drizzle(client);

// Define the interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // News operations
  getNewsItems(): Promise<NewsItem[]>;
  getActiveNewsItems(): Promise<NewsItem[]>;
  createNewsItem(newsItem: InsertNewsItem): Promise<NewsItem>;
  updateNewsItem(id: number, newsItem: Partial<InsertNewsItem>): Promise<NewsItem | undefined>;
  deleteNewsItem(id: number): Promise<boolean>;
  
  // Visitor counter operations
  getVisitorCount(): Promise<number>;
  incrementVisitorCount(): Promise<number>;
  resetVisitorCount(): Promise<void>;
  
  // Contact form operations
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  markContactSubmissionAsRead(id: number): Promise<boolean>;
  
  // Admissions operations
  createAdmissionsInquiry(inquiry: InsertAdmissionsInquiry): Promise<AdmissionsInquiry>;
  getAdmissionsInquiries(): Promise<AdmissionsInquiry[]>;
  updateAdmissionsInquiryStatus(id: number, status: string): Promise<boolean>;
  
  // Important dates operations
  getImportantDates(): Promise<ImportantDate[]>;
  createImportantDate(date: InsertImportantDate): Promise<ImportantDate>;
  updateImportantDate(id: number, date: Partial<InsertImportantDate>): Promise<ImportantDate | undefined>;
  deleteImportantDate(id: number): Promise<boolean>;
}

// Implement the database storage using Drizzle ORM
export class DBStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
  
  // News operations
  async getNewsItems(): Promise<NewsItem[]> {
    return await db.select().from(newsItems).orderBy(newsItems.priority, newsItems.createdAt);
  }
  
  async getActiveNewsItems(): Promise<NewsItem[]> {
    return await db.select()
      .from(newsItems)
      .where(eq(newsItems.isActive, true))
      .orderBy(newsItems.priority, newsItems.createdAt);
  }
  
  async createNewsItem(newsItem: InsertNewsItem): Promise<NewsItem> {
    const result = await db.insert(newsItems).values(newsItem).returning();
    return result[0];
  }
  
  async updateNewsItem(id: number, newsItem: Partial<InsertNewsItem>): Promise<NewsItem | undefined> {
    const result = await db.update(newsItems)
      .set({ ...newsItem, updatedAt: new Date() })
      .where(eq(newsItems.id, id))
      .returning();
    return result[0];
  }
  
  async deleteNewsItem(id: number): Promise<boolean> {
    const result = await db.delete(newsItems).where(eq(newsItems.id, id)).returning();
    return result.length > 0;
  }
  
  // Visitor counter operations
  async getVisitorCount(): Promise<number> {
    const result = await db.select().from(visitorCounter).limit(1);
    if (result.length === 0) {
      // Initialize the counter if it doesn't exist
      const newCounter = await db.insert(visitorCounter).values({ count: 0 }).returning();
      return newCounter[0].count;
    }
    return result[0].count;
  }
  
  async incrementVisitorCount(): Promise<number> {
    // First, make sure we have a counter record
    const initialCount = await this.getVisitorCount();
    
    // Update the counter
    const result = await db.update(visitorCounter)
      .set({ 
        count: initialCount + 1,
        lastUpdated: new Date()
      })
      .returning();
    
    return result[0].count;
  }
  
  async resetVisitorCount(): Promise<void> {
    await db.update(visitorCounter).set({ count: 0, lastUpdated: new Date() });
  }
  
  // Contact form operations
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }
  
  async markContactSubmissionAsRead(id: number): Promise<boolean> {
    const result = await db.update(contactSubmissions)
      .set({ isRead: true })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return result.length > 0;
  }
  
  // Admissions operations
  async createAdmissionsInquiry(inquiry: InsertAdmissionsInquiry): Promise<AdmissionsInquiry> {
    const result = await db.insert(admissionsInquiries).values(inquiry).returning();
    return result[0];
  }
  
  async getAdmissionsInquiries(): Promise<AdmissionsInquiry[]> {
    return await db.select().from(admissionsInquiries).orderBy(admissionsInquiries.submittedAt);
  }
  
  async updateAdmissionsInquiryStatus(id: number, status: string): Promise<boolean> {
    const result = await db.update(admissionsInquiries)
      .set({ status })
      .where(eq(admissionsInquiries.id, id))
      .returning();
    return result.length > 0;
  }
  
  // Important dates operations
  async getImportantDates(): Promise<ImportantDate[]> {
    return await db.select().from(importantDates).orderBy(importantDates.eventDate);
  }
  
  async createImportantDate(date: InsertImportantDate): Promise<ImportantDate> {
    const result = await db.insert(importantDates).values(date).returning();
    return result[0];
  }
  
  async updateImportantDate(id: number, date: Partial<InsertImportantDate>): Promise<ImportantDate | undefined> {
    const result = await db.update(importantDates)
      .set(date)
      .where(eq(importantDates.id, id))
      .returning();
    return result[0];
  }
  
  async deleteImportantDate(id: number): Promise<boolean> {
    const result = await db.delete(importantDates).where(eq(importantDates.id, id)).returning();
    return result.length > 0;
  }
}

// Create and export the storage instance
export const storage = new DBStorage();
