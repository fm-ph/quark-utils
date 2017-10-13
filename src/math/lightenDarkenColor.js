import { clamp } from '../math/clamp'

/**
 * Lighten or darken a color
 *
 * @param {string} col Color in hexadecimal
 * @param {number} [amt=0] Amount
 * @return {string} Computed hexadecimal
 */
export function lightenDarkenColor (col, amt = 0) {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt
  r = clamp(r, 0, 255)

  let b = ((num >> 8) & 0x00FF) + amt
  b = clamp(b, 0, 255)

  let g = (num & 0x0000FF) + amt
  g = clamp(g, 0, 255)

  let result = g | (b << 8) | (r << 16)

  if (r === 0 && g === 0 && b === 0 && amt !== 0) {
    result = '000000'
  }

  return (usePound ? '#' : '') + (result).toString(16)
}
