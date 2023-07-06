import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  test: {
    setupFiles: ["tests/setup.ts"],
    coverage: {
      provider: "istanbul",
    },
    globals: true,
    environment: "jsdom",
  },
});
