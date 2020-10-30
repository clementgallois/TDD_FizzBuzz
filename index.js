 // A number is fizz if it is divisible by 3 or if it has a 3 in it
 // A number is buzz if it is divisible by 5 or if it has a 5 in it
function fizzBuzz(num){
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num;
}

module.exports = fizzBuzz
