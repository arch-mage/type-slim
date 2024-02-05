import { expect, test } from 'vitest'
import { isNonNil } from './isNonNil.js'

test('isNonNil', () => {
  expect(isNonNil(null)).toBeFalsy()
  expect(isNonNil(undefined)).toBeFalsy()
  expect(isNonNil(1)).toBeTruthy()
})
