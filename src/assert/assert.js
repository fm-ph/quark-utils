/**
 * Check if an expression is true
 *
 * @param {boolean} expression Expression
 * @param {string} [message='AssertError']  Message if expression is false
 *
 * @throws {AssertError} Thrown if expression is false
 */
export function assert (expression, message = 'AssertError') {
  if (!expression) {
    throw new AssertError(message)
  }

  return true
}

class AssertError extends Error {}
