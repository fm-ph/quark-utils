import { assert } from './assert'

/**
 * Check if actual value is equal to expected value
 *
 * @param {any} actual Actual value
 * @param {any} expected Expected value
 * @param {string} message Message if not equal
 *
 * @throws {Error} Thrown if assertion is not equal assertion
 */
export function equal (actual, expected, message) {
  return assert(actual === expected, message)
}
