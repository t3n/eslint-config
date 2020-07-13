# @t3n/eslint-config-typescript

This package provide an extensible ESLint configuration for Typescript development in (not exclusively) the t3n.de domain.

## Installation

```
npm install --dev @t3n/eslint-config @t3n/eslint-config-typescript
```

To use the provided ESLint configuration, you need to have `eslint` as well as some other peerDependencies installed in your project. You can do this by following one of these two steps:

**Install peerDependencies automatically (requires npm 5+)**

```sh
npx install-peerdeps --dev @t3n/eslint-config && npx install-peerdeps --dev @t3n/eslint-config-typescript
```

**Manually install peerDependencies**

List the projects peerDependencies by running the following command:

```sh
npm info "@t3n/eslint-config-typescript" peerDependencies
```

Install all the listed peerDependencies as devDependencies in your project.

## Usage

In your project's [.eslintrc](https://eslint.org/docs/user-guide/configuring), add the following:

```
{
  "extends": ["@t3n/eslint-config", "@t3n/eslint-config-typescript"]
}
```
