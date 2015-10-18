# media-query-types [![Build Status](https://secure.travis-ci.org/johnotander/media-query-types.png?branch=master)](https://travis-ci.org/johnotander/media-query-types) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

List of all CSS media query types specified by the [W3C](http://www.w3.org/TR/CSS21/media.html).

## Installation

```bash
npm install --save media-query-types
```

## Usage

```javascript
var mediaQueryTypes = require('media-query-types')

mediaQueryTypes()
// => [
//   'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
//   'speech', 'tty', 'tv', 'pointer', 'hover', 'block-overflow'
// ]

mediaQueryTypes({ skipCssnext: true })
// => [
//   'all', 'braille', 'embossed', 'handheld', 'print', 'projection', 'screen',
//   'speech', 'tty', 'tv'
// ]
```

### Options

* `skipCss4` (`boolean`): Don't include cssnext media query types

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
