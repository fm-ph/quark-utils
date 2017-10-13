import { isCorsSupported } from '../../src/common'

describe('common.isCorsSupported()', () => {
  it('Check if CORS is supported', () => {
    expect(isCorsSupported()).toBeTruthy()
  })

  it('Check if CORS is supported', () => {
    const mockFn = window.XMLHttpRequest = jest.fn()

    expect(isCorsSupported()).toBeFalsy()
    expect(mockFn.mock.calls.length).toBe(1)
  })
})
