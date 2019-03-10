'use strict';

import test from 'ava';
import equalsish from '.';

test('export function', t => {
	t.is(typeof equalsish, 'function');
});

test('no arguments', t => {
	t.throws(equalsish, 'No arguments provided.');
});

test('return true for equal strings', t => {
	t.true(equalsish('blasphemy', 'blasphemy'));
});

test('ignore case', t => {
	t.true(equalsish('npm', 'Npm'));
	t.true(equalsish('npm', 'NPM'));
	t.true(equalsish('nPm', 'npM'));
});

test('ignore non-alphanumerics', t => {
	t.true(equalsish('Fullmetal', 'Full-Metal'));
	t.true(equalsish('Fullmetal', 'Full.Metal'));
	t.true(equalsish('Fullmetal', 'Full Metal'));
});

test('ignore diacritics', t => {
	t.true(equalsish('Pokémon', 'pokemon'));
});

test('ignore everything at once', t => {
	t.true(equalsish('Pokémon FireRed', 'pokemon_fire-red'));
});

test('currying', t => {
	const likeJS = equalsish('JavaScript');
	t.true(likeJS('java script'));
});
