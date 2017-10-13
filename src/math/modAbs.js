/**
 * Modulo absolute a value based on a length
 *
 * @param {number} val Value
 * @param {number} length Length
 * @return {number} Modulated value
 */
export function modAbs (val, length) {
  if (val < 0) {
    val = length + val % length
  }
  if (val >= length) {
    return val % length
  }
  return val
}
