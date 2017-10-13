import { smoothstep } from '../../src/math'

describe('math.smoothstep()', () => {
  it('Smooth step value 50 in range 0;100', () => {
    expect(smoothstep(50, 0, 100)).toBe(0.5)
  })

  it('Smooth step value 3 in range 0;10', () => {
    expect(smoothstep(3, 0, 10)).toBe(0.216)
  })

  it('Smooth step value -5 in range 0;10', () => {
    expect(smoothstep(-5, 0, 10)).toBe(0)
  })

  it('Smooth step value 10 in range 0;10', () => {
    expect(smoothstep(10, 0, 10)).toBe(1)
  })
})
