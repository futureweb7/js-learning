const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("🚀 ~ file: SortingArrays.js:2 ~ fruits:", fruits.reverse())
console.log("🚀 ~ file: SortingArrays.js:2 ~ fruits:", fruits.sort())

// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];
const result = points.sort(
    function(a,b){
        return  a-b;
    }
)
console.log("🚀 ~ file: SortingArrays.js:8 ~ result:", result)
//Find the Lowest Array Value
console.log("🚀 ~ file: SortingArrays.js:8 ~ Lowest:", result[0])
const hResult = points.sort(
    function(a,b){
         return b-a;
    }
)
//Find the  Highest Array Value
console.log("🚀 ~ file: SortingArrays.js:8 ~ hResult:", result[0])

//Using Math.max()  to find Highest Array Value;
const point2 = [40, 100, 1, 5, 25, 10];
function highestValue(arr){
    return Math.max.apply(null, arr);
}
console.log("🚀 ~ file: SortingArrays.js:8 ~ hResult:", highestValue(point2));
//Using Math.max() to find Lowest Array Value;
function LowestValue(arr){
    return Math.min.apply(null, arr);
}
console.log("🚀 ~ file: SortingArrays.js:8 ~ lResult:",LowestValue(point2));
console.log("🚀 ~ file: SortingArrays.js:8 ~ point2:",point2);

//Sorting Object Arrays
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ]
  console.log("🚀 ~ file: SortingArrays.js:8 ~ point1:",items.sort((a,b) => a.value -b.value));  
//   console.log("🚀 ~ file: SortingArrays.js:8 ~ point2:",
//   items.sort(
//       function(a,b){
//         let x = a.name.toUpperCase();
//         let y = b.name.toUpperCase();
//         if(x<y){return -1}
//         if(x>y){return 1}
//         return 0 ; 
//       }
//   ));
console.log("🚀 ~ file: SortingArrays.js:8 ~ point2:",
items.sort(
    function(a,b){

      if(a.name<b.name)return -1;
      if(a.name>b.name)return 1;
      return 0 ; 
    }
));
