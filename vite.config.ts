import { defineConfig } from "vite";
import { resolve } from "path";
import packageJson from "./package.json";

export default defineConfig({
  define: {
    PACKAGE_VERSION: JSON.stringify(packageJson.version),
  },
  build: {
    target: "ES2016",
    sourcemap: true,
    lib: {
      entry: {
        schemas: resolve(__dirname, "src/schemas/index.ts"),
        utils: resolve(__dirname, "src/utils/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["zod"],
      output: {
        dir: "dist",
        entryFileNames: "[name]/index.js",
        chunkFileNames: "[name]/[hash].js",
        globals: {
          zod: "zod",
        },
      },
    },
  },
});
