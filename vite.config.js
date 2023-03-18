// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        one: resolve(__dirname, "src/index.html"),
        two: resolve(__dirname, "src/program.html"),
        three: resolve(__dirname, "src/workshops.html"),
        four: resolve(__dirname, "src/værmed.html"),
        five: resolve(__dirname, "src/omos.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});