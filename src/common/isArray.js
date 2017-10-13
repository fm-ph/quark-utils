/**
 * Check if value is an Array
 *
 * @param {any} val Value
 * @return {boolean} True if value is an Array, false otherwise
 */
export function isArray (val) {
  return !!(val && val.constructor === Array)
}
