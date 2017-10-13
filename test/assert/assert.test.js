import { assert } from '../../src/assert'

describe('assert.assert()', () => {
  it('Expect 10 is greater than 0 to be truthy', () => {
    expect(assert(10 > 0)).toBeTruthy()
  })

  it('Expect 10 is lower than 0 throws an error', () => {
    expect(() => assert(10 < 0)).toThrow(/AssertError/)
  })

  it('Expect 10 is lower than 0 throws an error with a message', () => {
    expect(() => assert(10 < 0, 'CustomError')).toThrow(/CustomError/)
  })
})
