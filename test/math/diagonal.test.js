import { diagonal } from '../../src/math'

describe('math.diagonal()', () => {
  it('Compute diagonal of a 100x50 rectangle', () => {
    expect(diagonal(100, 50)).toBeCloseTo(111.8)
  })

  it('Compute diagonal of a 35x80 rectangle', () => {
    expect(diagonal(35, 80)).toBeCloseTo(87.32)
  })
})
