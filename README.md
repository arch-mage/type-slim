# type-slim

A collection of composable type guard functions.

## installation

    npm install type-slim

or

    yarn install type-slim

## usage

_type-slim is a pure ESM package. You must use `import` to use it._


## type guard example

```ts
import {
  assert,
  isNumber,
  isString,
  isArrayOf,
  isObjectOf,
  isNullable,
  isInstance,
} from 'type-slim'

const value: unknown = null

if (isNumber(value)) {
  value // value now is number
}

if (isString(value)) {
  value // value now is number
}

const isPerson = isObjectOf({
  id: isNumber,
  name: isString,
  addr: isNullable(isString),
  birthDate: isInstance(Date),
  contacts: isArrayOf(
    isObjectOf({
      id: isNumber,
      contact: isString,
    })
  ),
})

interface Contact {
  id: number
  contact: string
}

interface Person {
  id: number
  name: string
  addr: string | null
  birthDate: Date
  contacts: Contact[]
}

interface WithAge extends Person {
  age: number
}

if (isPerson(value)) {
  person(value) // value now satisfies Person interface
  withAge(value) // error TS2345
}

function person(person: Person) {}

function withAge(withAge: WithAge) {}

function withAssert(value: unknown) {
  assert(isPerson, 'not a person', value)
  value.id // type safe
}
```

## functions

```ts
function isBool(value)
function isNull(value)
function isNumber(value)
function isString(value)
function isUndefined(value)

function isNonNil(value)
function isNullable(value)
function isOptional(value)

function hasProp(prop, value)
function isSet(value)
function isMap(value)
function isArray(value)
function isObject(value)
function isInstance(value)

function isUnionOf([...guard], value)
function hasPropOf(guard, prop, value)
function isSetOf(guard, value)
function isMapOf([guard, guard], value)
function isArrayOf(guard, value)
function isTupleOf(value)
function isRecordOf(value)
function isObjectOf(value)

function assert(guard, error, value)
```
