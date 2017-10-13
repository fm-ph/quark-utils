import { clampNorm } from '../../src/math'

describe('math.clampNorm()', () => {
  it('ClampNorm value -5', () => {
    expect(clampNorm(-5)).toBe(0)
  })

  it('ClampNorm value 0.8', () => {
    expect(clampNorm(0.8)).toBe(0.8)
  })

  it('ClampNorm value 10', () => {
    expect(clampNorm(10)).toBe(1)
  })
})
