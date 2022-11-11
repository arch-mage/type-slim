import tap from 'tap'
import { isSetOf } from './isSetOf.js'
import { isNumber } from './isNumber.js'

tap.test('isSetOf', async (tap) => {
  const fail: unknown = null
  const pass = new Set([1, 2, 3])

  tap.throws(() => (isSetOf as any)(), TypeError('invalid number of arguments'))
  tap.throws(
    () => (isSetOf as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isSetOf(isNumber)(fail))
  tap.notOk(isSetOf(isNumber, fail))

  tap.notOk(isSetOf(isNumber)(new Set([1, '1'])))
  tap.notOk(isSetOf(isNumber, new Set([1, '1'])))

  tap.ok(isSetOf(isNumber)(pass))
  tap.ok(isSetOf(isNumber, pass))

  if (isSetOf(isNumber, fail)) {
    const spread = [...fail]
    spread.at(0)?.toFixed(2)
  }

  if (isSetOf(isNumber)(fail)) {
    const spread = [...fail]
    spread.at(0)?.toFixed(2)
  }
})
