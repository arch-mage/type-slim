import tap from 'tap'
import { isBool } from './isBool.js'

tap.test('isBool', async (tap) => {
  tap.ok(isBool(true), 'boolean')
  tap.notOk((isBool as any)(), 'no arg')
  tap.notOk(isBool(''), 'string')
  tap.notOk(isBool({}), 'object')
  tap.notOk(isBool(undefined), 'undefined')
  tap.notOk(isBool(null), 'null')
  tap.notOk(isBool([]), 'array')
  tap.notOk(isBool(1), 'number')

  const something: unknown = null
  if (isBool(something)) {
    something.valueOf()
  }
})
