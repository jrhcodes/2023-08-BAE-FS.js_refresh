import { roundTo2DP } from "./jrhmathutils";

export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const returnArray = [];
	nums.forEach(value => {
		if (value < 1) {
			returnArray.push(value);
		}
	} );
	return returnArray;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const returnArray = [];
	names.forEach(name => {
        if (name[0] === char) {
            returnArray.push(name);
        }
	});
	return returnArray;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const returnArray = [];
	words.forEach(word => {
		if (word.length > 3 && word.substring(0,3).toLowerCase() === 'to ') {
			returnArray.push(word);
        }
	});
    return returnArray;
	
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const returnArray = [];
	nums.forEach(value => {
		if (value % 1.0 === 0) {
			returnArray.push(value);
		}
	});
	return returnArray;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const returnArray = [];
	users.forEach(user => {
		returnArray.push(user.data.city.displayName);
	});
	return returnArray;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	const returnArray = [];
	nums.forEach(value => {
        returnArray.push(roundTo2DP(Math.sqrt(value)));
    });
	return returnArray;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	const lowerCaseStr = str.toLowerCase();
	const returnArray = [];
	sentences.forEach(sentence => {
		if (sentence.toLowerCase().indexOf(lowerCaseStr) !== -1) {
             returnArray.push(sentence);
        }
	});
	return returnArray;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	const returnArray = [];
	triangles.forEach(triangle => {
        const longestSide = Math.max(...triangle);
        returnArray.push(longestSide);
	});
	return returnArray;
}
