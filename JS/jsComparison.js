let age = 2;
let text;
if (age < 18) text = "Too young to buy alcohol";
console.log(text);

// Logical AND ( if both expressions are true)
let x = 6;
let y = 1;

console.log("🚀 ~  jsComparison.js", (x > 2 && y < 2))

// Logical AND ( if one or both expressions are true )

console.log("🚀 ~  jsComparison.js", (x > 2 || y > 2))

//  returns true for false statements

console.log("🚀 ~  jsComparison.js", !(x === y)) // !false === true 
console.log("🚀 ~  jsComparison.js", !(x > 2 || y > 2)) // !true === false

// Conditional (Ternary) Operator 

let taka = 20;

let pepsi = (taka > 18) ? "yes !! you get pepsi" : " no !! pepsi"
console.log(pepsi);

// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.

let text1 = null;
let text2 = "missing";
let result = text1 ?? text2;
console.log("🚀 ~ file: jsComparison.js:35 ~ result:", result)

// The Optional Chaining Operator (?.)

const car = {type:"Fiat", model:"500", color:"white"};
console.log("🚀 ~ file: jsComparison.js:41 ~ car:", car?.name)
