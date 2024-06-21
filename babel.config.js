'use strict'

const semver = require('semver')
const pkg = require('./package.json')

const { version: targetNodeVersion } = semver.minVersion(pkg.engines.node)

module.exports = {
  plugins: [
    'replace-ts-export-assignment'
  ],
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: targetNodeVersion
        }
      }
    ],
  ],
  ignore: [
    'src/**/__tests__/fixtures/**'
  ],
};
