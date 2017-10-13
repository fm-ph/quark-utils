import { lightenDarkenColor } from '../../src/math'

describe('math.lightenDarkenColor()', () => {
  it('Lighten color #ffffff with amount 0', () => {
    expect(lightenDarkenColor('#ffffff')).toBe('#ffffff')
  })

  it('Lighten color #000000 with amount 255', () => {
    expect(lightenDarkenColor('#000000', 255)).toBe('#ffffff')
  })

  it('Lighten color a33a3a with amount 150 and without pound', () => {
    expect(lightenDarkenColor('a33a3a', 10)).toBe('ad4444')
  })

  it('Darken color #ffffff with amount -255', () => {
    expect(lightenDarkenColor('#ffffff', -255)).toBe('#000000')
  })

  it('Darken color #5eba6f with amount -50', () => {
    expect(lightenDarkenColor('#5eba6f', -50)).toBe('#2c883d')
  })
})
