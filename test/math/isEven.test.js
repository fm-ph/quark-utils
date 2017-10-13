import { isEven } from '../../src/math'

describe('math.isEven()', () => {
  it('Expect 14 to be even', () => {
    expect(isEven(14)).toBeTruthy()
  })

  it('Expect -2 to be even', () => {
    expect(isEven(-2)).toBeTruthy()
  })

  it('Expect 1 to not be even', () => {
    expect(isEven(1)).toBeFalsy()
  })
})
