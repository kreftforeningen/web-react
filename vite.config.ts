import { dirname, resolve } from "node:path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(resolve(__dirname, "package.json"), "utf8"));
const externalPackages = Array.from(
  new Set([
    ...Object.keys(pkg.dependencies ?? {}),
    ...Object.keys(pkg.peerDependencies ?? {}),
  ])
);
const isExternal = (id: string) =>
  externalPackages.some(
    (name) => id === name || id.startsWith(`${name}/`),
  );

export default defineConfig({
  plugins: [
    dts({ include: ["src"], exclude: ["src/App.tsx", "src/main.tsx", "src/demo/**"] }),
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
      external: isExternal,
    },
  },
});
