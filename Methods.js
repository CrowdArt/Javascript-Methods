/**
 * 1. Turn string into an array
 * 2. Call reverse method on the array
 * 3. Join the array back into the string
 * 4. Return the result
 * 
 */

 function reverse(string) {
    const array = string.split('')
    array.reverse();
    array.join('');
 }

 module.exports = reverse;

