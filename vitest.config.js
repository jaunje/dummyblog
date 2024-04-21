import { defineConfig } from "vitest/config";

export default defineConfig({
  files: ["src/**/*.test.js", "src/**/*.test.jsx"],
  test: {
    environment: "jsdom",
  },
});
