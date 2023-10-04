import { roundTo2DP } from "./exlibrary";

export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter(value => value < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const lowerCaseChar = char.toLowerCase();
	return names.filter(name => name.toLowerCase().startsWith(lowerCaseChar));
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	return words.filter(word => word.length > 3 && word.substring(0,3).toLowerCase() === 'to ');
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter(value => value % 1.0 === 0);
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	return users.map(user => user.data.city.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.map(value => roundTo2DP(Math.sqrt(value)));
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	return sentences.filter(sentence => sentence.toLowerCase().indexOf(str.toLowerCase()) !== -1);
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	return triangles.map(triangle => Math.max(...triangle));

}
