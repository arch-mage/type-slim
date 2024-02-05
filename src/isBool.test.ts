import { expect, test } from 'vitest'
import { isBool } from './isBool.js'

test('isBool', () => {
  expect(isBool(true), 'boolean').toBeTruthy()
  expect((isBool as any)(), 'no arg').toBeFalsy()
  expect(isBool(''), 'string').toBeFalsy()
  expect(isBool({}), 'object').toBeFalsy()
  expect(isBool(undefined), 'undefined').toBeFalsy()
  expect(isBool(null), 'null').toBeFalsy()
  expect(isBool([]), 'array').toBeFalsy()
  expect(isBool(1), 'number').toBeFalsy()

  const something: unknown = null
  if (isBool(something)) {
    something.valueOf()
  }
})
