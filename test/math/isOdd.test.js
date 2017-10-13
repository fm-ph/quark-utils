import { isOdd } from '../../src/math'

describe('math.isOdd()', () => {
  it('Expect 11 to be odd', () => {
    expect(isOdd(11)).toBeTruthy()
  })

  it('Expect -9 to be odd', () => {
    expect(isOdd(-9)).toBeTruthy()
  })

  it('Expect 2 to not be odd', () => {
    expect(isOdd(2)).toBeFalsy()
  })
})
