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
        schemas: resolve(__dirname, "src/schemas/index.ts.ts"),
        utils: resolve(__dirname, "src/utils/index.ts"),
      },
    },
    rollupOptions: {
      input: {
        schemas: resolve(__dirname, "src/schemas/index.ts"),
        utils: resolve(__dirname, "src/utils/index.ts"),
      },
      output: {
        globals: {
          zod: "zod",
        },
      },
      external: ["zod"],
    },
  },
});
