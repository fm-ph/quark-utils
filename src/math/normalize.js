/**
 * Normalize a value between two bounds
 *
 * @param {number} val Value to normalize
 * @param {number} min Minimum boundary
 * @param {number} max Maximum boundary
 * @return {number} Normalized value
 */
export function normalize (val, min, max) {
  return (val - min) / (max - min)
}
