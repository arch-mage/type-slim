import { expect, test } from 'vitest'
import { assert } from './assert.js'
import { isInstance } from './isInstance.js'
import { isNumber } from './isNumber.js'

test('assert', () => {
  expect(() => (assert as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (assert as any)(isNumber)).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() =>
    (assert as any)(isNumber, new Error('fail'), 1, 'extra')
  ).toThrowError(TypeError('invalid number of arguments'))

  expect(() => assert(isNumber, new Error('fail'), '1')).toThrowError(
    Error('fail')
  )
  expect(() => assert(isNumber, new Error('fail'))('1')).toThrowError(
    Error('fail')
  )

  expect(() => {
    const value: unknown = null
    assert(isInstance(Date), 'not a date', value)
    value.getTime()
  }).toThrowError(TypeError('not a date'))

  expect(() => {
    const value: unknown = null
    const assertIsDate: (value: unknown) => asserts value is Date = assert(
      isInstance(Date),
      'not a date'
    )
    assertIsDate(value)
    value.getTime()
  }).toThrowError(TypeError('not a date'))
})
