import tap from 'tap'
import { isBool } from './isBool.js'
import { isNumber } from './isNumber.js'
import { isString } from './isString.js'
import { isUnionOf } from './isUnionOf.js'

tap.test('isUnionOf', async (tap) => {
  tap.throws(
    () => (isUnionOf as any)(),
    TypeError('invalid number of arguments')
  )
  tap.throws(
    () => (isUnionOf as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isUnionOf([isString, isNumber, isBool], []))
  tap.notOk(isUnionOf([isString, isNumber, isBool], {}))
  tap.notOk(isUnionOf([isString, isNumber, isBool], NaN))
  tap.notOk(isUnionOf([isString, isNumber, isBool], null))
  tap.notOk(isUnionOf([isString, isNumber, isBool], undefined))

  tap.ok(isUnionOf([isString, isNumber, isBool], '1'))
  tap.ok(isUnionOf([isString, isNumber, isBool], 1))
  tap.ok(isUnionOf([isString, isNumber, isBool], true))
  tap.ok(isUnionOf([isString, isNumber, isBool], false))

  tap.ok(isUnionOf([isString, isNumber, isBool])('1'))
  tap.ok(isUnionOf([isString, isNumber, isBool])(1))
  tap.ok(isUnionOf([isString, isNumber, isBool])(true))
  tap.ok(isUnionOf([isString, isNumber, isBool])(false))

  const something: unknown = null

  function somehow(value: number | string | boolean) {
    return value
  }

  if (isUnionOf([isString, isNumber, isBool], something)) {
    somehow(something)
  }

  const isPrimitive = isUnionOf([isString, isNumber, isBool])
  if (isPrimitive(something)) {
    somehow(something)
  }
})
