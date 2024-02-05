import { expect, test } from 'vitest'
import { hasProp } from './hasProp.js'

test('hasProp', () => {
  const value: unknown = null

  expect(() => (hasProp as any)()).toThrowError(
    TypeError('invalid number of arguments')
  )
  expect(() => (hasProp as any)(1, 2, 3)).toThrowError(
    TypeError('invalid number of arguments')
  )

  expect(hasProp('name')(value)).toBeFalsy()
  expect(hasProp('name', value)).toBeFalsy()
  expect(hasProp('length', [])).toBeFalsy()

  expect(hasProp('name')({ name: 'name' })).toBeTruthy()
  expect(hasProp('name', { name: 'name' })).toBeTruthy()

  if (hasProp('name', value)) {
    value.name
  }

  if (hasProp('name')(value)) {
    value.name
  }
})
