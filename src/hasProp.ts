import { isObject } from './isObject.js'

/**
 * Create a function to check wether an object has the prop.
 *
 * @remarks
 *
 * hasProp only works for object and array does not count.
 *
 * @example
 *
 * ```
 * const value: unknown = null
 * const hasName = hasProp('name')
 * if (hasName(value)) {
 *   value.name // type safe
 * }
 * ```
 *
 * @param prop - The property to check.
 */
export function hasProp<P extends string | number | symbol>(
  prop: P
): (value: unknown) => value is { [K in P]: unknown }
/**
 * Check wether an object has the prop.
 *
 * @remarks
 *
 * hasProp only works for object and array does not count.
 *
 * @example
 *
 * ```
 * const value: unknown = null
 * if (hasProp('name', value)) {
 *   value.name // type safe
 * }
 * ```
 *
 * @param prop - The property to check.
 * @param value - The unknown
 */
export function hasProp<P extends string | number | symbol>(
  prop: P,
  value: unknown
): value is { [K in P]: unknown }
export function hasProp<P extends string | number | symbol>(
  prop: P,
  value?: unknown
): boolean | ((value: unknown) => boolean) {
  if (arguments.length === 2) {
    return isObject(value) && prop in value
  }
  if (arguments.length === 1) {
    return (value: unknown) => isObject(value) && prop in value
  }
  throw new TypeError('invalid number of arguments')
}

export default hasProp
