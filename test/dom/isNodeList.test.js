import { isNodeList } from '../../src/dom'

describe('dom.isNodeList()', () => {
  it('Expect querySelectorAll to return a NodeList', () => {
    Array(3).fill().map(v => {
      const el = document.createElement('div')
      document.body.appendChild(el)
    })

    const els = document.querySelectorAll('div')

    expect(isNodeList(els)).toBeTruthy()
  })

  it('Expect querySelector not to return a NodeList', () => {
    const el = document.querySelector('div')

    expect(isNodeList(el)).toBeFalsy()
  })

  it('Expect [] not to be a NodeList', () => {
    expect(isNodeList([])).toBeFalsy()
  })
})
