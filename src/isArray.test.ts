import tap from 'tap'
import { isArray } from './isArray.js'

tap.test('isArray', async (tap) => {
  tap.ok(isArray([]), 'array')
  tap.notOk((isArray as any)(), 'no arg')
  tap.notOk(isArray(undefined), 'undefined')
  tap.notOk(isArray(null), 'null')
  tap.notOk(isArray({}), 'object')
  tap.notOk(isArray(''), 'string')
  tap.notOk(isArray(1), 'number')
  tap.notOk(isArray(true), 'boolean')
})
