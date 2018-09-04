# equalsish
> Compare strings ignoring case, punctuation, diacritics, etc.

[![Travis (.org)](https://img.shields.io/travis/dar5hak/equalsish.svg?style=flat-square)](https://travis-ci.org/dar5hak/equalsish)
[![npm](https://img.shields.io/npm/v/equalsish.svg?style=flat-square)](https://www.npmjs.com/package/equalsish)
[![license](https://img.shields.io/npm/l/equalsish.svg?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0)

## Install

```sh
$ npm install --save equalsish
```

## Usage

```js
const equalsish = require('equalsish');

console.log(equalsish('Node.js', 'nodejs')); // => true
console.log(equalsish('Pokémon FireRed', 'pokemon_fire-red')); // => true

/* Currying */
const likeJS = equalsish('JavaScript');
console.log(likeJS('java script')); // => true;
```

## License

Apache-2.0 © [Darshak Parikh](https://github.com/dar5hak)
