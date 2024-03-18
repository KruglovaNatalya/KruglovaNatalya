kiwi

const filterEvenNumbers = numbers => numbers.filter(isEven);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findLargestNumber = numbers => Math.max(...numbers);

orange

const isPalindrome = str => str === str.split("").reverse().join("");
7 + 18
const sum = (a, b) => a + b;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
