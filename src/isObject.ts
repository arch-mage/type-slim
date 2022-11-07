/**
 * Check whether the value is an object.
 *
 * @remarks
 * `null` and Array are not considered an object even though javascript
 * considers them as an object.
 *
 * @param value - The unknown value.
 * @returns `true` if value is not `null` and is an object.
 */
export function isObject(value: unknown): value is object {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export default isObject
