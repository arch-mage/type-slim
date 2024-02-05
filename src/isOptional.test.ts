import { expect, test } from 'vitest'
import { isOptional } from './isOptional.js'
import { isNumber } from './isNumber.js'

test('isNumber', () => {
  expect(() => (isOptional as any)(), 'no arg').toThrow()
  expect(() => (isOptional as any)(1, 2, 3), 'no arg').toThrow()

  expect(isOptional(isNumber, 1), 'number').toBeTruthy()
  expect(isOptional(isNumber, undefined), 'undefined').toBeTruthy()
  expect(isOptional(isNumber, ''), 'string').toBeFalsy()
  expect(isOptional(isNumber, {}), 'object').toBeFalsy()
  expect(isOptional(isNumber, null), 'null').toBeFalsy()
  expect(isOptional(isNumber, []), 'array').toBeFalsy()
  expect(isOptional(isNumber, true), 'boolean').toBeFalsy()
  expect(isOptional(isNumber, NaN), 'NaN').toBeFalsy()

  expect(isOptional(isNumber)(1), 'number').toBeTruthy()
  expect(isOptional(isNumber)(undefined), 'undefined').toBeTruthy()
  expect(isOptional(isNumber)(''), 'string').toBeFalsy()
  expect(isOptional(isNumber)({}), 'object').toBeFalsy()
  expect(isOptional(isNumber)(null), 'null').toBeFalsy()
  expect(isOptional(isNumber)([]), 'array').toBeFalsy()
  expect(isOptional(isNumber)(true), 'boolean').toBeFalsy()
  expect(isOptional(isNumber)(NaN), 'NaN').toBeFalsy()

  const something: unknown = null
  if (isNumber(something)) {
    something.toFixed(2)
  }
})
