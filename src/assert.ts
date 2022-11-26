export type Assert<T> = (value: unknown) => asserts value is T

/**
 * Create funtion to assert that value is a type of `T`.
 *
 * @remarks
 *
 * The created function type must be explicitly specified for assertion to work.
 * See {@Link https://github.com/microsoft/TypeScript/pull/33622}
 *
 * @example
 *
 * ```
 * const value: unknown = null
 * const assertIsDate: (value: unknown) => asserts value is Date = assert(
 *   isInstance(Date),
 *   'not a date'
 * )
 * assertIsDate(value)
 * const time = value.getTime() // type safe
 * ```
 *
 * @param pred - Type guard
 * @param error - The error used when assertion fails
 */
export function assert<T>(
  pred: (value: unknown) => value is T,
  error: Error | string
): (value: unknown) => asserts value is T
/**
 * Asserts that value is a type of `T`.
 *
 * @example
 *
 * ```
 * const value: unknown = null
 * assert(isInstance(Date), 'not a date', value)
 * const time = value.getTime() // type safe
 * ```
 * @param pred - Type guard
 * @param error - The error used when assertion fails
 * @param value - The unknown
 */
export function assert<T>(
  pred: (value: unknown) => value is T,
  error: Error | string,
  value: unknown
): asserts value is T
export function assert<T>(
  ...args:
    | [(value: unknown) => value is T, Error | string]
    | [(value: unknown) => value is T, Error | string, unknown]
): unknown {
  const err = typeof args[1] === 'string' ? new TypeError(args[1]) : args[1]
  function guard(value: unknown) {
    if (!args[0](value)) {
      throw err
    }
  }

  if (args.length === 3) {
    return guard(args[2])
  }

  if (args.length === 2) {
    return guard
  }

  throw new TypeError('invalid number of arguments')
}

export default assert
