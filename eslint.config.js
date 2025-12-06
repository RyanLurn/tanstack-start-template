// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import { configs as tsConfigs } from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import { importX } from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores([
    "**/routeTree.gen.ts",
    "dist/",
    "dist-ssr/",
    ".tanstack/",
    ".wrangler/",
    ".output/",
  ]),
  js.configs.recommended,
  tsConfigs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
      },
    },
  },
  perfectionist.configs["recommended-line-length"],
  // @ts-expect-error ignore type incompatibility
  importX.flatConfigs.recommended,
  // @ts-expect-error ignore type incompatibility
  importX.flatConfigs.typescript,
  unicorn.configs.recommended,
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  prettier,
]);
