import { isMediaElement } from '../../src/dom'

describe('dom.isMediaElement()', () => {
  it('Expect <div> not to be a media element', () => {
    const el = document.createElement('div')
    expect(isMediaElement(el)).toBeFalsy()
  })

  it('Expect <img> to be a media element', () => {
    const el = document.createElement('img')
    expect(isMediaElement(el)).toBeTruthy()
  })

  it('Expect <audio> to be a media element', () => {
    const el = document.createElement('audio')
    expect(isMediaElement(el)).toBeTruthy()
  })

  it('Expect <video> to be a media element', () => {
    const el = document.createElement('video')
    expect(isMediaElement(el)).toBeTruthy()
  })

  it('Expect null not to be a media element', () => {
    expect(isMediaElement(null)).toBeFalsy()
  })
})
