/**
 * Create function to check whether value is an array of `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const isNumbers = isArrayOf(isNumber)
 * if (isNumbers(something)) {
 *   something.at(0)?.toFixed(2) // type safe
 * }
 * ```
 *
 * @param pred - Type guard predicate
 */
export function isArrayOf<T>(
  pred: (elem: unknown) => elem is T
): (value: unknown) => value is T[]
/**
 * Check whether value is an array of `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isArrayOf(isNumber, something)) {
 *   something.at(0)?.toFixed(2) // type safe
 * }
 * ```
 *
 * @param pred - Type guard predicate
 * @param value - The unknown
 */
export function isArrayOf<T>(
  pred: (elem: unknown) => elem is T,
  value: unknown
): value is T[]
export function isArrayOf<T>(
  pred: (elem: unknown) => elem is T,
  value?: unknown
): unknown | ((value: unknown) => value is T[]) {
  if (arguments.length === 2) {
    return Array.isArray(value) && value.every(pred)
  }
  if (arguments.length === 1) {
    return (value: unknown) => Array.isArray(value) && value.every(pred)
  }
  throw new TypeError('invalid number of arguments')
}

export default isArrayOf
