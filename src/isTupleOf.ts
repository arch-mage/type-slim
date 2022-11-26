/**
 * Create function to check whether value is a tuple of `T`
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const isPerson = isTupleOf([isString, isNumber, isArrayOf(isString)] as const)
 *
 * if (isPerson(something)) {
 *   // type safe
 *   something[0].charAt(0)
 *   something[1].toFixed(2)
 *   something[2].at(0)?.charAt(0)
 * }
 * ```
 *
 * @param tuple - The tuple of type guard predicate.
 */
export function isTupleOf<
  T extends ReadonlyArray<(value: unknown) => value is unknown>
>(
  tuple: T
): (value: unknown) => value is {
  [K in keyof T]: T[K] extends (value: unknown) => value is infer T ? T : never
}
/**
 * Check whether value is a tuple of `T`
 *
 * @example
 *
 * ```
 * const something: unknown = null
 *
 * if (isTupleOf([isString, isNumber, isArrayOf(isString)] as const, something)) {
 *   // type safe
 *   something[0].charAt(0)
 *   something[1].toFixed(2)
 *   something[2].at(0)?.charAt(0)
 * }
 * ```
 *
 * @param tuple - The tuple of type guard predicate.
 * @param value - The unknown.
 */
export function isTupleOf<
  T extends ReadonlyArray<(value: unknown) => value is unknown>
>(
  tuple: T,
  value: unknown
): value is {
  [K in keyof T]: T[K] extends (value: unknown) => value is infer T ? T : never
}
export function isTupleOf<
  T extends ReadonlyArray<(value: unknown) => value is unknown>
>(...args: [T] | [T, unknown]): unknown {
  function guard(value: unknown) {
    if (!Array.isArray(value)) {
      return false
    }

    if (args[0].length !== value.length) {
      return false
    }

    for (let i = 0; i < args[0].length; ++i) {
      if (!args[0][i](value[i])) {
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

export default isTupleOf
