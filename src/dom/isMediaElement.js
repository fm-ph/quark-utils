import { isElement } from './isElement'

/**
 * Check if value is a HTML media element (image, audio or video)
 *
 * @param {any} val Value
 * @return {boolean} True if value is a HTML media element, false otherwise
 */
export function isMediaElement (val) {
  const isEl = isElement(val)
  const types = ['HTMLImageElement', 'HTMLAudioElement', 'HTMLVideoElement']
  const tags = ['IMG', 'AUDIO', 'VIDEO']

  for (let i = 0, l = types.length; i < l; i++) {
    if (isEl && types[i] in window && val instanceof window[types[i]]) {
      return true
    }
  }

  for (let i = 0, l = tags.length; i < l; i++) {
    return (isEl && val.nodeName === tags[i])
  }
}
