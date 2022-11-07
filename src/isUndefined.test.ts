import tap from 'tap'
import { isUndefined } from './isUndefined.js'

tap.test('isUndefined', async (tap) => {
  tap.ok((isUndefined as any)(), 'no arg')
  tap.ok(isUndefined(undefined), 'undefined')
  tap.notOk(isUndefined(''), 'string')
  tap.notOk(isUndefined({}), 'object')
  tap.notOk(isUndefined(null), 'null')
  tap.notOk(isUndefined(true), 'boolean')
  tap.notOk(isUndefined([]), 'array')
  tap.notOk(isUndefined(1), 'number')
})
