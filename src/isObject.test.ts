import tap from 'tap'
import { isObject } from './isObject.js'

tap.test('isObject', async (tap) => {
  tap.ok(isObject({}), 'object')
  tap.notOk((isObject as any)(), 'no arg')
  tap.notOk(isObject(undefined), 'undefined')
  tap.notOk(isObject(null), 'null')
  tap.notOk(isObject([]), 'array')
  tap.notOk(isObject(''), 'string')
  tap.notOk(isObject(1), 'number')
  tap.notOk(isObject(true), 'boolean')
})
