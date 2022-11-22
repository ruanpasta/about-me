import { expect } from 'vitest'
import { classMap } from '../../../src/helpers/classMap'

describe('helpers classMap', () => {
  test('should return a string with classes of an object', () => {
    const classes = { one: true, two: false, tree: true }
    const result = classMap(classes)
    expect(result).toBe('one tree')
  })
})