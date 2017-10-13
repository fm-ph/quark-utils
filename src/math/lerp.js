/**
 * Linear interpolation between two values (lerping)
 *
 * @param {number} val Normalized value to interpolate between x and y
 * @param {number} x First value
 * @param {number} y Second value
 * @return {number} Lerped value
 */
export function lerp (val, x, y) {
  return x + ((y - x) * val)
}
