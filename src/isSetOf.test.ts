import { expect, test } from 'vitest'
import { isSetOf } from './isSetOf.js'
import { isNumber } from './isNumber.js'

test('isSetOf', () => {
  const fail: unknown = null
  const pass = new Set([1, 2, 3])

  expect(() => (isSetOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isSetOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isSetOf(isNumber)(fail)).toBeFalsy()
  expect(isSetOf(isNumber, fail)).toBeFalsy()

  expect(isSetOf(isNumber)(new Set([1, '1']))).toBeFalsy()
  expect(isSetOf(isNumber, new Set([1, '1']))).toBeFalsy()

  expect(isSetOf(isNumber)(pass)).toBeTruthy()
  expect(isSetOf(isNumber, pass)).toBeTruthy()

  if (isSetOf(isNumber, fail)) {
    const spread = [...fail]
    spread.at(0)?.toFixed(2)
  }

  if (isSetOf(isNumber)(fail)) {
    const spread = [...fail]
    spread.at(0)?.toFixed(2)
  }
})
