import { isArray } from '../../src/common'

describe('common.isArray()', () => {
  it('Check if [] is an array', () => {
    expect(isArray([])).toBeTruthy()
  })

  it('Check if {} is an array', () => {
    expect(isArray({})).toBeFalsy()
  })

  it('Check if null is an array', () => {
    expect(isArray(null)).toBeFalsy()
  })
})
