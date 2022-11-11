import tap from 'tap'
import { assert } from './assert.js'
import { isInstance } from './isInstance.js'
import { isNumber } from './isNumber.js'

tap.test('assert', async (tap) => {
  tap.throws(() => (assert as any)(), TypeError('invalid number of arguments'))
  tap.throws(
    () => (assert as any)(isNumber),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (assert as any)(isNumber, new Error('fail'), 1, 'extra'),
    TypeError('invalid number of arguments')
  )

  tap.throws(() => assert(isNumber, new Error('fail'), '1'), Error('fail'))
  tap.throws(() => assert(isNumber, new Error('fail'))('1'), Error('fail'))

  tap.throws(() => {
    const value: unknown = null
    assert(isInstance(Date), 'not date', value)
    value.getTime()
  }, TypeError('not date'))

  tap.throws(() => {
    const value: unknown = null
    const assertIsDate: (value: unknown) => asserts value is Date = assert(
      isInstance(Date),
      'not a date'
    )
    assertIsDate(value)
    value.getTime()
  }, TypeError('not date'))
})
