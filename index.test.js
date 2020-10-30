const fizzBuzz = require('./index.js');

test('fizzBuzz(1) returns 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('fizzBuzz(2) returns 2', () => {
  expect(fizzBuzz(2)).toBe(2);
});

test('fizzBuzz(3) returns "Fizz"', () => {
  expect(fizzBuzz(3)).toBe('Fizz');
});

test('fizzBuzz returns "Fizz" for multiples of 3', () => {
  expect(fizzBuzz(6)).toBe('Fizz');
});

test('fizzBuzz(5) returns "Buzz"', () => {
  expect(fizzBuzz(5)).toBe('Buzz');
});

test('fizzBuzz returns "Buzz" for multiples of 5', () => {
  expect(fizzBuzz(10)).toBe('Buzz');
});

test('fizzBuzz returns "FizzBuzz" for multiples of 5 and 3', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
});