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
>(
  shape: T,
  value?: unknown
):
  | unknown
  | ((value: unknown) => value is {
      [K in keyof T]: T[K] extends (value: unknown) => value is infer R
        ? R
        : never
    }) {
  if (arguments.length === 2) {
    if (!isObject(value)) {
      return false
    }

    for (const [key, pred] of Object.entries<(value: unknown) => boolean>(
      shape
    )) {
      if (!pred(value[key])) {
        return false
      }
    }

    return true
  }

  if (arguments.length === 1) {
    return (value: unknown) => {
      if (!isObject(value)) {
        return false
      }

      for (const [key, pred] of Object.entries<(value: unknown) => boolean>(
        shape
      )) {
        if (!pred(value[key])) {
          return false
        }
      }

      return true
    }
  }

  throw new TypeError('invalid number of arguments')
}

export default isObjectOf
