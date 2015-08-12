'use strict';

var assert = require('assert');
require('../lib/index');

describe('equalsish', function () {
	it('should add a prototype method to String', function () {
		assert(String.prototype.equalsish);
	});

	it('should return true for equal strings', function () {
		assert('hello'.equalsish('hello'));
	});

	it('should ignore case', function () {
		assert('npm'.equalsish('Npm'));
		assert('npm'.equalsish('NPM'));
		assert('nPm'.equalsish('npM'));
	});

	it('should ignore non-alphanumerics', function () {
		assert('Fullmetal'.equalsish('Full Metal'));
		assert('Fullmetal'.equalsish('Full-Metal'));
		assert('Fullmetal'.equalsish('Full.Metal'));
	});

	it('should ignore diacritics', function () {
		assert('Pokémon'.equalsish('pokemon'));
	});

	it('should ignore everything at once', function () {
		assert('Pokémon FireRed'.equalsish('pokemon_fire-red'));
	});
});
