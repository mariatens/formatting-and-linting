"use strict";

/**
 * Count how many whole occurrences of a string there are in an array.
 * Partial matches are not counted.
 * The count should be case sensitive.
 *
 * @param {string[]} y - array of strings to check
 * @param {string} n - string to count occurrences off
 * @returns {number} how many occurrences of the string are in the array
 */
function countOccurrences(strArr, targetStr) {
  let occurrences = 0;
  for (let str of strArr) {
    if ((targetStr == str)) {
      occurrences++;
    }
  }
  return occurrences;
}

console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "na"), 4);
console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "BATMAN"), 1);
console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "batman"), 0);
console.log(countOccurrences(["na", "na", "na", "na", "BATMAN"], "a"), 0);
