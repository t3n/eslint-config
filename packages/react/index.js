module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
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
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
