const fizzBuzz = require('./index.js');

test('fizzBuzz(1) returns 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('fizzBuzz(2) returns 2', () => {
  expect(fizzBuzz(2)).toBe(2);
});