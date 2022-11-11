import tap from 'tap'
import { isMapOf } from './isMapOf.js'
import { isNumber } from './isNumber.js'
import { isString } from './isString.js'

tap.test('isMapOf', async (tap) => {
  const fail: unknown = null
  const pass = new Map([
    ['1', 1],
    ['2', 2],
  ])

  tap.throws(() => (isMapOf as any)(), TypeError('invalid number of arguments'))
  tap.throws(
    () => (isMapOf as any)(1, 2, 3),
    TypeError('invalid number of arguments')
  )

  tap.notOk(isMapOf([isString, isNumber])(fail))
  tap.notOk(isMapOf([isString, isNumber], fail))

  tap.notOk(
    isMapOf([isString, isNumber])(
      new Map<any, any>([
        ['1', 1],
        [2, '2'],
      ])
    )
  )
  tap.notOk(
    isMapOf(
      [isString, isNumber],
      new Map<any, any>([
        ['1', 1],
        [2, '2'],
      ])
    )
  )

  tap.ok(isMapOf([isString, isNumber])(pass))
  tap.ok(isMapOf([isString, isNumber], pass))

  if (isMapOf([isString, isNumber], fail)) {
    const spread = [...fail]
    const [[key, val]] = spread
    key.charAt(0)
    val.toFixed(2)
  }

  if (isMapOf([isString, isNumber])(fail)) {
    const spread = [...fail]
    const [[key, val]] = spread
    key.charAt(0)
    val.toFixed(2)
  }
})
