// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    ignores: [
      "dist",
      "build",
      "dist",
      "node_modules",
      ".graphqlrc.js",
      "vite.config.ts",
      "postcss.config.ts",
    ],
  },
);
