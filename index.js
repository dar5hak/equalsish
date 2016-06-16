'use strict';

const naked = require('naked-string');

module.exports = function equalsish(stringOne, stringTwo) {
	if (stringOne === undefined) {
		throw new Error('No arguments provided.');
	} else if (stringTwo === undefined) {
		return futureString => equalsish(stringOne, futureString);
	} else {
		return naked(stringOne) === naked(stringTwo);
	}
};
