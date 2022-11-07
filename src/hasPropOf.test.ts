import tap from 'tap'
import { hasPropOf } from './hasPropOf.js'
import { isBool } from './isBool.js'
import { isString } from './isString.js'

tap.test('hasPropOf', async (tap) => {
  const fail: unknown = null
  const pass = { ok: true }

  tap.throws(
    () => (hasPropOf as any)(),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (hasPropOf as any)(1, 2, 3, 4),
    TypeError('invalid number of arguments')
  )

  tap.notOk(hasPropOf(isString)('ok')(fail))
  tap.notOk(hasPropOf(isString, 'ok')(fail))
  tap.notOk(hasPropOf(isString, 'ok', fail))

  tap.ok(hasPropOf(isBool)('ok')(pass))
  tap.ok(hasPropOf(isBool, 'ok')(pass))
  tap.ok(hasPropOf(isBool, 'ok', pass))

  if (hasPropOf(isString)('name')(fail)) {
    fail.name.toUpperCase()
  }

  if (hasPropOf(isString, 'name')(fail)) {
    fail.name.toUpperCase()
  }

  if (hasPropOf(isString, 'name', fail)) {
    fail.name.toUpperCase()
  }
})
