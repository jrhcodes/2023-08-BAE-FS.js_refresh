// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');

	const firstLetter = word.charAt(0);
	const firstLetterCapitalised = firstLetter.toUpperCase();
	const remainingLetters = word.slice(1);

	return firstLetterCapitalised + remainingLetters;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	return Math.round(originalPrice * (100 + vatRate)) / 100.0;
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	return Math.floor(originalPrice * (100 - reduction)) / 100.0;
}

export function getMiddleCharacter(str) {
	if (str === undefined || str.length == 0) throw new Error('Non-empty str is required');
	const halfStringLengthRoundedDown = Math.floor(str.length / 2);
	const stringIsEvenLength = str.length % 2 == 0;
	if (stringIsEvenLength) {
		return str.charAt(halfStringLengthRoundedDown - 1) + str.charAt(halfStringLengthRoundedDown);
	} else {
		return str.charAt(halfStringLengthRoundedDown);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	return word.split('').map((letter, index, array) => array[array.length - index - 1]).join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	return users.filter(user => user.type.toLowerCase() == 'linux').length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	return Math.round(100 * scores.reduce((total, value, _, array) => total + value / array.length, 0)) / 100.0;
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	const fizzFactor = n % 3 == 0 ? 1 : 0;
	const buzzFactor = n % 5 == 0 ? 2 : 0;
	const call = [n, "fizz", "buzz", "fizzbuzz"];
	return call[fizzFactor + buzzFactor];
}
