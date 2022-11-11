import tap from 'tap'
import { isSet } from './isSet.js'

tap.test('isSet', async (tap) => {
  tap.ok(isSet(new Set()), 'set')
  tap.notOk((isSet as any)(), 'no arg')
  tap.notOk(isSet(undefined), 'undefined')
  tap.notOk(isSet(null), 'null')
  tap.notOk(isSet({}), 'object')
  tap.notOk(isSet([]), 'array')
  tap.notOk(isSet(''), 'string')
  tap.notOk(isSet(1), 'number')
  tap.notOk(isSet(true), 'boolean')
})
