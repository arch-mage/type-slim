import { expect, test } from 'vitest'
import { isObject } from './isObject.js'

test('isObject', () => {
  expect(isObject({}), 'object').toBeTruthy()
  expect((isObject as any)(), 'no arg').toBeFalsy()
  expect(isObject(undefined), 'undefined').toBeFalsy()
  expect(isObject(null), 'null').toBeFalsy()
  expect(isObject([]), 'array').toBeFalsy()
  expect(isObject(''), 'string').toBeFalsy()
  expect(isObject(1), 'number').toBeFalsy()
  expect(isObject(true), 'boolean').toBeFalsy()
})
