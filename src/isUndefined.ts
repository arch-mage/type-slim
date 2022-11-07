/**
 * Check whether value is undefined.
 *
 * @param value - The unknown
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}

export default isUndefined
