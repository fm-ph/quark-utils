import { lerp } from '../../src/math'

describe('math.lerp()', () => {
  it('Lerp value 0.1 between range 0;100', () => {
    expect(lerp(0.1, 0, 100)).toBe(10)
  })

  it('Lerp value 0.65 between range 0;-50', () => {
    expect(lerp(0.65, 0, -50)).toBe(-32.5)
  })
})
