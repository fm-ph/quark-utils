import { randomInt } from '../../src/math'

describe('math.randomInt()', () => {
  it('Expect a random integer in range 0;100', () => {
    const value = randomInt(0, 100)

    expect(value).toBeGreaterThanOrEqual(0)
    expect(value).toBeLessThanOrEqual(100)
  })

  it('Expect a random integer in range -50;-150', () => {
    const value = randomInt(-50, -150)

    expect(value).toBeLessThanOrEqual(-50)
    expect(value).toBeGreaterThanOrEqual(-150)
  })
})
