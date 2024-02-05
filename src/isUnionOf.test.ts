import { expect, test } from 'vitest'
import { isBool } from './isBool.js'
import { isNumber } from './isNumber.js'
import { isString } from './isString.js'
import { isUnionOf } from './isUnionOf.js'

test('isUnionOf', () => {
  expect(() => (isUnionOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isUnionOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isUnionOf([isString, isNumber, isBool], [])).toBeFalsy()
  expect(isUnionOf([isString, isNumber, isBool], {})).toBeFalsy()
  expect(isUnionOf([isString, isNumber, isBool], NaN)).toBeFalsy()
  expect(isUnionOf([isString, isNumber, isBool], null)).toBeFalsy()
  expect(isUnionOf([isString, isNumber, isBool], undefined)).toBeFalsy()

  expect(isUnionOf([isString, isNumber, isBool], '1')).toBeTruthy()
  expect(isUnionOf([isString, isNumber, isBool], 1)).toBeTruthy()
  expect(isUnionOf([isString, isNumber, isBool], true)).toBeTruthy()
  expect(isUnionOf([isString, isNumber, isBool], false)).toBeTruthy()

  expect(isUnionOf([isString, isNumber, isBool])('1')).toBeTruthy()
  expect(isUnionOf([isString, isNumber, isBool])(1)).toBeTruthy()
  expect(isUnionOf([isString, isNumber, isBool])(true)).toBeTruthy()
  expect(isUnionOf([isString, isNumber, isBool])(false)).toBeTruthy()

  const something: unknown = null

  function somehow(value: number | string | boolean) {
    return value
  }

  if (isUnionOf([isString, isNumber, isBool], something)) {
    somehow(something)
  }

  const isPrimitive = isUnionOf([isString, isNumber, isBool])
  if (isPrimitive(something)) {
    somehow(something)
  }
})
