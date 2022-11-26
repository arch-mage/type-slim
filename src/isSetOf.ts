/**
 * Create function to check whether value is a `Set` of `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const isNumbers = isSetOf(isNumber)
 * if (isNumbers(something)) {
 *   const spread = [...something]
 *   spread.at(0)?.toFixed(2) // type safe
 * }
 * ```
 *
 * @param pred - Type guard predicate
 */
export function isSetOf<T>(
  pred: (elem: unknown) => elem is T
): (value: unknown) => value is Set<T>
/**
 * Check whether value is a `Set` of `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isSetOf(isNumber, something)) {
 *   const spread = [...something]
 *   spread.at(0)?.toFixed(2) // type safe
 * }
 * ```
 *
 * @param pred - Type guard predicate
 * @param value - The unknown
 */
export function isSetOf<T>(
  pred: (elem: unknown) => elem is T,
  value: unknown
): value is Set<T>
export function isSetOf<T>(
  ...args:
    | [(elem: unknown) => elem is T]
    | [(elem: unknown) => elem is T, unknown]
): unknown {
  function guard(value: unknown) {
    if (!(value instanceof Set)) {
      return false
    }
    for (const item of value) {
      if (!args[0](item)) {
        return false
      }
    }
    return true
  }
  if (args.length === 2) {
    return guard(args[1])
  }
  if (args.length === 1) {
    return guard
  }
  throw new TypeError('invalid number of arguments')
}

export default isSetOf
