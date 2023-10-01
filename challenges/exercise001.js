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
	return Math.round(originalPrice * (1+vatRate/100.0));
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	return Math.floor(originalPrice*(1-reduction/100.0));
}

export function getMiddleCharacter(str) {
	if (str === undefined || str.length == 0 ) throw new Error('Non-empty str is required');
	const halfStringLengthRoundedDown = Math.floor(str.length / 2);
	const stringIsEvenLength = str.length %2 == 0;
	if (stringIsEvenLength) {
		return str.charAt(halfStringLengthRoundedDown-1) + str.charAt(halfStringLengthRoundedDown);
	} else {
		return str.charAt(halfStringLengthRoundedDown);
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
