/**
 * Check whether the value is a set.
 *
 * @param value - The unknown value.
 * @returns `true` if value is an set.
 */
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set
}

export default isSet
