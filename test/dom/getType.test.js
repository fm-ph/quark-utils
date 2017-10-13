import { getType } from '../../src/dom'

describe('dom.getType()', () => {
  it('Get type of value 0', () => {
    expect(getType(0)).toBe('number')
  })

  it(`Get type of value ''`, () => {
    expect(getType('')).toBe('string')
  })

  it('Get type of value {}', () => {
    expect(getType({})).toBe('object')
  })

  it('Get type of value true', () => {
    expect(getType(true)).toBe('boolean')
  })

  it('Get type of value []', () => {
    expect(getType([])).toBe('array')
  })

  it('Get type of value null', () => {
    expect(getType(null)).toBe('null')
  })

  it('Get type of value undefined', () => {
    expect(getType(undefined)).toBe('undefined')
  })

  it('Get type of value () => {}', () => {
    expect(getType(() => {})).toBe('function')
  })

  it(`Get type of value Symbol('')`, () => {
    expect(getType(Symbol(''))).toBe('symbol')
  })
})
