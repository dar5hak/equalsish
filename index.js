'use strict';

const naked = require('naked-string');

module.exports = function equalsish(stringOne, stringTwo) {
	return naked(stringOne) === naked(stringTwo);
};
