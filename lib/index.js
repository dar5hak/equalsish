'use strict';

var diacriticless = require('diacriticless');

String.prototype.equalsish = function (otherString) {
	return clean(this) === clean(otherString);
};

function clean(string) {
	return alphanumericize(diacriticless(string.toString()).toLowerCase());
}

function alphanumericize(string) {
	return string.replace(/[^a-z0-9]/g, '');
}
