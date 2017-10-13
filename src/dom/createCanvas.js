/**
 * Create a canvas element
 *
 * @param {number} width Width
 * @param {number} height Height
 * @return {HTMLCanvasElement} Canvas element
 */
export function createCanvas (width = window.innerWidth, height = window.innerHeight) {
  const canvas = document.createElement('canvas')

  canvas.width = width
  canvas.height = height
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  return canvas
}
