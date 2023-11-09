import ConvertToArabic from './ConvertToArabic';
import { expect, test } from 'vitest'

test('XX to be 20', () => {
  expect(ConvertToArabic('XX')).toBe(20)
})

test('VI to be 6', () => {
  expect(ConvertToArabic('VI')).toBe(6)
})