/**
 * Smooth a value using cubic Hermite interpolation
 *
 * @param {number} val Value to smooth
 * @param {number} min Minimum boundary
 * @param {number} max Maximum boundary
 * @return {number} Normalized smoothed value
 */
export function smoothstep (val, min, max) {
  const x = Math.max(0, Math.min(1, (val - min) / (max - min)))
  return x * x * (3 - 2 * x)
}
