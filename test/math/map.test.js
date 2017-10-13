import { map } from '../../src/math'

describe('math.map()', () => {
  it('Map value 1 in range 1;100 to value between 0;10', () => {
    expect(map(50, 0, 100, 0, 10)).toBe(5)
  })

  it('Map value 0.5 in range 0;1 to value between 0;100', () => {
    expect(map(0.5, 0, 1, 0, 100)).toBe(50)
  })
})
