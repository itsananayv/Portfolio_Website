import path from "path";

// Load environment variables from the workspace root or local directory
try {
  process.loadEnvFile(path.resolve(import.meta.dirname, "../../../.env"));
} catch (e) {
  try {
    process.loadEnvFile(path.resolve(import.meta.dirname, "../.env"));
  } catch (err) {}
}
