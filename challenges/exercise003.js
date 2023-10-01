export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	return nums.map(val => val * val);
}

import { capitalize } from './exercise001.js'; 

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.reduce((output,word,index) => output + (index === 0 ? word : capitalize(word)), "");
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	return people.reduce((total, person) => total + person.subjects.length, 0);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	
	return menu.filter(dish => new Set(dish.ingredients).has(ingredient)).length > 0;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	const numbersInArr1 = new Set(arr1);
	const numbersInArr2 = new Set(arr2);
	const commonValues = [... numbersInArr2].filter(value => numbersInArr1.has(value));
	return commonValues.sort((a, b) => a-b);
}
