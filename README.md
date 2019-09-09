# @t3n/eslint-config

This package provides two extensible ESLint configurations for Javascript development (not exclusively) in the t3n.de domain.

## Installation 

```
npm install --dev @t3n/eslint-config
```

To use the provided ESLint configurations, you need to have `eslint` as well as some other peerDependencies installed in your project. You can do this by following one of these two steps: 

**Install peerDependencies automatically (requires npm 5+)**

```sh
npx install-peerdeps --dev @t3n/eslint-config
```

**Manually install peerDependencies**

List the projects peerDependencies by running the following command:

```sh
npm info "eslint-config-airbnb-base@latest" peerDependencies
```

Install all the listed peerDependencies as devDependencies in your project.

## Usage 

### @t3n/eslint-config

`@t3n/eslint-config` extends `airbnb` ESLint rules, including react rules, as well as rules for `jest` unit tests and `prettier`.

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n"]
}
```

or: 

```
{
  "extends": ["@t3n/eslint-config"]
}
```

### @t3n/eslint-config/typescript

`@t3n/eslint-config/typescript` adds `@typescript-eslint` configuration and rules as well as Typescript rules for `prettier`.

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n/eslint-config/typescript"]
}
```