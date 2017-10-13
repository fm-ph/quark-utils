import { getURLFileExtension } from '../../src/common'

describe('common.getURLFileExtension()', () => {
  const baseUrl = 'http://example.com'
  const extension = 'jpg'

  it(`Get url file extension of .${extension}`, () => {
    expect(getURLFileExtension(`.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of test.${extension}`, () => {
    expect(getURLFileExtension(`test.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of ./test.${extension}`, () => {
    expect(getURLFileExtension(`./test.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of /test.${extension}`, () => {
    expect(getURLFileExtension(`/test.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of test/test.${extension}`, () => {
    expect(getURLFileExtension(`test/test.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of ${baseUrl}`, () => {
    expect(getURLFileExtension()).toBe(null)
  })

  it(`Get url file extension of ${baseUrl}/test`, () => {
    expect(getURLFileExtension(`${baseUrl}/test`)).toBe(null)
  })

  it(`Get url file extension of ${baseUrl}/test.${extension}`, () => {
    expect(getURLFileExtension(`${baseUrl}/test.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of ${baseUrl}/test/test.${extension}`, () => {
    expect(getURLFileExtension(`${baseUrl}/test/test.${extension}`)).toBe(extension)
  })

  it(`Get url file extension of ${baseUrl}/test/test.${extension}#test`, () => {
    expect(getURLFileExtension(`${baseUrl}/test/test.${extension}#test`)).toBe(extension)
  })

  it(`Get url file extension of ${baseUrl}/test/test.${extension}?test=true`, () => {
    expect(getURLFileExtension(`${baseUrl}/test/test.${extension}?test=true`)).toBe(extension)
  })

  it(`Get url file extension of ${baseUrl}/test/test.${extension}#test?test=true`, () => {
    expect(getURLFileExtension(`${baseUrl}/test/test.${extension}#test?test=true`)).toBe(extension)
  })

  it(`Get url file extension of ${baseUrl}/test/test.${extension}#test?test=true&test=true`, () => {
    expect(getURLFileExtension(`${baseUrl}/test/test.${extension}#test?test=true&test=true`)).toBe(extension)
  })
})
