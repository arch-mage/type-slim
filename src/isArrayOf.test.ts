import tap from 'tap'
import { isArrayOf } from './isArrayOf.js'
import { isNumber } from './isNumber.js'

tap.test('isArrayOf', async (tap) => {
  const fail: unknown = null
  const pass = [1, 2, 3]

  tap.throws(
    () => (isArrayOf as any)(),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (isArrayOf as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isArrayOf(isNumber)(fail))
  tap.notOk(isArrayOf(isNumber, fail))

  tap.ok(isArrayOf(isNumber)(pass))
  tap.ok(isArrayOf(isNumber, pass))

  if (isArrayOf(isNumber, fail)) {
    fail.at(0)?.toFixed(2)
  }

  if (isArrayOf(isNumber)(fail)) {
    fail.at(0)?.toFixed(2)
  }
})
