import { parabola } from '../../src/math'

describe('math.parabola()', () => {
  it('Compute parabola with value 1 and x value 0.5', () => {
    expect(parabola(1, 0.5)).toBe(1)
  })

  it('Compute parabola with value 0 and x value 0', () => {
    expect(parabola(1, 0)).toBe(0)
  })

  it('Compute parabola with value 1 and x value 1', () => {
    expect(parabola(1, 1)).toBe(0)
  })

  it('Compute parabola with value 1 and x value 0.8', () => {
    expect(parabola(1, 0.8)).toBeCloseTo(0.639)
  })
})
