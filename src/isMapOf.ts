/**
 * Create function to check whether value is a `Map` of `K`, `V`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const isPair = isMapOf([isString, isNumber])
 * if (isPair(something)) {
 *   const pairs = [...something]
 *   const [[key, val]] = pairs
 *   key.charAt(0) // type safe
 *   val.toFixed(2) // type safe
 * }
 * ```
 *
 * @param pred - Pair of type guard predicate
 */
export function isMapOf<K, V>(
  pred: [(elem: unknown) => elem is K, (elem: unknown) => elem is V]
): (value: unknown) => value is Map<K, V>
/**
 * Check whether value is a `Map` of `K`, `V`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isMapOf([isString, isNumber], something)) {
 *   const pairs = [...something]
 *   const [[key, val]] = pairs
 *   key.charAt(0) // type safe
 *   val.toFixed(2) // type safe
 * }
 * ```
 *
 * @param pred - Pair of type guard predicate
 * @param value - The unknown
 */
export function isMapOf<K, V>(
  pred: [(elem: unknown) => elem is K, (elem: unknown) => elem is V],
  value: unknown
): value is Map<K, V>
export function isMapOf<K, V>(
  ...args:
    | [[(elem: unknown) => elem is K, (elem: unknown) => elem is V]]
    | [[(elem: unknown) => elem is K, (elem: unknown) => elem is V], unknown]
): unknown {
  function guard(value: unknown) {
    if (!(value instanceof Map)) {
      return false
    }
    for (const item of value) {
      if (!args[0][0](item[0]) || !args[0][1](item[1])) {
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

export default isMapOf
