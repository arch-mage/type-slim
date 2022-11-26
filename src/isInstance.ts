/**
 * Check whether value is an instance of cls.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (isInstance(Date, something)) {
 *   something.getTime() // type safe
 * }
 * ```
 *
 * @param cls - The constructor.
 * @param value - The unknown
 */
export function isInstance<C extends new (...args: unknown[]) => unknown>(
  cls: C
): (value: unknown) => value is InstanceType<C>
/**
 * Create function to check whether value is an instance of cls.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const isDate = isInstance(Date)
 * if (isDate(something)) {
 *   something.getTime() // type safe
 * }
 * ```
 *
 * @param cls - The constructor.
 * @param value - The unknown
 */
export function isInstance<C extends new (...args: unknown[]) => unknown>(
  cls: C,
  value: unknown
): value is InstanceType<C>
export function isInstance<C extends new (...args: unknown[]) => unknown>(
  ...args: [C] | [C, unknown]
): unknown {
  if (args.length === 2) {
    return args[1] instanceof args[0]
  }
  if (args.length === 1) {
    return (value: unknown) => value instanceof args[0]
  }
  throw new TypeError('invalid number of arguments')
}

export default isInstance
