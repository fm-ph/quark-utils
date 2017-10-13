import { createCanvas } from '../../src/dom'

describe('dom.createCanvas()', () => {
  it('Expect to return a canvas element', () => {
    expect(createCanvas() instanceof window.HTMLCanvasElement).toBeTruthy()
  })

  it('Expect to get given width and height', () => {
    const canvas = createCanvas(100, 50)
    expect(canvas.width).toBe(100)
    expect(canvas.height).toBe(50)
  })

  it('Expect to get default width and height', () => {
    const canvas = createCanvas()
    expect(canvas.width).toBe(window.innerWidth)
    expect(canvas.height).toBe(window.innerHeight)
  })
})
