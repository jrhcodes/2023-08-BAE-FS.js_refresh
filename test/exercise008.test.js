import {
	printColours,
	shoppingList,
	highestNumber,
	splitThatString,
	addressLookUp,
} from '../challenges/exercise008.js';

import {
	errorMessageArgummentMissing, errorMessageStringRequired
} from '../lib/arglib.js';

describe('colours', () => {
	test('returns a list of colours', () => {
		const colours = ['red', 'orange', 'green'];
		expect(printColours(colours)).toEqual(colours);
	});
});

describe('shoppingList', () => {
	test('returns a list with an extra item', () => {
		const list = [
			'one apple',
			'two dozen organic eggs',
			'cucumber',
			'bread',
		];
		const newItem = ['earl grey tea'];
		expect(shoppingList(list, newItem)).toEqual([
			'one apple',
			'two dozen organic eggs',
			'cucumber',
			'bread',
			'earl grey tea',
		]);
	});

	test('returns an empty list with new items added to it', () => {
		const list = [];
		const newItem = ['jelly', 'melon', 'pear'];
		expect(shoppingList(list, newItem)).toEqual(['jelly', 'melon', 'pear']);
	});


});

describe('highestNumber', () => {
	test('returns the highest number', () => {
		const numbers = [12, 20, 18];
		expect(highestNumber(numbers)).toEqual(20);
	});
});

describe('splitThatString', () => {
	test('returns a string split up', () => {
		const string = 'USA';
		expect(splitThatString(string)).toEqual(['U', 'S', 'A']);
	});
	test('returns a string split up', () => {
		const string = '123';
		expect(splitThatString(string)).toEqual(['1', '2', '3']);
	});
	test('returns a string split up', () => {
		const string = '';
		expect(splitThatString(string)).toEqual([]);
	});
	test('throws an error when string is undefined', () => {
		const string = undefined;
		expect(() => splitThatString(string)).toThrow(errorMessageArgummentMissing({ string }));
		expect(() => splitThatString()).toThrow(errorMessageArgummentMissing({ string }));
	});

	test('throws an error when non-string is passed', () => {
		const string = undefined;
		expect(() => splitThatString(0)).toThrow(errorMessageStringRequired({ string }));
		expect(() => splitThatString(/w/)).toThrow(errorMessageStringRequired({ string }));
		expect(() => splitThatString([])).toThrow(errorMessageStringRequired({ string }));
		expect(() => splitThatString({})).toThrow(errorMessageStringRequired({ string }));
	});
});


describe('addressLookUp', () => {
	test('returns a string when postcode is given', () => {
		const user = [
			{
				address: {
					postcode: '12345',
				}
			},
			{
				address: {
					postcode: 'M31 4HH',
				}
			},
			{
				address: {
					postcode: '',
				}
			}
		];

		expect(addressLookUp(user[0])).toEqual('12345');
		expect(addressLookUp(user[1])).toEqual('M31 4HH');
		expect(addressLookUp(user[2])).toEqual('');

	});

	test('returns undefined when no postcode is given', () => {
		const user = { address: {} };

		expect(addressLookUp(user)).toEqual(undefined);

	});

	test('returns undefined when no address is given', () => {
		const user = {};
		expect(addressLookUp(user)).toEqual(undefined);
	});

	test('throws error when user is undefined', () => {
		const user = undefined;
		expect(() => addressLookUp(user)).toThrow(errorMessageArgummentMissing({ user }));
	});

});