import { modAbs } from '../../src/math'

describe('math.modAbs()', () => {
  it('Modulo absolute value 5 with length 10', () => {
    expect(modAbs(5, 10)).toBe(5)
  })

  it('Modulo absolute value 10 with length 10', () => {
    expect(modAbs(10, 10)).toBe(0)
  })

  it('Modulo absolute value -6 with length 5', () => {
    expect(modAbs(-6, 5)).toBe(4)
  })
})
