import { expect, test } from 'vitest'
import { isSet } from './isSet.js'

test('isSet', () => {
  expect(isSet(new Set()), 'set').toBeTruthy()
  expect((isSet as any)(), 'no arg').toBeFalsy()
  expect(isSet(undefined), 'undefined').toBeFalsy()
  expect(isSet(null), 'null').toBeFalsy()
  expect(isSet({}), 'object').toBeFalsy()
  expect(isSet([]), 'array').toBeFalsy()
  expect(isSet(''), 'string').toBeFalsy()
  expect(isSet(1), 'number').toBeFalsy()
  expect(isSet(true), 'boolean').toBeFalsy()
})
