import { expect, test } from 'vitest'
import { isArray } from './isArray.js'

test('isArray', async () => {
  expect(isArray([]), 'array').toBeTruthy()
  expect((isArray as any)(), 'no arg').toBeFalsy()
  expect(isArray(undefined), 'undefined').toBeFalsy()
  expect(isArray(null), 'null').toBeFalsy()
  expect(isArray({}), 'object').toBeFalsy()
  expect(isArray(''), 'string').toBeFalsy()
  expect(isArray(1), 'number').toBeFalsy()
  expect(isArray(true), 'boolean').toBeFalsy()
})
