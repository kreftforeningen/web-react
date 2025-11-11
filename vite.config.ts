import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({ include: ["src/lib"] }), // Generate .d.ts files
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
      entry: resolve(__dirname, "src/lib/main.ts"), // Library entry point
      formats: ["es", "cjs"], // Output formats
    },
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: "assets/[name].[extname]",
        entryFileNames: "[name].[format].js",
      },
    },
  },
});
