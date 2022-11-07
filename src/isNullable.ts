/**
 * Create function to check whether value is `null` or type `T`
 *
 * @param pred - Type guard
 */
export function isNullable<T>(
  pred: (value: unknown) => value is T
): (value: unknown) => value is T | null
/**
 * Check whether value is `null` or type `T`
 *
 * @param pred - Type guard
 * @param value - The unknown
 */
export function isNullable<T>(
  pred: (value: unknown) => value is T,
  value: unknown
): value is T | null
export function isNullable<T>(
  pred: (value: unknown) => value is T,
  value?: unknown
): boolean | ((value: unknown) => boolean) {
  if (arguments.length === 2) {
    return value === null || pred(value)
  }
  if (arguments.length === 1) {
    return (value: unknown) => value === null || pred(value)
  }
  throw new TypeError('invalid number of arguments')
}

export default isNullable
