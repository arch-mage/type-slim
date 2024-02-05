import { expect, test } from 'vitest'
import { isArrayOf } from './isArrayOf.js'
import { isNumber } from './isNumber.js'

test('isArrayOf', () => {
  const fail: unknown = null
  const pass = [1, 2, 3]

  expect(() => (isArrayOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isArrayOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isArrayOf(isNumber)(fail)).toBeFalsy()
  expect(isArrayOf(isNumber, fail)).toBeFalsy()

  expect(isArrayOf(isNumber)([1, '1'])).toBeFalsy()
  expect(isArrayOf(isNumber, [1, '1'])).toBeFalsy()

  expect(isArrayOf(isNumber)(pass)).toBeTruthy()
  expect(isArrayOf(isNumber, pass)).toBeTruthy()

  if (isArrayOf(isNumber, fail)) {
    fail.at(0)?.toFixed(2)
  }

  if (isArrayOf(isNumber)(fail)) {
    fail.at(0)?.toFixed(2)
  }
})
