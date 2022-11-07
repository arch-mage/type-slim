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
  pred: (value: unknown) => value is T,
  value?: unknown
): boolean | ((value: unknown) => boolean) {
  if (arguments.length === 2) {
    return typeof value === 'undefined' || pred(value)
  }
  if (arguments.length === 1) {
    return (value: unknown) => typeof value === 'undefined' || pred(value)
  }
  throw new TypeError('invalid number of arguments')
}

export default isOptional
