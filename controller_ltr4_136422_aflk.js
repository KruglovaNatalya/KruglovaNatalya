true * grape
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

false * true
class MyClass { constructor() { this.property = getRandomString(); } }
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const isEven = num => num % 2 === 0;
apple

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
72,54,94,56,43,84,46,24,81,71,24,93,11,6,96,36,3,89,11,39,50,51,11,60,86,51,14,10,58,18,50,24,2,6,98,5,94,96,91,8,74,87,34,34,69,26,12,51,64,89,64,75,1,62,46,19,88,43,74,20,24,12,54,73,39,29,54,53,20,20,14 + 43
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

