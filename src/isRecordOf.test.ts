import { expect, test } from 'vitest'
import { isRecordOf } from './isRecordOf.js'
import { isNumber } from './isNumber.js'
import { isString } from './isString.js'

test('isRecordOf', () => {
  const fail: unknown = null
  const pass = Object.fromEntries([
    ['1', 1],
    ['2', 2],
  ])

  expect(() => (isRecordOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isRecordOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isRecordOf([isString, isNumber])(fail)).toBeFalsy()
  expect(isRecordOf([isString, isNumber], fail)).toBeFalsy()

  expect(
    isRecordOf([isString, isNumber])(
      Object.fromEntries([
        ['1', 1],
        [2, '2'],
      ])
    )
  ).toBeFalsy()
  expect(
    isRecordOf(
      [isString, isNumber],
      Object.fromEntries([
        ['1', 1],
        [2, '2'],
      ])
    )
  ).toBeFalsy()

  expect(isRecordOf([isString, isNumber])(pass)).toBeTruthy()
  expect(isRecordOf([isString, isNumber], pass)).toBeTruthy()

  if (isRecordOf([isString, isNumber], fail)) {
    const spread = Object.entries(fail)
    const [[key, val]] = spread
    key.charAt(0)
    val.toFixed(2)
  }

  if (isRecordOf([isString, isNumber])(fail)) {
    const spread = Object.entries(fail)
    const [[key, val]] = spread
    key.charAt(0)
    val.toFixed(2)
  }
})
