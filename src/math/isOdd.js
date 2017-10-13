/**
 * Check if a number is odd
 *
 * @param {number} number Number
 * @return {boolean} True if the given number is odd, false otherwise
 */
function isOdd (number) {
  return !!(number & 1)
}

export { isOdd }
