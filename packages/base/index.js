import eslintJS from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { importX as eslintPluginImportX } from 'eslint-plugin-import-x';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default defineConfig([
  eslintJS.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginJest.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-nested-ternary': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side effect imports.
            ['^\\u0000'],
            // Packages.
            // React, then things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^react', '^@?\\w'],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^'],
            // @t3n namespace packages
            ['^@t3n'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
