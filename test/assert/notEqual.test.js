import { notEqual } from '../../src/assert'

describe('assert.notEqual()', () => {
  it('Expect typeof 10 is not equal to boolean type', () => {
    expect(notEqual(typeof 10, 'boolean')).toBeTruthy()
  })

  it('Expect typeof true is not equal to boolean type throws an error', () => {
    expect(() => notEqual(typeof true, 'boolean')).toThrow(/AssertError/)
  })

  it('Expect typeof 10 is not equal to 0 throws an error with a message', () => {
    expect(() => notEqual(10, 10, 'CustomError')).toThrow(/CustomError/)
  })
})
