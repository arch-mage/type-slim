import { expect, test } from 'vitest'
import { isArrayOf } from './isArrayOf.js'
import { isNumber } from './isNumber.js'
import { isObjectOf } from './isObjectOf.js'
import { isString } from './isString.js'

test('isObjectOf', () => {
  const pass = {
    name: 'name',
    age: 0,
    address: ['a', 'b'],
  }

  const shape = {
    name: isString,
    age: isNumber,
    address: isArrayOf(isString),
  }

  expect(() => (isObjectOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isObjectOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isObjectOf(shape, null)).toBeFalsy()
  expect(isObjectOf(shape, [])).toBeFalsy()
  expect(isObjectOf(shape, {})).toBeFalsy()
  expect(isObjectOf(shape, { name: 'name', age: '0' })).toBeFalsy()
  expect(isObjectOf(shape, pass)).toBeTruthy()

  expect(isObjectOf(shape)(null)).toBeFalsy()
  expect(isObjectOf(shape)([])).toBeFalsy()
  expect(isObjectOf(shape)({})).toBeFalsy()
  expect(isObjectOf(shape)({ name: 'name', age: '0' })).toBeFalsy()
  expect(isObjectOf(shape)(pass)).toBeTruthy()

  const something: unknown = null
  if (isObjectOf(shape, something)) {
    something.name.charAt(0)
    something.age.toFixed(2)
    something.address.at(0)?.charAt(0)
  }

  const isPerson = isObjectOf(shape)
  if (isPerson(something)) {
    something.name.charAt(0)
    something.age.toFixed(2)
    something.address.at(0)?.charAt(0)
  }
})
