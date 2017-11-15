/**
 * Bind methods on a given context
 *
 * @param {object} ctx Context
 * @param {array} methodNames Method names
 */
export function scope (ctx, methodNames) {
  for (let i = 0, l = methodNames.length; i < l; i++) {
    ctx[methodNames[i]] = ctx[methodNames[i]].bind(ctx)
  }
}
