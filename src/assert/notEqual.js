import { assert } from './assert'

/**
 * Check if actual value is not equal to expected value
 *
 * @param {any} actual Actual value
 * @param {any} expected Expected value
 * @param {string} message Message if equal assertion
 *
 * @throws {Error} Thrown if assertion is equal
 */
export function notEqual (actual, expected, message) {
  return assert(actual !== expected, message)
}
