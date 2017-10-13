/**
 * Check if value is a HTML element
 *
 * @param {any} val Value
 * @return {boolean} True if value is a HTMLElement, false otherwise
 */
export function isElement (val) {
  if ('HTMLElement' in window) {
    return (val && val instanceof window.HTMLElement)
  }

  return !!(val && typeof val === 'object' && val.nodeType === 1 && typeof val.nodeName === 'string')
}
