import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create postgres client
const client = postgres(process.env.DATABASE_URL);

// Create drizzle instance
export const db = drizzle(client, { schema });

// For session store
export const pool = {
  query: async (text: string, params: any[] = []) => {
    try {
      const result = await client.unsafe(text, params);
      return { rows: result };
    } catch (error) {
      console.error('Error executing query', error);
      throw error;
    }
  },
  connect: () => client,
};

console.log("Database connection established");