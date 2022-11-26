import { hasProp } from './hasProp.js'

/**
 * Create function to check whether a value has prop of type `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const hasString = hasPropOf(isString)
 * if (hasString('name', something)) {
 *   something.name.toUpperCase() // type safe
 * }
 * ```
 * @param pred - Type guard predicate
 */
export function hasPropOf<T>(
  pred: (prop: unknown) => prop is T
): <P extends string | number | symbol>(
  prop: P
) => (value: unknown) => value is { [K in P]: T }
/**
 * Create function to check whether a value has prop of type `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const hasName = hasPropOf(isString, 'name')
 * if (hasName(something)) {
 *   something.name.toUpperCase() // type safe
 * }
 * ```
 * @param pred - Type guard predicate
 * @param prop - The property
 */
export function hasPropOf<T, P extends string | number | symbol>(
  pred: (prop: unknown) => prop is T,
  prop: P
): (value: unknown) => value is { [K in P]: T }
/**
 * Check whether a value has prop of type `T`.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * if (hasPropOf(isString, 'name', something)) {
 *   something.name.toUpperCase() // type safe
 * }
 * ```
 * @param pred - Type guard predicate
 * @param prop - The property
 * @param value - The unknown
 */
export function hasPropOf<T, P extends string | number | symbol>(
  pred: (prop: unknown) => prop is T,
  prop: P,
  value: unknown
): value is { [K in P]: T }
export function hasPropOf<T, P extends string | number | symbol>(
  ...args:
    | [(prop: unknown) => prop is T]
    | [(prop: unknown) => prop is T, P]
    | [(prop: unknown) => prop is T, P, unknown]
): unknown {
  if (args.length === 3) {
    return hasProp(args[1], args[2]) && args[0](args[2][args[1]])
  }
  if (args.length === 2) {
    return (value: unknown) =>
      hasProp(args[1], value) && args[0](value[args[1]])
  }
  if (args.length === 1) {
    return (prop: P) => (value: unknown) =>
      hasProp(prop, value) && args[0](value[prop])
  }
  throw new TypeError('invalid number of arguments')
}

export default hasPropOf
