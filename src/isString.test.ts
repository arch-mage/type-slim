import tap from 'tap'
import { isString } from './isString.js'

tap.test('isString', async (tap) => {
  tap.ok(isString(''), 'string')
  tap.notOk(isString({}), 'object')
  tap.notOk((isString as any)(), 'no arg')
  tap.notOk(isString(undefined), 'undefined')
  tap.notOk(isString(null), 'null')
  tap.notOk(isString([]), 'array')
  tap.notOk(isString(1), 'number')
  tap.notOk(isString(true), 'boolean')

  const something: unknown = null
  if (isString(something)) {
    something.charAt(0)
  }
})
