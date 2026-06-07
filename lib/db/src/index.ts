import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import path from "path";
import * as schema from "./schema";

const { Pool } = pg;

// Load environment variables from the workspace root or local directory
try {
  process.loadEnvFile(path.resolve(import.meta.dirname, "../../../.env"));
} catch (e) {
  try {
    process.loadEnvFile(path.resolve(import.meta.dirname, "../.env"));
  } catch (err) {}
}

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool, { schema });

export * from "./schema";
