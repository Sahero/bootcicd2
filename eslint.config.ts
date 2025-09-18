import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    ignores: ["node_modules/", "dist/", "coverage/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js }, extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    //ignores: ["node_modules/", "dist/", "coverage/"],
  },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
//-- --max-warnings=0
]);
