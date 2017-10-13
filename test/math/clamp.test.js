import { clamp } from '../../src/math'

describe('math.clamp()', () => {
  it('Clamp value 10 between range 0-1', () => {
    expect(clamp(10, 0, 1)).toBe(1)
  })

  it('Clamp value -5 between range -10-0', () => {
    expect(clamp(-5, -10, 0)).toBe(-5)
  })
})
