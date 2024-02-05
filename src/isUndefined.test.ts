import { expect, test } from 'vitest'
import { isUndefined } from './isUndefined.js'

test('isUndefined', () => {
  expect((isUndefined as any)(), 'no arg').toBeTruthy()
  expect(isUndefined(undefined), 'undefined').toBeTruthy()
  expect(isUndefined(''), 'string').toBeFalsy()
  expect(isUndefined({}), 'object').toBeFalsy()
  expect(isUndefined(null), 'null').toBeFalsy()
  expect(isUndefined(true), 'boolean').toBeFalsy()
  expect(isUndefined([]), 'array').toBeFalsy()
  expect(isUndefined(1), 'number').toBeFalsy()
})
