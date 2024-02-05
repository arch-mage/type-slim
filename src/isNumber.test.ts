import { expect, test } from 'vitest'
import { isNumber } from './isNumber.js'

test('isNumber', () => {
  expect(isNumber(1), 'number').toBeTruthy()
  expect((isNumber as any)(), 'no arg').toBeFalsy()
  expect(isNumber(''), 'string').toBeFalsy()
  expect(isNumber({}), 'object').toBeFalsy()
  expect(isNumber(undefined), 'undefined').toBeFalsy()
  expect(isNumber(null), 'null').toBeFalsy()
  expect(isNumber([]), 'array').toBeFalsy()
  expect(isNumber(true), 'boolean').toBeFalsy()
  expect(isNumber(NaN), 'NaN').toBeFalsy()

  const something: unknown = null
  if (isNumber(something)) {
    something.toFixed(2)
  }
})
