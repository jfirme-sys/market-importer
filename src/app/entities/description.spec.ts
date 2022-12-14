import { describe, it, expect } from 'vitest'
import { Description } from './description'

describe('Description', () => {
  it('should be able to create a product description', () => {
    const description = new Description('Peanut Butter')

    expect(description).toBeTruthy();
  })

  it('should not be able to create a product description with less then 3 characters', () => {
    expect(() => new Description('A')).toThrow();
  })

  it('should not be able to create a product description with more then 1024 characters', () => {
    expect(() => new Description('A'.repeat(1025))).toThrow();
  })

  it('should be able to create a product description with exactly 3 characters', () => {
    const description = new Description('ABC')
    expect(description).toBeTruthy();
  })

  it('should be able to create a product description with exactly 1024 characters', () => {
    const description = new Description('A'.repeat(1024))
    expect(description).toBeTruthy();
  })

  it('should be able to retrieve the value of the product description', () => {
    const description = new Description('Peanut Butter')
    expect(description.description).toBe('Peanut Butter');
  })
})
