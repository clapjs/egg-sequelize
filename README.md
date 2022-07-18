# egg-clap-sequelize

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-clap-sequelize.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-clap-sequelize
[travis-image]: https://img.shields.io/travis/eggjs/egg-clap-sequelize.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-clap-sequelize
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-clap-sequelize.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-clap-sequelize?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-clap-sequelize.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-clap-sequelize
[snyk-image]: https://snyk.io/test/npm/egg-clap-sequelize/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-clap-sequelize
[download-image]: https://img.shields.io/npm/dm/egg-clap-sequelize.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-clap-sequelize

<!--
Description here.
-->

## Install

```bash
$ npm i egg-clap-sequelize --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.clapSequelize = {
  enable: true,
  package: 'egg-clap-sequelize',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.clapSequelize = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
