# @t3n/eslint-config-react

This package provides an extensible ESLint configuration for React development in (not exclusively) the t3n.de domain.

## Installation

```
npm install --dev @t3n/eslint-config-react
```

To use the provided ESLint configuration, you need to have `eslint` as well as some other peerDependencies installed in your project. You can do this by following one of these two steps:

**Install peerDependencies automatically (requires npm 5+)**

```sh
npx install-peerdeps --dev @t3n/eslint-config && npx install-peerdeps --dev @t3n/eslint-config-react
```

**Manually install peerDependencies**

List the projects peerDependencies by running the following command:

```sh
npm info "@t3n/eslint-config-react" peerDependencies
```

Install all the listed peerDependencies as devDependencies in your project.

## Usage

`@t3n/eslint-config-react` extends `eslint-config-airbnb` rules, including react rules, as well as rules for `jest` unit tests and `prettier`.

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n/eslint-config", "@t3n/eslint-config-react"]
}
```
