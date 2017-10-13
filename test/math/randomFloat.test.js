import { randomFloat } from '../../src/math'

describe('math.randomFloat()', () => {
  it('Expect a random float in range 0;1', () => {
    const value = randomFloat(0, 1)

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThanOrEqual(1)
  })

  it('Expect a random float in range 25;50 with precision 4', () => {
    const value = randomFloat(25, 50, 4)

    expect(value).toBeGreaterThanOrEqual(25)
    expect(value).toBeLessThanOrEqual(50)
    expect(value.toString()).toMatch(/^\d+\.\d{0,4}$/)
  })
})
