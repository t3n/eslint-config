module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 1,
    'no-console': 1,
    'no-nested-ternary': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', 'tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/no-unused-prop-types': 0,
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
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
          // @†3n namespace packages
          ['^@t3n'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
