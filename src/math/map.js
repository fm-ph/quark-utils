/**
 * Re-maps a number from one range to another
 *
 * @param {number} val The incoming value to be converted
 * @param {number} start1 Lower bound of the value's current range
 * @param {number} stop1 Upper bound of the value's current range
 * @param {number} start2 Lower bound of the value's target range
 * @param {number} stop2 Upper bound of the value's target range
 * @return {number} Remapped number
 */
export function map (val, start1, stop1, start2, stop2) {
  return ((val - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}
