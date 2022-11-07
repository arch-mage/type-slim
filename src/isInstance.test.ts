import tap from 'tap'
import { isInstance } from './isInstance.js'

tap.test('isInstanceOf', async (tap) => {
  const value: unknown = null

  tap.throws(
    () => (isInstance as any)(),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (isInstance as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isInstance(Date, value))
  tap.notOk(isInstance(Date, {}))
  tap.notOk(isInstance(Date, []))
  tap.notOk(isInstance(Date, true))
  tap.notOk(isInstance(Date, ''))
  tap.notOk(isInstance(Date, 1))
  tap.notOk(isInstance(Date, null))
  tap.notOk(isInstance(Date, undefined))
  tap.ok(isInstance(Date, new Date()))

  if (isInstance(Date, value)) {
    value.getTime()
  }

  if (isInstance(Date)(value)) {
    value.getTime()
  }
})
