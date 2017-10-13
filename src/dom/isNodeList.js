/**
 * Check if value is a NodeList
 *
 * @param {any} val Value
 * @return {boolean} True if value is a NodeList, false otherwise
 */
export function isNodeList (val) {
  return !!(val && val.constructor === window.NodeList)
}
