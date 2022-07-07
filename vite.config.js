import { defineConfig } from "vite";
const env = process.env.NODE_ENV === "development" ? "" : "/blog-notes"

export default defineConfig({
  base: env,
});
