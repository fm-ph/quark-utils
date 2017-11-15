import { scope } from '../../src/common'

describe('common.scope()', () => {
  it('Check if method is binded', () => {
    const o = {
      test () { return this }
    }

    const testCall = o.test()
    scope(o, ['test'])

    expect(testCall.hasOwnProperty('prototype')).toBeFalsy()
  })

  it('Check if methods are binded', () => {
    const o = {
      test1 () { return this },
      test2 () { return this }
    }

    const test1Call = o.test1()
    const test2Call = o.test2()
    scope(o, ['test1', 'test2'])

    expect(test1Call.hasOwnProperty('prototype')).toBeFalsy()
    expect(test2Call.hasOwnProperty('prototype')).toBeFalsy()
  })
})
