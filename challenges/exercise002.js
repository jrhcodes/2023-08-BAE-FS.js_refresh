export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	return person.city == "Manchester";
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	return Math.floor(people / 40) + (people % 40 == 0 ? 0 : 1);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	return arr.reduce((total, animal) => total + (animal == 'sheep' ? 1 : 0), 0);
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	return /^[Mm][^a-zA-Z]/.test(person.address.postCode);
}
