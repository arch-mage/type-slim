import { expect, test } from 'vitest'
import { isInstance } from './isInstance.js'

test('isInstanceOf', () => {
  const value: unknown = null

  expect(() => (isInstance as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (isInstance as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(isInstance(Date, value)).toBeFalsy()
  expect(isInstance(Date, {})).toBeFalsy()
  expect(isInstance(Date, [])).toBeFalsy()
  expect(isInstance(Date, true)).toBeFalsy()
  expect(isInstance(Date, '')).toBeFalsy()
  expect(isInstance(Date, 1)).toBeFalsy()
  expect(isInstance(Date, null)).toBeFalsy()
  expect(isInstance(Date, undefined)).toBeFalsy()
  expect(isInstance(Date, new Date())).toBeTruthy()

  if (isInstance(Date, value)) {
    value.getTime()
  }

  if (isInstance(Date)(value)) {
    value.getTime()
  }
})
