import tap from 'tap'
import { hasProp } from './hasProp.js'

tap.test('hasProp', async (tap) => {
  const value: unknown = null

  tap.throws(() => (hasProp as any)(), TypeError('invalid number of arguments'))
  tap.throws(
    () => (hasProp as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(hasProp('name')(value))
  tap.notOk(hasProp('name', value))
  tap.notOk(hasProp('length', []))

  tap.ok(hasProp('name')({ name: 'name' }))
  tap.ok(hasProp('name', { name: 'name' }))

  if (hasProp('name', value)) {
    value.name
  }

  if (hasProp('name')(value)) {
    value.name
  }
})
