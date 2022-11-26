/**
 * Create function to check whether value is `undefined` or type `T`
 *
 * @param pred - Type guard
 */
export function isOptional<T>(
  pred: (value: unknown) => value is T
): (value: unknown) => value is T | undefined
/**
 * Check whether value is `undefined` or type `T`
 *
 * @param pred - Type guard
 * @param value - The unknown
 */
export function isOptional<T>(
  pred: (value: unknown) => value is T,
  value: unknown
): value is T | undefined
export function isOptional<T>(
  ...args:
    | [(value: unknown) => value is T]
    | [(value: unknown) => value is T, unknown]
): boolean | ((value: unknown) => boolean) {
  if (args.length === 2) {
    return typeof args[1] === 'undefined' || args[0](args[1])
  }
  if (args.length === 1) {
    return (value: unknown) => typeof value === 'undefined' || args[0](value)
  }
  throw new TypeError('invalid number of arguments')
}

export default isOptional
