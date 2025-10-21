# @t3n/eslint-configs

This monorepo provides the development environment for three packages with extensible ESLint configurations for Javascript, React and Typescript development in (not exclusively) the t3n.de domain.

**Note:** These packages use ESLint v9's flat config format. Make sure you're using ESLint v9 or later.

## Packages

### @t3n/eslint-config

Provides the extensible base eslint configuration for javascript projects.

#### Usage

In your project's `eslint.config.js`, add the following:

```js
import baseConfig from '@t3n/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([baseConfig]);
```

### @t3n/eslint-config-react

Use this configuration alongside the base configuration if your project uses React.

#### Usage

In your project's `eslint.config.js`, add the following:

```js
import baseConfig from '@t3n/eslint-config';
import reactConfig from '@t3n/eslint-config-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([baseConfig, reactConfig]);
```

### @t3n/eslint-config-typescript

Use this configuration alongside the base configuration if your project uses Typescript.

#### Usage

In your project's `eslint.config.js`, add the following:

```js
import baseConfig from '@t3n/eslint-config';
import typescriptConfig from '@t3n/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([baseConfig, typescriptConfig]);
```

#### Combined Usage (React + TypeScript)

For projects using both React and TypeScript:

```js
import baseConfig from '@t3n/eslint-config';
import reactConfig from '@t3n/eslint-config-react';
import typescriptConfig from '@t3n/eslint-config-typescript';
import { defineConfig } from 'eslint/config';

export default defineConfig([baseConfig, reactConfig, typescriptConfig]);
```

## ESM Projects and Import Extensions

When using these configurations in ESM projects (projects with `"type": "module"` in package.json), you may encounter ESLint errors about file extensions in import statements:

```
error  Unexpected use of file extension "js" for "./path/to/file.js"  import/extensions
```

This happens because Node.js ESM requires explicit file extensions (`.js`, `.mjs`) for relative imports, but the default `import/extensions` rule enforces omitting them.

### Solution

To resolve this in your project's `eslint.config.js`, override the rule to allow `.js` extensions:

```js
import baseConfig from '@t3n/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  baseConfig,
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
import { defineConfig } from 'eslint/config';

export default defineConfig([
  baseConfig,
  {
    rules: {
      'import/extensions': 'off',
    },
  },
]);
```

## Development

Install all necessary development dependencies by running `npm install`
