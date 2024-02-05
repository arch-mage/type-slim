import { expect, test } from 'vitest'
import { hasPropOf } from './hasPropOf.js'
import { isBool } from './isBool.js'
import { isString } from './isString.js'

test('hasPropOf', () => {
  const fail: unknown = null
  const pass = { ok: true }

  expect(() => (hasPropOf as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (hasPropOf as any)(1, 2, 3, 4)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(hasPropOf(isString)('ok')(fail)).toBeFalsy()
  expect(hasPropOf(isString, 'ok')(fail)).toBeFalsy()
  expect(hasPropOf(isString, 'ok', fail)).toBeFalsy()

  expect(hasPropOf(isBool)('ok')(pass)).toBeTruthy()
  expect(hasPropOf(isBool, 'ok')(pass)).toBeTruthy()
  expect(hasPropOf(isBool, 'ok', pass)).toBeTruthy()

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
