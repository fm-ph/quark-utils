/**
 * Get the type of an object
 *
 * @param {object} obj Object
 * @return {string} Type of the object
 */
export function getType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
