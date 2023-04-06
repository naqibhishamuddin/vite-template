import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ["src/__tests__/setup.ts"],
      coverage: {
        provider: "istanbul",
      },
      globals: true,

      environment: "jsdom",
    },
  })
);
