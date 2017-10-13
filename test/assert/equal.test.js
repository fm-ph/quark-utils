import { equal } from '../../src/assert'

describe('assert.equal()', () => {
  it('Expect typeof 10 is equal to number type', () => {
    expect(equal(typeof 10, 'number')).toBeTruthy()
  })

  it('Expect typeof 10 is equal to boolean type throws an error', () => {
    expect(() => equal(typeof 10, 'boolean')).toThrow(/AssertError/)
  })

  it('Expect typeof 10 is equal to 0 throws an error with a message', () => {
    expect(() => equal(10, 0, 'CustomError')).toThrow(/CustomError/)
  })
})
