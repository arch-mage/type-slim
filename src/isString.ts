/**
 * Check whether the value is a string.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isString(something)) {
 *   something.charAt(0) // type safe
 * }
 * ```
 *
 * @param value - The unknown value.
 * @returns `true` if value is a string.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export default isString
