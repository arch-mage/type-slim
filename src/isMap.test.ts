import { expect, test } from 'vitest'
import { isMap } from './isMap.js'

test('isMap', () => {
  expect(isMap(new Map()), 'map').toBeTruthy()
  expect((isMap as any)(), 'no arg').toBeFalsy()
  expect(isMap(undefined), 'undefined').toBeFalsy()
  expect(isMap(null), 'null').toBeFalsy()
  expect(isMap({}), 'object').toBeFalsy()
  expect(isMap([]), 'array').toBeFalsy()
  expect(isMap(''), 'string').toBeFalsy()
  expect(isMap(1), 'number').toBeFalsy()
  expect(isMap(true), 'boolean').toBeFalsy()
})
