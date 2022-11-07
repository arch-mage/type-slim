import tap from 'tap'
import { isOptional } from './isOptional.js'
import { isNumber } from './isNumber.js'

tap.test('isNumber', async (tap) => {
  tap.throws(() => (isOptional as any)(), 'no arg')
  tap.throws(() => (isOptional as any)(1, 2, 3), 'no arg')

  tap.ok(isOptional(isNumber, 1), 'number')
  tap.ok(isOptional(isNumber, undefined), 'undefined')
  tap.notOk(isOptional(isNumber, ''), 'string')
  tap.notOk(isOptional(isNumber, {}), 'object')
  tap.notOk(isOptional(isNumber, null), 'null')
  tap.notOk(isOptional(isNumber, []), 'array')
  tap.notOk(isOptional(isNumber, true), 'boolean')
  tap.notOk(isOptional(isNumber, NaN), 'NaN')

  tap.ok(isOptional(isNumber)(1), 'number')
  tap.ok(isOptional(isNumber)(undefined), 'undefined')
  tap.notOk(isOptional(isNumber)(''), 'string')
  tap.notOk(isOptional(isNumber)({}), 'object')
  tap.notOk(isOptional(isNumber)(null), 'null')
  tap.notOk(isOptional(isNumber)([]), 'array')
  tap.notOk(isOptional(isNumber)(true), 'boolean')
  tap.notOk(isOptional(isNumber)(NaN), 'NaN')

  const something: unknown = null
  if (isNumber(something)) {
    something.toFixed(2)
  }
})
