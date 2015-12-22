# equalsish
> Compare strings ignoring case, punctuation, diacritics, etc.


## Install

```sh
$ npm install --save equalsish
```

## Usage

```js
const equalsish = require('equalsish');

console.log(equalsish('Node.js', 'nodejs')); // => true
console.log(equalsish('Pokémon FireRed', 'pokemon_fire-red')); // => true
```

## License

Apache-2.0 © [Darshak Parikh](github.com/dar5hak)
