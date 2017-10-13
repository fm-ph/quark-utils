/**
 * Get URL file extension
 *
 * @param {string} url URL
 * @return {string} File extension
 */
export function getURLFileExtension (url) {
  if (!url) return null

  let urlStr = url
  let ext = ''

  // Get slash last part
  urlStr = urlStr.substr(1 + urlStr.lastIndexOf('/'))

  // Query
  urlStr = urlStr.split('?')[0]

  // Hash
  urlStr = urlStr.split('#')[0]

  // Get extension
  if (urlStr.lastIndexOf('.') !== -1) {
    ext = urlStr.substring(urlStr.lastIndexOf('.') + 1)
  } else {
    return null
  }

  return ext.toLowerCase()
}
