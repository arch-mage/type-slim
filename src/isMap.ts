/**
 * Check whether the value is a map.
 *
 * @param value - The unknown value.
 * @returns `true` if value is an map.
 */
export function isMap(value: unknown): value is unknown[] {
  return value instanceof Map
}

export default isMap
