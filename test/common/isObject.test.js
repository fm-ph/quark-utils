import { isObject } from '../../src/common'

describe('common.isObject()', () => {
  it('Check if {} is an object', () => {
    expect(isObject({})).toBeTruthy()
  })

  it('Check if null is an object', () => {
    expect(isObject(null)).toBeFalsy()
  })

  it('Check if [] is an object', () => {
    expect(isObject([])).toBeFalsy()
  })

  it('Check if 0 is an object', () => {
    expect(isObject(0)).toBeFalsy()
  })
})
