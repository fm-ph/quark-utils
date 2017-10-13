import { randomHexColor } from '../../src/math'

describe('math.randomHexColor()', () => {
  it('Expect a random hexadecimal color', () => {
    const value = randomHexColor()

    expect(value).toHaveLength(7)
    expect(value.includes('#')).toBeTruthy()
    expect(typeof value === 'string').toBeTruthy()
  })
})
