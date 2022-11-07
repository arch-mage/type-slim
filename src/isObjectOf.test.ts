import tap from 'tap'
import { isArrayOf } from './isArrayOf.js'
import { isNumber } from './isNumber.js'
import { isObjectOf } from './isObjectOf.js'
import { isString } from './isString.js'

tap.test('isObjectOf', async (tap) => {
  const pass = {
    name: 'name',
    age: 0,
    address: ['a', 'b'],
  }

  const shape = {
    name: isString,
    age: isNumber,
    address: isArrayOf(isString),
  }

  tap.throws(
    () => (isObjectOf as any)(),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (isObjectOf as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isObjectOf(shape, null))
  tap.notOk(isObjectOf(shape, []))
  tap.notOk(isObjectOf(shape, {}))
  tap.notOk(isObjectOf(shape, { name: 'name', age: '0' }))
  tap.ok(isObjectOf(shape, pass))

  tap.notOk(isObjectOf(shape)(null))
  tap.notOk(isObjectOf(shape)([]))
  tap.notOk(isObjectOf(shape)({}))
  tap.notOk(isObjectOf(shape)({ name: 'name', age: '0' }))
  tap.ok(isObjectOf(shape)(pass))

  const something: unknown = null
  if (isObjectOf(shape, something)) {
    something.name.charAt(0)
    something.age.toFixed(2)
    something.address.at(0)?.charAt(0)
  }

  const isPerson = isObjectOf(shape)
  if (isPerson(something)) {
    something.name.charAt(0)
    something.age.toFixed(2)
    something.address.at(0)?.charAt(0)
  }
})
