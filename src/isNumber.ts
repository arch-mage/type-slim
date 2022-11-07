/**
 * Check whether the value is a number.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isNumber(something)) {
 *   something.toFixed(2) // type safe
 * }
 * ```
 *
 * @param value - The unknown value.
 * @returns `true` if value is a number.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value)
}

export default isNumber
