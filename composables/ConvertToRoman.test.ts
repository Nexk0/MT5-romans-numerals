import { expect, test } from 'vitest'
import ConvertToRoman from "./ConvertToRoman";

test('25 to be XXV', () => {
  expect(ConvertToRoman(25)).toBe('XXV')
})

test('100 to be C', () => {
  expect(ConvertToRoman(100)).toBe('C')
})