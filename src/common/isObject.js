import { isArray } from './isArray'

/**
 * Check if value is an Object
 *
 * @param {any} val Value
 * @return {boolean} True if value is an Object, false otherwise
 */
export function isObject (val) {
  return (val === Object(val) && !isArray(val))
}
