import tap from 'tap'
import { isNumber } from './isNumber.js'

tap.test('isNumber', async (tap) => {
  tap.ok(isNumber(1), 'number')
  tap.notOk((isNumber as any)(), 'no arg')
  tap.notOk(isNumber(''), 'string')
  tap.notOk(isNumber({}), 'object')
  tap.notOk(isNumber(undefined), 'undefined')
  tap.notOk(isNumber(null), 'null')
  tap.notOk(isNumber([]), 'array')
  tap.notOk(isNumber(true), 'boolean')
  tap.notOk(isNumber(NaN), 'NaN')

  const something: unknown = null
  if (isNumber(something)) {
    something.toFixed(2)
  }
})
