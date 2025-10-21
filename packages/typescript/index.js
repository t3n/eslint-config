import { defineConfig } from 'eslint/config';
import { importX as eslintPluginImportX } from 'eslint-plugin-import-x';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { configs as eslintPluginTypescriptConfigs } from 'typescript-eslint';

export default defineConfig([
  eslintPluginTypescriptConfigs.recommended,
  eslintPluginTypescriptConfigs.stylistic,
  eslintPluginImportX.flatConfigs.typescript,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'],
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]);
