import { roundTo2DP, floorTo2DP } from "../lib/utils.js";

export function capitalize(word) {
  if (!word || typeof word !== "string" || word === "") {
    return word;
  }

  const firstLetter = word.charAt(0);
  const firstLetterCapitalised = firstLetter.toUpperCase();
  const remainingLetters = word.slice(1);

  return firstLetterCapitalised + remainingLetters;
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined || firstName === "")
    throw new Error("firstName is required");
  if ((lastName === undefined) | (lastName === ""))
    throw new Error("lastName is required");

  if (typeof firstName !== "string")
    throw new Error("firstName must be a string");
  if (typeof lastName !== "string")
    throw new Error("lastName must be a string");

  if (!/^[A-Za-z]+$/.test(firstName))
    throw new Error("firstName must contain only letters");
  if (!/^[A-Za-z]+$/.test(lastName))
    throw new Error("lastName must contain only letters");

  return (
    firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase()
  );
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return roundTo2DP(originalPrice * (1 + vatRate / 100.0));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return floorTo2DP(originalPrice * (1 - reduction / 100.0));
}

export function getMiddleCharacter(str) {
  if (str === undefined || str.length === 0)
    throw new Error("Non-empty str is required");
  const halfStringLengthRoundedDown = Math.floor(str.length / 2);
  const stringIsEvenLength = str.length % 2 === 0;
  if (stringIsEvenLength) {
    return (
      str.charAt(halfStringLengthRoundedDown - 1) +
      str.charAt(halfStringLengthRoundedDown)
    );
  } else {
    return str.charAt(halfStringLengthRoundedDown);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return [...word]
    .map((letter, index, array) => array[array.length - index - 1])
    .join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word) => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type.toLowerCase() === "linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return roundTo2DP(
    scores.reduce((total, value, _, array) => total + value / array.length, 0)
  );
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  const fizzFactor = n % 3 === 0 ? 1 : 0;
  const buzzFactor = n % 5 === 0 ? 2 : 0;
  const call = [n, "fizz", "buzz", "fizzbuzz"];
  return call[fizzFactor + buzzFactor];
}
