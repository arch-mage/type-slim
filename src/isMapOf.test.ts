import { expect, test } from 'vitest'
import { isMapOf } from './isMapOf.js'
import { isNumber } from './isNumber.js'
import { isString } from './isString.js'

test('isMapOf', () => {
  const fail: unknown = null
  const pass = new Map([
    ['1', 1],
    ['2', 2],
  ])

  expect(() => (isMapOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isMapOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isMapOf([isString, isNumber])(fail)).toBeFalsy()
  expect(isMapOf([isString, isNumber], fail)).toBeFalsy()

  expect(
    isMapOf([isString, isNumber])(
      new Map<any, any>([
        ['1', 1],
        [2, '2'],
      ])
    )
  ).toBeFalsy()
  expect(
    isMapOf(
      [isString, isNumber],
      new Map<any, any>([
        ['1', 1],
        [2, '2'],
      ])
    )
  ).toBeFalsy()

  expect(isMapOf([isString, isNumber])(pass)).toBeTruthy()
  expect(isMapOf([isString, isNumber], pass)).toBeTruthy()

  if (isMapOf([isString, isNumber], fail)) {
    const spread = [...fail]
    const [[key, val]] = spread
    key.charAt(0)
    val.toFixed(2)
  }

  if (isMapOf([isString, isNumber])(fail)) {
    const spread = [...fail]
    const [[key, val]] = spread
    key.charAt(0)
    val.toFixed(2)
  }
})
