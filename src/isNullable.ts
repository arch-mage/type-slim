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
  ...args:
    | [(value: unknown) => value is T]
    | [(value: unknown) => value is T, unknown]
): boolean | ((value: unknown) => boolean) {
  if (args.length === 2) {
    return args[1] === null || args[0](args[1])
  }
  if (args.length === 1) {
    return (value: unknown) => value === null || args[0](value)
  }
  throw new TypeError('invalid number of arguments')
}

export default isNullable
