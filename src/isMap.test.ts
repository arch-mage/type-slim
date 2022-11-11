import tap from 'tap'
import { isMap } from './isMap.js'

tap.test('isMap', async (tap) => {
  tap.ok(isMap(new Map()), 'map')
  tap.notOk((isMap as any)(), 'no arg')
  tap.notOk(isMap(undefined), 'undefined')
  tap.notOk(isMap(null), 'null')
  tap.notOk(isMap({}), 'object')
  tap.notOk(isMap([]), 'array')
  tap.notOk(isMap(''), 'string')
  tap.notOk(isMap(1), 'number')
  tap.notOk(isMap(true), 'boolean')
})
