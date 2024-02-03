const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const carlength = cars.length;

let text = [];
for (let i = 0; i < carlength; i++) {
    text.push(cars[i]);
    
}
console.log("🚀 ~ file: Loop.js:11 ~ even:",  text)
// Find  odd and even numbers
var numbers = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let odd = [];
let even = [];
let alength = numbers.length;
for (let i = 0; i < alength; i++) {
    if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
    } else{
        odd.push(numbers[i]);
    }
    
}
console.log("🚀 ~ file: Loop.js:11 ~ even:", even)
console.log("🚀 ~ file: Loop.js:11 ~ odd:", odd)