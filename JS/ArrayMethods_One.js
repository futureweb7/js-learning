// JavaScript Array Methods-------------->>>
// Array length  -----------------------------------ok 
// Array toString() -----------------------------------ok 
// Array pop() -------------------------------------ok 
// Array push() ------------------------------------ok 
// Array shift() -----------------------------------ok
// Array unshift() ---------------------------------ok
// Array join() ---------------------------------ok
// Array delete()---------------------------------ok
// Array concat()---------------------------------ok
// Array flat() ---------------------------------ok
// Array splice() ---------------------------------ok
// Array reduce() method in JavaScript is used to reduce the array to a single value
// Array slice() ---------------------------------ok
const months = ['January', 'February', 'March', 'April'];
const months2 = ['June', 'July'];
const fruits = ["Banana", "Orange", "Apple", "Mango"];

const arr1 = [1, 2, [3, 4]];
const arr2 = [1, 2, [3, 4, [5, 6]]];
const arr3 = [1, 2, [3, 4, [5, 6]]];
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log("🚀 ~ file: ArrayMethods.js:15 ~ length:", months.length)
console.log("🚀 ~ file: ArrayMethods.js:15 ~ toString:", months.toString())
console.log("🚀 ~ file: ArrayMethods.js:15 ~ pop:", months.pop())
console.log("🚀 ~ file: ArrayMethods.js:15 ~ pop-->:", months)
console.log("🚀 ~ file: ArrayMethods.js:15 ~ push:", months.push("May"))
console.log("🚀 ~ file: ArrayMethods.js:15 ~ push-->:", months)
console.log("🚀 ~ file: ArrayMethods.js:15 ~ shift:", months.shift())
console.log("🚀 ~ file: ArrayMethods.js:15 ~ shift-->:", months)
console.log("🚀 ~ file: ArrayMethods.js:15 ~ unshift:", months.unshift("January"))
console.log("🚀 ~ file: ArrayMethods.js:15 ~ unshift-->", months)
console.log("🚀 ~ file: ArrayMethods.js:15 ~ join-->", months.join(' -- '))
// console.log("🚀 ~ file: ArrayMethods.js:15 ~ delete",delete months[0])
// console.log("🚀 ~ file: ArrayMethods.js:15 ~ delete-->", months[0])
console.log("🚀 ~ file: ArrayMethods.js:15 ~ concat-->", months.concat(months2))
console.log("🚀 ~ file: ArrayMethods.js:17 ~ flat-1:", arr1.flat())
console.log("🚀 ~ file: ArrayMethods.js:17 ~ flat-2:", arr2.flat())
console.log("🚀 ~ file: ArrayMethods.js:17 ~ flat-3:", arr3.flat(2))
console.log("🚀 ~ file: ArrayMethods.js:17 ~ flat-4:", arr4.flat(Infinity))
console.log("🚀 ~ file: ArrayMethods.js:17 ~ splice", fruits.splice(1,0,'robin'))
console.log("🚀 ~ file: ArrayMethods.js:17 ~ splice", fruits)
console.log("🚀 ~ file: ArrayMethods.js:17 ~ slice", fruits.slice(4))

//reduce() method 
const arr=[175, 20, 25,50]
console.log("🚀 ~ file: ArrayMethods.js:17 ~ reduce-->",
arr.reduce((total, num) => total - num)
)
 console.log("🚀 ~ file: ArrayMethods.js:17 ~ every", arr.every( n => n>100 ))
 console.log("🚀 ~ file: ArrayMethods.js:17 ~ filter2", arr.filter( n => n>25 ))
 console.log("🚀 ~ file: ArrayMethods.js:17 ~ findIndex", arr.findIndex( n => n > 25 ))
 console.log("🚀 ~ file: ArrayMethods.js:17 ~ some", arr.some( n => n > 25 ))
 console.log("🚀 ~ file: ArrayMethods.js:17 ~ find3", arr)





