import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  // --------------------------------------------------
  // Ignore generated / vendor files
  // --------------------------------------------------
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "build/**",
    ],
  },

  // --------------------------------------------------
  // TypeScript + JSX (ESM) — main codebase
  // --------------------------------------------------
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      "no-undef": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        // ----------------------------------
        // Variables (default: camelCase)
        // ----------------------------------
        {
          selector: "variable",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        // ----------------------------------
        // React Components (PascalCase const)
        // ----------------------------------
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["PascalCase"],
          filter: {
            regex: "^[A-Z]",
            match: true,
          },
        },
        // ----------------------------------
        // Functions
        // ----------------------------------
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        // ----------------------------------
        // Types, interfaces, enums, classes
        // ----------------------------------
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        // ----------------------------------
        // Object properties
        // ----------------------------------
        {
          selector: "property",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
      ],

    },
  },

  // --------------------------------------------------
  // JavaScript ONLY — FORCE CommonJS
  // --------------------------------------------------
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ImportDeclaration",
          message: "Use CommonJS (require) in .js files.",
        },
        {
          selector: "ExportNamedDeclaration",
          message: "Use module.exports in .js files.",
        },
        {
          selector: "ExportDefaultDeclaration",
          message: "Use module.exports in .js files.",
        },
      ],
      "import/no-import-module-exports": "error",
    },
  },
];
