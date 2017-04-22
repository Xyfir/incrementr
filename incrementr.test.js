const increment = require('./incrementr');

test('0 to 1', () => {
  expect(increment('0')).toBe('1');
});

test('A to B', () => {
  expect(increment('A')).toBe('B');
});

test('a to b', () => {
  expect(increment('a')).toBe('b');
});

test('9 to A', () => {
  expect(increment('9')).toBe('A');
});

test('Z to a', () => {
  expect(increment('Z')).toBe('a');
});

test('z to 00', () => {
  expect(increment('z')).toBe('00');
});

test('9 to 00', () => {
  expect(
    increment('9', { characters: { numbers: true } })
  ).toBe('00');
});

test('9 to a', () => {
  expect(
    increment('9', { characters: { numbers: true, lowercase: true } })
  ).toBe('a');
});

test('z to AA', () => {
  expect(
    increment('z', { characters: { uppercase: true, lowercase: true } })
  ).toBe('AA');
});

test('Z to 00', () => {
  expect(
    increment('Z', { characters: { uppercase: true, numbers: true } })
  ).toBe('00');
});

test('z to aa', () => {
  expect(
    increment('z', { characters: { lowercase: true } })
  ).toBe('aa');
});

test('Z to AA', () => {
  expect(
    increment('Z', { characters: { uppercase: true } })
  ).toBe('AA');
});