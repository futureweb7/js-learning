// Math Methods
// The syntax for Math any methods is : Math.method(number)
// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)
// Math.sign(x) returns if x is negative, null or positive
// Math.pow(x, y) returns the value of x to the power of y
// Math.sqrt(x) returns the square root of x
// Math.abs(x) returns the absolute (positive) value of x
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
const a = 4.4;
const b = 4.5;
const c = 4.6;
const d =-4.33;

console.log("🚀 ~ file: MathObject.js:12 ~ round-4.4", Math.round(a))
console.log("🚀 ~ file: MathObject.js:12 ~ round-4.5", Math.round(b))
console.log("🚀 ~ file: MathObject.js:12 ~ round-4.6", Math.round(c))

console.log("🚀 ~ file: MathObject.js:12 ~ ceil-4.4-->", Math.ceil(a))
console.log("🚀 ~ file: MathObject.js:12 ~ ceil-4.5-->", Math.ceil(b))
console.log("🚀 ~ file: MathObject.js:12 ~ ceil-4.6-->", Math.ceil(c))

console.log("🚀 ~ file: MathObject.js:12 ~ floor-4.4-->", Math.floor(a))
console.log("🚀 ~ file: MathObject.js:12 ~ floor-4.5-->", Math.floor(b))
console.log("🚀 ~ file: MathObject.js:12 ~ floor-4.6-->", Math.floor(c))

console.log("🚀 ~ file: MathObject.js:12 ~ trunc 4.4-->", Math.trunc(a))
console.log("🚀 ~ file: MathObject.js:12 ~ trunc 4.6-->", Math.trunc(c))

console.log("🚀 ~ file: MathObject.js:12 ~ sign -4.33-->", Math.sign(d))
console.log("🚀 ~ file: MathObject.js:12 ~ pow(9,2)-->", Math.pow(9,2))
console.log("🚀 ~ file: MathObject.js:12 ~ sqrt(81)-->", Math.sqrt(81))
console.log("🚀 ~ file: MathObject.js:12 ~ abs(-81)-->", Math.abs(-81))
console.log("🚀 ~ file: MathObject.js:12 ~ max-->", Math.max(0, 150, 30, 20, -8, -200))
console.log("🚀 ~ file: MathObject.js:12 ~ min-->", Math.min(0, 150, 30, 20, -8, -200))
console.log("🚀 ~ file: MathObject.js:12 ~ random-->", Math.random().toFixed(2))
