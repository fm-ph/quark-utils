/**
 * Check if a number is even
 *
 * @param {number} number Number
 * @return {boolean} True if the given number is even, false otherwise
 */
function isEven (number) {
  return !(number & 1)
}

export { isEven }
