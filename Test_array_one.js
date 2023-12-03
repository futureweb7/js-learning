// remove negative values using the filter array function.
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
console.log("🚀  ~ filter:", numbers.filter((item) => item>=0))
// filtering freelancers with JavaScript as a skill set.
let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"JavaScript"}];

console.log("🚀  ~ filter:", 
freelancers.filter((reelancer) => reelancer.skill ===  "JavaScript" 
));

// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log("🚀  ~ filter:", 
array.filter((item) => item % 2 !== 0 && item % item === 0 && item > 1
));
//Filtering invalid entries from JSON
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: undefined },
  ];
  console.log("🚀  ~ filter:", 
  arr.filter((item) => item.id && item.id !== 0 && item.id !== "undefined"
));

//  find the city whose population is greater than 3 million
let cities = [
  {name: 'Los Angeles', population: 3792621},
  {name: 'New York', population: 8175133},
  {name: 'Chicago', population: 2695598},
  {name: 'Houston', population: 2099451},
  {name: 'Philadelphia', population: 1526006}
];
console.log("🚀  ~ filter:", 
cities.filter((item) => item.population > 3000000
));
// using for  loop
 let findCity=[];

 let l= cities.length;
 for (let i = 0; i < l; i++) {
  if(cities[i].population > 3000000){
     findCity.push(cities[i])
  }
 }
 console.log("🚀 ~  findCity:", findCity)

 //  display all of the names individually with some words 
 const staffsDetails = [
  { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
  { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
  { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
  { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

staffsDetails.forEach((item, index) =>{
  console.log(`${index + 1}. Mr. --${item.name}-- is good boy `);
});

// Multiply each elemen;
const number = [65, 44, 12, 4];

number.forEach((item, index,arr) => {
 console.log( arr[index] = item * 10);
})

 // calculate the total amount of the products in the shopping cart
 let shoppingCart = [
  {  product: 'phone', qty: 1, price: 500,},
  { product: 'Screen Protector', qty: 1, price: 10,},
  { product: 'Memory Card',  qty: 2, price: 20, },
];

const total = shoppingCart.reduce((total,item)=>{
  return total + item.qty * item.price;
},0)
console.log("🚀 ~  shoppingCart:", total)