import tap from 'tap'
import { isNonNil } from './isNonNil.js'

tap.test('isNonNil', async (tap) => {
  tap.notOk(isNonNil(null))
  tap.notOk(isNonNil(undefined))
  tap.ok(isNonNil(1))
})
