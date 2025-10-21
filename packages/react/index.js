// import reactPlugin from 'eslint-plugin-react';
import eslintPluginReact from '@eslint-react/eslint-plugin';
import { defineConfig } from 'eslint/config';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default defineConfig([
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintPluginReact.configs.recommended,
  eslintPluginReactHooks.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.serviceworker,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      '@eslint-react/naming-convention/filename-extension': [
        'warn',
        'as-needed',
      ],
    },
  },
]);
