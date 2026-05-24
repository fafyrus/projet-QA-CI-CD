import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import { defineConfig } from "eslint/config";
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly"
      }
    }
  },
  {
    files: ["**/*.test.js"],
    plugins: { jest },
    extends: ["jest/recommended"],
    languageOptions: {
      globals: jest.environments.globals.globals
    }
  }
]);
