import { defineConfig } from "vite";
import { resolve } from "path";
import { execSync } from "child_process";
import packageJson from "./package.json";

// Run the version script and get the updated schema version
const version = execSync("node ./updateSchemaVersion.js");

export default defineConfig({
  define: {
    PACKAGE_VERSION: JSON.stringify(packageJson.version),
    SCHEMA_VERSION: version,
  },
  build: {
    target: "ES2016",
    lib: {
      entry: {
        schemas: resolve(__dirname, "src/schemas/index.ts"),
        utils: resolve(__dirname, "src/utils/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.dependencies)],
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
