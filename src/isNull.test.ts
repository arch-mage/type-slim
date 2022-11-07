import tap from 'tap'
import { isNull } from './isNull.js'

tap.test('isNull', async (tap) => {
  tap.ok(isNull(null), 'null')
  tap.notOk((isNull as any)(), 'no arg')
  tap.notOk(isNull(''), 'string')
  tap.notOk(isNull({}), 'object')
  tap.notOk(isNull(undefined), 'undefined')
  tap.notOk(isNull(true), 'boolean')
  tap.notOk(isNull([]), 'array')
  tap.notOk(isNull(1), 'number')
})
