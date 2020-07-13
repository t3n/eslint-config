# @t3n/eslint-config

This monorepo provides the development environment for three packages with extensible ESLint configurations for Javascript, React and Typescript development in (not exclusively) the t3n.de domain.

## Packages

### @t3n/eslint-config

Provides the extensible base eslint configuration for javascript projects. It extends `eslint-config-airbnb-base`, as well as rules for `jest` unit tests and `prettier` formatting.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n/eslint-config"]
}
```

### @t3n/eslint-config-react

Use this configuration alongside the base configuration if your project uses React. It extends `eslint-config-airbnb`.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n/eslint-config", "@t3n/eslint-config-react"]
}
```

### @t3n/eslint-config-typescript

Use this configuration alongside the base configuration if your project uses Typescript.

#### Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n/eslint-config", "@t3n/eslint-config-typescript"]
}
```

## Development

Install all necessary development dependencies by running `npm install --dev`
