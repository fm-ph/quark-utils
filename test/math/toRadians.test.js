import { toRadians } from '../../src/math'

describe('math.toRadians()', () => {
  it('Convert value 180 deg to radians', () => {
    expect(toRadians(180)).toBe(Math.PI)
  })

  it('Convert value 30 deg to radians', () => {
    expect(toRadians(30)).toBeCloseTo(0.52)
  })

  it('Convert value -90 deg to radians', () => {
    expect(toRadians(-90)).toBeCloseTo(-Math.PI / 2)
  })
})
