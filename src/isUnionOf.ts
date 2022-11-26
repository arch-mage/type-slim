/**
 * Create function to check whether value is a union of types.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 *
 * function somehow(value: number | string | boolean) { }
 *
 * const isPrimitive = isUnionOf([isString, isNumber, isBool])
 *
 * if (isPrimitive(something)) {
 *   somehow(something) // type safe
 * }
 * ```
 *
 * @param guards - Type guards
 */
export function isUnionOf<
  U extends ReadonlyArray<(value: unknown) => value is unknown>
>(
  guards: U
): (
  value: unknown
) => value is typeof guards[number] extends (value: unknown) => value is infer R
  ? R
  : never
/**
 * Check whether value is a union of types.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 *
 * function somehow(value: number | string | boolean) { }
 *
 * if (isUnionOf([isString, isNumber, isBool], something)) {
 *   somehow(something) // type safe
 * }
 * ```
 *
 * @param guards - Type guards
 * @param value - The unknown
 */
export function isUnionOf<
  U extends ReadonlyArray<(value: unknown) => value is unknown>
>(
  guards: U,
  value: unknown
): value is typeof guards[number] extends (value: unknown) => value is infer R
  ? R
  : never
export function isUnionOf<
  U extends ReadonlyArray<(value: unknown) => value is unknown>
>(...args: [U] | [U, unknown]): unknown {
  function guard(value: unknown) {
    return args[0].some((guard) => guard(value))
  }
  if (args.length === 2) {
    return guard(args[1])
  }
  if (args.length === 1) {
    return guard
  }
  throw new TypeError('invalid number of arguments')
}

export default isUnionOf
