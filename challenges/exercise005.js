import { countCharOccurrences } from "../lib/utils.js";

export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const index = nums.indexOf(n);
  return index === -1 || index === nums.length - 1 ? null : nums[index + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return {
    1: countCharOccurrences(str, "1"),
    0: countCharOccurrences(str, "0"),
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number([...n.toString()].reverse().join(""));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.reduce(
    (total, vector) =>
      vector.reduce((subtotal, value) => subtotal + value, 0) + total,
    0
  );
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  if (arr.length == 2) return [arr[1], arr[0]];
  return [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]];
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return Object.values(haystack).some((value) =>
    value.toString().toLowerCase().includes(lowerCaseSearchTerm)
  );
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  return str
    .toLowerCase()
    .match(/\b\w+\b/g)
    .reduce(
      (frequencies, word) => ({
        ...frequencies,
        [word]: (frequencies[word] || 0) + 1,
      }),
      {}
    );
};
