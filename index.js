 // A number is fizz if it is divisible by 3 or if it has a 3 in it
 // A number is buzz if it is divisible by 5 or if it has a 5 in it

const FIZZ_VALUE = 3;
const FIZZ_STRING = "Fizz";
const BUZZ_VALUE = 5;
const BUZZ_STRING = "Buzz";

function fizzBuzz(num){
    let result = '';
    if (num % FIZZ_VALUE === 0 || num.toString().includes(FIZZ_VALUE)) {
        result += FIZZ_STRING;
    }
    if (num % BUZZ_VALUE === 0 || num.toString().includes(BUZZ_VALUE)) {
        result += BUZZ_STRING;
    }
    return result || num;
}

module.exports = fizzBuzz
