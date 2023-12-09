// JavaScript Number Methods

// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number
//toPrecision() returns a string, with a number written with a specified length
 const num =123.8910
 console.log("🚀 ~ file: numMethod.js:10 ~ toString:",  num.toString())
 console.log("🚀 ~ file: numMethod.js:10 ~ toExponential:",  num.toExponential(2))
 console.log("🚀 ~ file: numMethod.js:10 ~ toFixed:",  num.toFixed(2))
 console.log("🚀 ~ file: numMethod.js:10 ~ valueOf:",  num.valueOf(num))
 console.log("🚀 ~ file: numMethod.js:10 ~ toPrecision:",  num.toPrecision())
 
//  The Number() Method

console.log("🚀 ~ file: numMethod.js:19 ~ Number(true):", Number(true))
console.log("🚀 ~ file: numMethod.js:19 ~ Number(false):", Number(false))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number("  10"))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number("10  "))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number(" 10  "))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number("10.33"))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number("10,33"))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number("10 33"))
console.log("🚀 ~ file: numMethod.js:19 ~ Number:", Number("John"))
