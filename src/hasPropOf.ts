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
  pred: (prop: unknown) => prop is T,
  prop?: P,
  value?: unknown
):
  | boolean
  | ((value: unknown) => unknown)
  | (<P extends string | number | symbol>(prop: P, value: unknown) => unknown)
  | (<P extends string | number | symbol>(
      prop: P
    ) => (value: unknown) => unknown) {
  if (arguments.length === 3) {
    return hasProp(prop as P, value) && pred(value[prop as P])
  }
  if (arguments.length === 2) {
    return (value: unknown) =>
      hasProp(prop as P, value) && pred(value[prop as P])
  }
  if (arguments.length === 1) {
    return <P extends string | number | symbol>(prop: P) =>
      (value: unknown) =>
        hasProp(prop as P, value) && pred(value[prop as P])
  }
  throw new TypeError('invalid number of arguments')
}

export default hasPropOf
