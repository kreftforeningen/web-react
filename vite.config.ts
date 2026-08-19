import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({ include: ["src/lib"] }),
    react(), // Enable React
    cssInjectedByJsPlugin(), // Inject CSS into JS
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "main.es.js" : "main.cjs.js"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "styled-components"],
    },
  },
});
