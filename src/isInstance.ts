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
  cls: C,
  value?: unknown
): unknown | ((value: unknown) => unknown) {
  if (arguments.length === 2) {
    return value instanceof cls
  }
  if (arguments.length === 1) {
    return (value: unknown) => value instanceof cls
  }
  throw new TypeError('invalid number of arguments')
}

export default isInstance
