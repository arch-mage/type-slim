import { expect, test } from 'vitest'
import { isArrayOf } from './isArrayOf.js'
import { isNumber } from './isNumber.js'
import { isTupleOf } from './isTupleOf.js'
import { isString } from './isString.js'

test('isTupleOf', () => {
  const pass = ['name', 0, ['a', 'b']] as const

  const tuple = [isString, isNumber, isArrayOf(isString)] as const

  expect(() => (isTupleOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isTupleOf as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isTupleOf(tuple, null)).toBeFalsy()
  expect(isTupleOf(tuple, [])).toBeFalsy()
  expect(isTupleOf(tuple, {})).toBeFalsy()
  expect(isTupleOf(tuple, ['name', '0', ['a', 'b']])).toBeFalsy()
  expect(isTupleOf(tuple, pass)).toBeTruthy()

  expect(isTupleOf(tuple)(null)).toBeFalsy()
  expect(isTupleOf(tuple)([])).toBeFalsy()
  expect(isTupleOf(tuple)({})).toBeFalsy()
  expect(isTupleOf(tuple)(['name', '0', ['a', 'b']])).toBeFalsy()
  expect(isTupleOf(tuple)(pass)).toBeTruthy()

  const something: unknown = null
  if (isTupleOf(tuple, something)) {
    something[0].charAt(0)
    something[1].toFixed(2)
    something[2].at(0)?.charAt(0)
  }

  const isPerson = isTupleOf(tuple)
  if (isPerson(something)) {
    something[0].charAt(0)
    something[1].toFixed(2)
    something[2].at(0)?.charAt(0)
  }
})
