/**
 * Generate a UUID (Universal Unique Identifier).
 * Format : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 */
export function uuid () {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)

  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`
}
