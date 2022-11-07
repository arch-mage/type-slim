/**
 * Check whether value is not null and not undefined.
 *
 * @param value - The unknown
 */
export function isNonNil<T>(value: T | null | undefined): value is T {
  return typeof value !== 'undefined' && value !== null
}

export default isNonNil
