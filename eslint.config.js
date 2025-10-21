import { defineConfig } from 'eslint/config';

import baseConfig from './packages/base/index.js';
import reactConfig from './packages/react/index.js';
import typescriptConfig from './packages/typescript/index.js';

export default defineConfig([baseConfig, reactConfig, typescriptConfig]);
