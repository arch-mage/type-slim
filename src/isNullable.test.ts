import { expect, test } from 'vitest'
import { isNullable } from './isNullable.js'
import { isNumber } from './isNumber.js'

test('isNumber', async () => {
  expect(() => (isNullable as any)(), 'no arg').toThrow()
  expect(() => (isNullable as any)(1, 2, 3), 'no arg').toThrow()

  expect(isNullable(isNumber, 1), 'number').toBeTruthy()
  expect(isNullable(isNumber, null), 'null').toBeTruthy()
  expect(isNullable(isNumber, ''), 'string').toBeFalsy()
  expect(isNullable(isNumber, {}), 'object').toBeFalsy()
  expect(isNullable(isNumber, undefined), 'undefined').toBeFalsy()
  expect(isNullable(isNumber, []), 'array').toBeFalsy()
  expect(isNullable(isNumber, true), 'boolean').toBeFalsy()
  expect(isNullable(isNumber, NaN), 'NaN').toBeFalsy()

  expect(isNullable(isNumber)(1), 'number').toBeTruthy()
  expect(isNullable(isNumber)(null), 'null').toBeTruthy()
  expect(isNullable(isNumber)(''), 'string').toBeFalsy()
  expect(isNullable(isNumber)({}), 'object').toBeFalsy()
  expect(isNullable(isNumber)(undefined), 'undefined').toBeFalsy()
  expect(isNullable(isNumber)([]), 'array').toBeFalsy()
  expect(isNullable(isNumber)(true), 'boolean').toBeFalsy()
  expect(isNullable(isNumber)(NaN), 'NaN').toBeFalsy()

  const something: unknown = null
  if (isNumber(something)) {
    something.toFixed(2)
  }
})
