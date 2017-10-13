import { distance } from '../../src/math'

describe('math.distance()', () => {
  it('Compute distance between points 0;20 and 45;75', () => {
    expect(distance(0, 20, 45, 75)).toBeCloseTo(71.06)
  })

  it('Compute distance between points -10;-35 and -70;5', () => {
    expect(distance(-10, -35, -70, 5)).toBeCloseTo(72.11)
  })
})
