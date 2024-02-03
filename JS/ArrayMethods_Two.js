// JavaScript Array Methods-------------->>>

// The at() method returns an indexed element from an array.
// copyWithin()
// entries()
//The every() method returns true if the function returns true for all elements.
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The find() method returns the value of the first element that passes a test.
//map(), 
// forEach(),
// reduce(), 
//sort(),
//includes(),
//indexOf(), 
//some(), 
//concat(),

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("🚀  ~ at():", fruits.at(2))
console.log("🚀  ~ copyWithin():", fruits.copyWithin(2, 3))

// for every()
const arr = [12,70,30,90,20];
function checkedkAge(age){
    age > 18 ; 
}
function isOdd(num){
 return num % 2 === 1;
}
function isEven(num){
 return num % 2 === 0;
}
console.log("🚀  ~ every():", arr.every(checkedkAge));
console.log("🚀  ~ every(isOdd):", arr.every(isOdd));
console.log("🚀  ~ every(isEven):", arr.every(isEven));
// for filter()
console.log("🚀  ~ filter():", arr.filter((item) => item !== 12));

// forEach()  example will be found Test_array_one.js
