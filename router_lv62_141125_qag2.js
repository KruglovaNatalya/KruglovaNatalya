let array = getRandomArray(); array.forEach(item => console.log(item));
65 - true

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
kiwi

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

const isEven = num => num % 2 === 0;
banana

const getRandomSubset = (array, size) => array.slice(0, size);
const multiply = (a, b) => a * b;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
