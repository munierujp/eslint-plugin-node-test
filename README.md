> [!WARNING]
> This package is currently under development.

[![npm version](https://badge.fury.io/js/eslint-plugin-node-test.svg)](https://badge.fury.io/js/eslint-plugin-node-test)

# eslint-plugin-node-test

ESLint plugin for [Node.js's test runner](https://nodejs.org/api/test.html)

## Requirements

- Node.js v20 or later
- ESLint v8

## Installation

npm:

```sh
npm i -D eslint-plugin-node-test
```

Yarn:

```sh
yarn add -D eslint-plugin-node-test
```

pnpm:

```sh
pnpm add -D eslint-plugin-node-test	
```

Bun:

```sh
bun add -d eslint-plugin-node-test	
```

## Usage

Add `plugin:node-test/recommended` to the `extends` section of your [ESLint configuration file](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated).

JavaScript:

```javascript
module.exports = {
  extends: [
    'plugin:node-test/recommended'
  ]
}
```

YAML:

```yaml
extends: 
- "plugin:node-test/recommended"
```

JSON:

```json
{
  "extends": [
    "plugin:node-test/recommended"
  ]
}
```
