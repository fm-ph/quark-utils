import { falsy } from '../../src/assert'

describe('assert.falsy()', () => {
  it('Expect 10 is lower than 0 to be falsy', () => {
    expect(falsy(10 < 0)).toBeTruthy()
  })

  it('Expect true to be falsy throws an error', () => {
    expect(() => falsy(true)).toThrow(/AssertError/)
  })

  it('Expect true to be a boolean throws an error with a message', () => {
    expect(() => falsy(typeof true === 'boolean', 'CustomError')).toThrow(/CustomError/)
  })
})
