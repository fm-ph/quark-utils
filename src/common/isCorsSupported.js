/**
 * Check if CORS (Cross-origin resource sharing) is supported
 *
 * @return {boolean} True if CORS is supported, false otherwise
 */
export function isCorsSupported () {
  return ('withCredentials' in new window.XMLHttpRequest())
}
