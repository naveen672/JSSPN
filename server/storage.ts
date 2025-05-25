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
import { eq, desc, and, asc } from "drizzle-orm";
import { db } from './db';
import connectPgSimple from 'connect-pg-simple';
import session from 'express-session';
import { pool } from './db';

// Define the interface for all storage operations
export interface IStorage {
  // Session store
  sessionStore: session.Store;
  
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

// Create PostgreSQL session store
const PostgresStore = connectPgSimple(session);

// Implement the database storage using Drizzle ORM
export class DBStorage implements IStorage {
  sessionStore: session.Store;
  
  constructor() {
    this.sessionStore = new PostgresStore({
      pool,
      createTableIfMissing: true
    });
  }
  
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user by ID:", error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
      return result[0];
    } catch (error) {
      console.error("Error getting user by username:", error);
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = await db.insert(users).values(insertUser).returning();
      return result[0];
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
  
  // News operations
  async getNewsItems(): Promise<NewsItem[]> {
    try {
      return await db.select().from(newsItems)
        .orderBy(desc(newsItems.priority), desc(newsItems.createdAt));
    } catch (error) {
      console.error("Error getting news items:", error);
      return [];
    }
  }
  
  async getActiveNewsItems(): Promise<NewsItem[]> {
    try {
      return await db.select().from(newsItems)
        .where(eq(newsItems.isActive, true))
        .orderBy(desc(newsItems.priority), desc(newsItems.createdAt));
    } catch (error) {
      console.error("Error getting active news items:", error);
      return [];
    }
  }
  
  async createNewsItem(newsItem: InsertNewsItem): Promise<NewsItem> {
    try {
      const result = await db.insert(newsItems).values(newsItem).returning();
      return result[0];
    } catch (error) {
      console.error("Error creating news item:", error);
      throw error;
    }
  }
  
  async updateNewsItem(id: number, newsItemUpdate: Partial<InsertNewsItem>): Promise<NewsItem | undefined> {
    try {
      const result = await db.update(newsItems)
        .set(newsItemUpdate)
        .where(eq(newsItems.id, id))
        .returning();
      return result[0];
    } catch (error) {
      console.error("Error updating news item:", error);
      return undefined;
    }
  }
  
  async deleteNewsItem(id: number): Promise<boolean> {
    try {
      const result = await db.delete(newsItems)
        .where(eq(newsItems.id, id))
        .returning();
      return result.length > 0;
    } catch (error) {
      console.error("Error deleting news item:", error);
      return false;
    }
  }
  
  // Visitor counter operations
  async getVisitorCount(): Promise<number> {
    try {
      const result = await db.select().from(visitorCounter).limit(1);
      if (result.length === 0) {
        // Create initial counter if it doesn't exist
        const newCounter = await db.insert(visitorCounter)
          .values({ count: 0 })
          .returning();
        return newCounter[0].count;
      }
      return result[0].count;
    } catch (error) {
      console.error("Error getting visitor count:", error);
      return 0;
    }
  }
  
  async incrementVisitorCount(): Promise<number> {
    try {
      const currentCount = await this.getVisitorCount();
      const newCount = currentCount + 1;
      
      // Update all counters - we should only have one, but just in case
      await db.update(visitorCounter)
        .set({ 
          count: newCount,
          lastUpdated: new Date()
        });
      
      return newCount;
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      return 0;
    }
  }
  
  async resetVisitorCount(): Promise<void> {
    try {
      await db.update(visitorCounter)
        .set({ 
          count: 0,
          lastUpdated: new Date()
        });
    } catch (error) {
      console.error("Error resetting visitor count:", error);
    }
  }
  
  // Contact form operations
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    try {
      const result = await db.insert(contactSubmissions)
        .values(submission)
        .returning();
      return result[0];
    } catch (error) {
      console.error("Error creating contact submission:", error);
      throw error;
    }
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    try {
      return await db.select().from(contactSubmissions)
        .orderBy(desc(contactSubmissions.createdAt));
    } catch (error) {
      console.error("Error getting contact submissions:", error);
      return [];
    }
  }
  
  async markContactSubmissionAsRead(id: number): Promise<boolean> {
    try {
      const result = await db.update(contactSubmissions)
        .set({ isRead: true })
        .where(eq(contactSubmissions.id, id))
        .returning();
      return result.length > 0;
    } catch (error) {
      console.error("Error marking contact submission as read:", error);
      return false;
    }
  }
  
  // Admissions operations
  async createAdmissionsInquiry(inquiry: InsertAdmissionsInquiry): Promise<AdmissionsInquiry> {
    try {
      const result = await db.insert(admissionsInquiries)
        .values(inquiry)
        .returning();
      return result[0];
    } catch (error) {
      console.error("Error creating admissions inquiry:", error);
      throw error;
    }
  }
  
  async getAdmissionsInquiries(): Promise<AdmissionsInquiry[]> {
    try {
      return await db.select().from(admissionsInquiries)
        .orderBy(desc(admissionsInquiries.submittedAt));
    } catch (error) {
      console.error("Error getting admissions inquiries:", error);
      return [];
    }
  }
  
  async updateAdmissionsInquiryStatus(id: number, status: string): Promise<boolean> {
    try {
      const result = await db.update(admissionsInquiries)
        .set({ status })
        .where(eq(admissionsInquiries.id, id))
        .returning();
      return result.length > 0;
    } catch (error) {
      console.error("Error updating admissions inquiry status:", error);
      return false;
    }
  }
  
  // Important dates operations
  async getImportantDates(): Promise<ImportantDate[]> {
    try {
      return await db.select().from(importantDates)
        .orderBy(asc(importantDates.eventDate));
    } catch (error) {
      console.error("Error getting important dates:", error);
      return [];
    }
  }
  
  async createImportantDate(date: InsertImportantDate): Promise<ImportantDate> {
    try {
      const result = await db.insert(importantDates)
        .values(date)
        .returning();
      return result[0];
    } catch (error) {
      console.error("Error creating important date:", error);
      throw error;
    }
  }
  
  async updateImportantDate(id: number, dateUpdate: Partial<InsertImportantDate>): Promise<ImportantDate | undefined> {
    try {
      const result = await db.update(importantDates)
        .set(dateUpdate)
        .where(eq(importantDates.id, id))
        .returning();
      return result[0];
    } catch (error) {
      console.error("Error updating important date:", error);
      return undefined;
    }
  }
  
  async deleteImportantDate(id: number): Promise<boolean> {
    try {
      const result = await db.delete(importantDates)
        .where(eq(importantDates.id, id))
        .returning();
      return result.length > 0;
    } catch (error) {
      console.error("Error deleting important date:", error);
      return false;
    }
  }
}

// Create and export the storage instance
export const storage = new DBStorage();