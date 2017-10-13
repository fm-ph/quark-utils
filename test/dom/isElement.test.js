import { isElement } from '../../src/dom'

describe('dom.isElement()', () => {
  it('Expect <div> to be HTMLElement', () => {
    const el = document.createElement('div')
    expect(isElement(el)).toBeTruthy()
  })

  it('Expect 0 not to be HTMLElement', () => {
    expect(isElement(0)).toBeFalsy()
  })

  it('Expect {} not to be HTMLElement', () => {
    expect(isElement({})).toBeFalsy()
  })

  it('Expect null not to be HTMLElement', () => {
    expect(isElement(null)).toBeFalsy()
  })

  it('Expect null not to be an element if HTMLElement doest not exist', () => {
    delete window.HTMLElement
    expect(isElement(null)).toBeFalsy()
  })

  it('Expect <div> to be an element if HTMLElement doest not exist', () => {
    delete window.HTMLElement
    const el = document.createElement('div')
    expect(isElement(el)).toBeTruthy()
  })
})
