import { expect, test } from 'vitest'
import { isNull } from './isNull.js'

test('isNull', () => {
  expect(isNull(null), 'null').toBeTruthy()
  expect((isNull as any)(), 'no arg').toBeFalsy()
  expect(isNull(''), 'string').toBeFalsy()
  expect(isNull({}), 'object').toBeFalsy()
  expect(isNull(undefined), 'undefined').toBeFalsy()
  expect(isNull(true), 'boolean').toBeFalsy()
  expect(isNull([]), 'array').toBeFalsy()
  expect(isNull(1), 'number').toBeFalsy()
})
