# @t3n/eslint-config-react

This package provides an extensible ESLint configuration for React development in (not exclusively) the t3n.de domain.

**Note:** This package uses ESLint v9's flat config format. Make sure you're using ESLint v9 or later.

## Installation

```bash
npm install --save-dev @t3n/eslint-config @t3n/eslint-config-react
```

## Usage

In your project's `eslint.config.js`, add the following:

```js
import baseConfig from '@t3n/eslint-config';
import reactConfig from '@t3n/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([baseConfig, reactConfig]);
```

## ESM Projects and Import Extensions

When using this configuration in ESM projects (projects with `"type": "module"` in package.json), you may encounter ESLint errors about file extensions in import statements:

```
error  Unexpected use of file extension "js" for "./path/to/file.js"  import/extensions
```

This happens because Node.js ESM requires explicit file extensions (`.js`, `.mjs`) for relative imports, but the default `import/extensions` rule enforces omitting them.

### Solution

To resolve this in your project's `eslint.config.js`, override the rule to allow `.js` extensions:

```js
import baseConfig from '@t3n/eslint-config';
import reactConfig from '@t3n/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  baseConfig,
  reactConfig,
  {
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always', // or 'ignorePackages' to allow .js extensions
          mjs: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
]);
```

Alternatively, you can disable the rule entirely for your project:

```js
import baseConfig from '@t3n/eslint-config';
import reactConfig from '@t3n/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  baseConfig,
  reactConfig,
  {
    rules: {
      'import/extensions': 'off',
    },
  },
]);
```
