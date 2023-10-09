import {
  requiredArgument,
  requiredNumberArrayArgument,
  requiredArrayArgument,
  requiredStringArgument,
  requiredStringArrayArgument,
} from "../lib/arguments";

export function printColours(colours) {
  requiredStringArrayArgument({ colours });
  if (colours === null || colours.length === 0)
    throw new Error("no colours passed");
  console.log(...colours);
  return [...colours];
}

export function shoppingList(list, newItems) {
  requiredArrayArgument({ list });
  requiredArrayArgument({ newItems });
  return [...list, ...newItems];
}

export function highestNumber(numbers) {
  requiredNumberArrayArgument({ numbers });
  if (numbers === null || numbers.length === 0)
    throw new Error("no numbers passed");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  requiredStringArgument({ string });
  return [...string];
}

export function addressLookUp(user) {
  requiredArgument({ user });
  return user?.address?.postcode;
}
