/**
 * Check whether value is null.
 *
 * @param value - The unknown
 */
export function isNull(value: unknown): value is null {
  return value === null
}

export default isNull
