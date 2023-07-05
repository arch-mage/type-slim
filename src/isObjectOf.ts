import { isObject } from './isObject.js'

/**
 * Create function to check whether value has the shape.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const shape = {
 *   name: isString,
 *   age: isNumber,
 *   address: isArrayOf(isString)
 * }
 *
 * const isPerson = isObjectOf(shape)
 *
 * if (isPerson(something)) {
 *   // type safe
 *   something.name.charAt(0)
 *   something.age.toFixed(2)
 *   something.address.at(0)?.charAt(0)
 * }
 * ```
 *
 * @param shape - The shape of object. Every field should be a type guard.
 */
export function isObjectOf<
  T extends {
    [K in keyof T]: T[K] extends (value: unknown) => value is infer R
      ? (value: unknown) => value is R
      : never
  }
>(
  shape: T
): (value: unknown) => value is {
  [K in keyof T]: T[K] extends (value: unknown) => value is infer R ? R : never
}
/**
 * Check whether value has the shape.
 *
 * @example
 *
 * ```
 * const something: unknown = null
 * const shape = {
 *   name: isString,
 *   age: isNumber,
 *   address: isArrayOf(isString)
 * }
 *
 * if (isObjectOf(shape, something)) {
 *   // type safe
 *   something.name.charAt(0)
 *   something.age.toFixed(2)
 *   something.address.at(0)?.charAt(0)
 * }
 * ```
 *
 * @param shape - The shape of object. Every field should be a type guard.
 * @param value - The unknown.
 */
export function isObjectOf<
  T extends {
    [K in keyof T]: T[K] extends (value: unknown) => value is infer R
      ? (value: unknown) => value is R
      : never
  }
>(
  shape: T,
  value: unknown
): value is {
  [K in keyof T]: T[K] extends (value: unknown) => value is infer R ? R : never
}
export function isObjectOf<
  T extends {
    [K in keyof T]: T[K] extends (value: unknown) => value is infer R
      ? (value: unknown) => value is R
      : never
  }
>(...args: [T] | [T, unknown]): unknown {
  function guard(value: unknown) {
    if (!isObject(value)) {
      return false
    }

    const entries = Object.entries<(value: unknown) => boolean>(args[0])
    for (const [key, pred] of entries) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (!pred((value as any)[key as any])) {
        return false
      }
    }

    return true
  }

  if (args.length === 2) {
    return guard(args[1])
  }

  if (args.length === 1) {
    return guard
  }

  throw new TypeError('invalid number of arguments')
}

export default isObjectOf
