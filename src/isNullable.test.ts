import tap from 'tap'
import { isNullable } from './isNullable.js'
import { isNumber } from './isNumber.js'

tap.test('isNumber', async (tap) => {
  tap.throws(() => (isNullable as any)(), 'no arg')
  tap.throws(() => (isNullable as any)(1, 2, 3), 'no arg')

  tap.ok(isNullable(isNumber, 1), 'number')
  tap.ok(isNullable(isNumber, null), 'null')
  tap.notOk(isNullable(isNumber, ''), 'string')
  tap.notOk(isNullable(isNumber, {}), 'object')
  tap.notOk(isNullable(isNumber, undefined), 'undefined')
  tap.notOk(isNullable(isNumber, []), 'array')
  tap.notOk(isNullable(isNumber, true), 'boolean')
  tap.notOk(isNullable(isNumber, NaN), 'NaN')

  tap.ok(isNullable(isNumber)(1), 'number')
  tap.ok(isNullable(isNumber)(null), 'null')
  tap.notOk(isNullable(isNumber)(''), 'string')
  tap.notOk(isNullable(isNumber)({}), 'object')
  tap.notOk(isNullable(isNumber)(undefined), 'undefined')
  tap.notOk(isNullable(isNumber)([]), 'array')
  tap.notOk(isNullable(isNumber)(true), 'boolean')
  tap.notOk(isNullable(isNumber)(NaN), 'NaN')

  const something: unknown = null
  if (isNumber(something)) {
    something.toFixed(2)
  }
})
