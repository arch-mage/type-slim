/**
 * Check whether the value is a boolean.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isBool(something)) {
 *   something.valueOf() // type safe
 * }
 * ```
 *
 * @param value - The unknown value.
 * @returns `true` if value is a boolean.
 */
export function isBool(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export default isBool
