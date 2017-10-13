import { normalize } from '../../src/math'

describe('math.normalize()', () => {
  it('Normalize value 5 in range 0;100', () => {
    expect(normalize(50, 0, 100)).toBe(0.5)
  })

  it('Normalize value -2 in range 0;-10', () => {
    expect(normalize(-2, 0, -10)).toBe(0.2)
  })
})
