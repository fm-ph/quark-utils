import { assert } from './assert'

/**
 * Check if actual value is falsy
 *
 * @param {boolean} expression Expression
 * @param {string} message Message if expression is true
 *
 * @throws {Error} Thrown if assertion is not equal assertion
 */
export function falsy (expression, message) {
  return assert(!expression, message)
}
