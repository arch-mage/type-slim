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
  ...args:
    | [(elem: unknown) => elem is T]
    | [(elem: unknown) => elem is T, unknown]
): unknown | ((value: unknown) => value is T[]) {
  if (args.length === 2) {
    return Array.isArray(args[1]) && args[1].every(args[0])
  }
  if (args.length === 1) {
    return (value: unknown) => Array.isArray(value) && value.every(args[0])
  }
  throw new TypeError('invalid number of arguments')
}

export default isArrayOf
