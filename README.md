# equalsish [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Compare strings ignoring case, punctuation, diacritics, etc.


## Install

```sh
$ npm install --save equalsish
```


## Usage

```js
require('equalsish');

'Node.js'.equalsish('nodejs') // => true
'Pokémon FireRed'.equalsish('pokemon_fire-red') // => true
```

## License

Apache-2.0 © [Darshak Parikh](github.com/dar5hak)


[npm-image]: https://badge.fury.io/js/equalsish.svg
[npm-url]: https://npmjs.org/package/equalsish
[travis-image]: https://travis-ci.org/dar5hak/equalsish.svg?branch=master
[travis-url]: https://travis-ci.org/dar5hak/equalsish
[daviddm-image]: https://david-dm.org/dar5hak/equalsish.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dar5hak/equalsish
