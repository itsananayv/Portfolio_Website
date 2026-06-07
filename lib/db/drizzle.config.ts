import { defineConfig } from "drizzle-kit";
import path from "path";

// Load environment variables from the workspace root or local directory
try {
  process.loadEnvFile(path.resolve(__dirname, "../../.env"));
} catch (e) {
  try {
    process.loadEnvFile(path.resolve(__dirname, ".env"));
  } catch (err) {}
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  schema: path.join(__dirname, "./src/schema/index.ts"),
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
