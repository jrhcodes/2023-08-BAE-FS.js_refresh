import {
	argumentRequired,
	requiredNumberArrayArgument,
	requiredArrayArgument,
	requiredStringArgument
} from "../lib/arglib";

export function printColours(colours) {
	requiredArrayArgument({ colours });
	console.log(...colours);
	return [...colours];
}

export function shoppingList(list, newItem) {
	requiredArrayArgument({ list });
	requiredArrayArgument({ newItem });
	return [...list, ...newItem];
}

export function highestNumber(numbers) {
	requiredNumberArrayArgument({ numbers });
	return Math.max(...numbers);
}

export function splitThatString(string) {
	requiredStringArgument({ string });
	return [...string];
}

export function addressLookUp(user) {
	argumentRequired({ user });
	return user?.address?.postcode;
}
