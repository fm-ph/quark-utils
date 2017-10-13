/**
 * Clamp a value between two bounds
 *
 * @param {number} val Value to clamp
 * @param {number} min Minimum boundary
 * @param {number} max Maximum boundary
 * @return {number} Clamped value
 */
export function clamp (val, min, max) {
  return Math.min(max, Math.max(min, val))
}
