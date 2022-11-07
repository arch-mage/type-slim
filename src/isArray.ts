/**
 * Check whether the value is an array.
 *
 * @remarks
 * This function just calls built-in Array.isArray. The difference is, this
 * function returns typeof `unknown[]` instead of `any[]`.
 *
 * @param value - The unknown value.
 * @returns `true` if value is an array.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

export default isArray
