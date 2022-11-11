import tap from 'tap'
import { isArrayOf } from './isArrayOf.js'
import { isNumber } from './isNumber.js'
import { isTupleOf } from './isTupleOf.js'
import { isString } from './isString.js'

tap.test('isTupleOf', async (tap) => {
  const pass = ['name', 0, ['a', 'b']] as const

  const tuple = [isString, isNumber, isArrayOf(isString)] as const

  tap.throws(
    () => (isTupleOf as any)(),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (isTupleOf as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isTupleOf(tuple, null))
  tap.notOk(isTupleOf(tuple, []))
  tap.notOk(isTupleOf(tuple, {}))
  tap.notOk(isTupleOf(tuple, ['name', '0', ['a', 'b']]))
  tap.ok(isTupleOf(tuple, pass))

  tap.notOk(isTupleOf(tuple)(null))
  tap.notOk(isTupleOf(tuple)([]))
  tap.notOk(isTupleOf(tuple)({}))
  tap.notOk(isTupleOf(tuple)(['name', '0', ['a', 'b']]))
  tap.ok(isTupleOf(tuple)(pass))

  const something: unknown = null
  if (isTupleOf(tuple, something)) {
    something[0].charAt(0)
    something[1].toFixed(2)
    something[2].at(0)?.charAt(0)
  }

  const isPerson = isTupleOf(tuple)
  if (isPerson(something)) {
    something[0].charAt(0)
    something[1].toFixed(2)
    something[2].at(0)?.charAt(0)
  }
})
