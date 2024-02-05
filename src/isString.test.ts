import { expect, test } from 'vitest'
import { isString } from './isString.js'

test('isString', () => {
  expect(isString(''), 'string').toBeTruthy()
  expect(isString({}), 'object').toBeFalsy()
  expect((isString as any)(), 'no arg').toBeFalsy()
  expect(isString(undefined), 'undefined').toBeFalsy()
  expect(isString(null), 'null').toBeFalsy()
  expect(isString([]), 'array').toBeFalsy()
  expect(isString(1), 'number').toBeFalsy()
  expect(isString(true), 'boolean').toBeFalsy()

  const something: unknown = null
  if (isString(something)) {
    something.charAt(0)
  }
})
