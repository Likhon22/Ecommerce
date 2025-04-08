// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [".node_modules/*"],
  },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": "warn",
      "no-var": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
