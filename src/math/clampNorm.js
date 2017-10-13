/**
 * Clamp a value between 0 and 1 (normalized)
 *
 * @param {number} val Value to clamp
 * @return {number} Clamped value
 */
export function clampNorm (val) {
  return val < 0 ? 0 : (val > 1 ? 1 : val)
}
