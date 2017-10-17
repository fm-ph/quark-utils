# [<img src="logo.png" alt="quark-utils" width="200">](https://github.com/fm-ph/quark-utils)

[![build status][travis-image]][travis-url]
[![stability][stability-image]][stability-url]
[![npm version][npm-image]][npm-url]
[![coverage][coveralls-image]][coveralls-url]
[![js-standard-style][standard-image]][standard-url]
[![semantic-release][semantic-release-image]][semantic-release-url]

Simple utils : ramdonInt, clamp, map, uuid, assert...

___This package is part of `quark` framework but it can be used independently.___

## Installation

[![NPM](https://nodei.co/npm/quark-utils.png)](https://www.npmjs.com/package/quark-utils)

```sh
npm install quark-utils --save
```

## Usage

```js
import { randomInt } from 'quark-utils/math'
import { createCanvas } from 'quark-utils/dom'
import { uuid } from 'quark-utils/common'

// Generate a ramdom number between 0 and 10
const number = randomInt(0, 10)

// Create a new 100x100 HTMLCanvasElement
const canvas = createCanvas(100, 100)

// Generate a UUID
const uuid = uuid()
```

## API

See [https://fm-ph.github.io/quark-utils/](https://fm-ph.github.io/quark-utils/)

## Build

To build the sources with `babel` in `./lib` directory :

```sh
npm run build
```

## Documentation

To generate the `JSDoc` :

```sh
npm run docs
```

To generate the documentation and deploy on `gh-pages` branch :

```sh
npm run docs:deploy
```

## Testing

To run the tests, first clone the repository and install its dependencies :

```sh
git clone https://github.com/fm_ph/quark-utils.git
cd quark-signal
npm install
```

Then, run the tests :

```sh
npm test
```

To watch (test-driven development) :

```sh
npm run test:watch
```

For coverage :

```sh
npm run test:coverage
```

## License

MIT [License](LICENSE.md) © [Patrick Heng](http://hengpatrick.fr/) [Fabien Motte](http://fabienmotte.com/) 

[travis-image]: https://img.shields.io/travis/fm-ph/quark-utils/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/fm-ph/quark-utils
[stability-image]: https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square
[stability-url]: https://nodejs.org/api/documentation.html#documentation_stability_index
[npm-image]: https://img.shields.io/npm/v/quark-utils.svg?style=flat-square
[npm-url]: https://npmjs.org/package/quark-utils
[coveralls-image]: https://img.shields.io/coveralls/fm-ph/quark-utils/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/fm-ph/quark-utils?branch=master
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
