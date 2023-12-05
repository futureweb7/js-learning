// # All JavaScript values, except primitives, are objects.
// # A primitive value is a value that has no properties or methods.
// # JavaScript defines 7 types of primitive data types:--->
// ---> String, number,boolean,null,undefined,Symbol,BigInt
// # Primitive values are immutable (they are hardcoded and cannot be changed).
// # Objects are variables too. But objects can contain many values.
// # Objects are mutable: They are addressed by reference, not by value.
// # declare objects with the const keyword.
// # objects are containers for named values, called properties and methods.
// # Using an object literal const x{}.


// 🚀🚀 Object Definitions 
const person = 
{
    firstName:"Sayam ",
    lastName:" Rahman ",
    age:35,
    eyeColor:" black ",
    // fullName: function(){
    //     return this.firstName + " " + this.lastName;
    // }
};
const x = person;
x.age = 36;
console.dir(person )
console.log("🚀 ~ file: Objects.js:21 ~ x:", x)
// console.log("🚀 ~ Creating obj:", person.fullName() + " is good person age of " + person.age +" "+ person.eyeColor +" color eye")

// #The syntax for accessing the property of an object is --->
// ---> objectName.property      // person.age
// ---> objectName["property"]   // person["age"]
// ---> objectName[expression]   // x = "age"; person[x]

// 🚀🚀 Object Properties

person.nationality = "bangladesh"
let text = ''
for (let  x in person) {
    // console.log(x);
    text +=person[x];
}
console.log(text);
// console.dir(person);
let list = ""
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
for(let i in myObj.cars){
    // console.log(i);
      list += "(" + myObj.cars[i].name+ ")"
      for(let j in myObj.cars[i].models){
          list += "/" + myObj.cars[i].models[j]+ " "
      }
}
console.log(list);

// 🚀🚀 Object Methods
// ***  Adding a Method to an Object

const ex3 = {
    fName:"Sayan",
    lName:"Rahman",
    age:35,
}

ex3.fullName = function(){
    return this.fName +" " + this.lName;
}
console.log(ex3);
console.log(ex3.fullName());


// 🚀🚀 Object Display

// * Displaying a JavaScript object will output [object Object].
// * Some common solutions to display JavaScript objects are: --->
// ---> Displaying the Object Properties by name -->
// -->EX:  person.name
// ---> Displaying the Object Properties in a Loop -->
// --> EX: for(let x in object){ object[x]}
// ***  You must use person[x] in the loop.person.x will not work (Because x is a variable).
// ---> Displaying the Object using Object.values() -->
// --> Object.values(object)
// ---> Displaying the Object using JSON.stringify()
// JSON.stringify will not stringify functions:


const ex4 = {
    name: "John",
    age: 30,
    city: "New York"
  };

  let x4 = Object.values(ex4);
  console.log("Object.values", x4); // it's iterator

let x5 = JSON.stringify(ex4);
console.log("JSON.stringify()", x5);

 
// --------JSON.stringify will not stringify functions:
const ex5 = {
    name: "John",
    age: function () {return 30;}
  };
  ex5.age = ex5.age.toString();
   let x6 = JSON.stringify(ex5);
   console.log(" JSON.stringify fun", x6);

// 🚀🚀 Object Accessors 

// *** Getters and setters allow you to define Object Accessors (Computed Properties).
// *** JavaScript can secure better data quality when using getters and setters.

const ex6 = {
    fName : "Sayam",
    lName: "Rahman",
    get fullName(){
        return this.fName + " " + this.lName;
    } 
}
console.log("using getter ---> ", ex6.fullName);

const ex7 = {
    fName : "Sayam",
    lName: "Rahman",
    get fullName(){
        return this.fName + " " + this.lName;
    } ,
    language: "",
    set lang(lang){
        return this.language = lang;
    }

}
ex7.lang = "bangla" 
console.log("using setter ---> ",ex7.language);
console.dir(ex6);
console.dir(ex7);

// 🚀🚀 Object Constructors 

function Family(fname, lname , age ){
    this.fName = fname;
    this.lName=lname;
    this.fAge=age
    this.fullName= function(){
       return this.fName + " " + this.lName;
    }
}
const myFather = new Family("sadiqur","rahman",67)
myFather.lName = "Rahman Tara"

console.log(myFather.fullName());

// JavaScript has built-in constructors for native objects:
// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object
// The Math() object is not in the list. Math is a global object. The new keyword can't be used on Math.

// 🚀🚀 Object Prototypes
// *** All JavaScript objects inherit properties and methods from a prototype.

function Familys(fname, lname , age ){
    this.fName = fname;
    this.lName=lname;
    this.fAge=age
}
const father = new Familys("sadiqur","rahman",67);
const mother = new Familys("rowshon","ara",55);
father.lName="rahman tara"
// How to add a new property to an object constructor
Familys.prototype.language = "en";
// How to add a new property to an object constructor
Familys.prototype.fullName = function(){
    return this.fName + " " + this.lName;
}
console.dir( father);
// 🚀🚀 Object Iterables
// *** terable objects are objects that can be iterated over with for..of.
// Technically, iterables must implement the Symbol.iterator method.
// The iterator protocol defines how to produce a sequence of values from an object.
// An object becomes an iterator when it implements a next() method.
// The next() method must return an object with two properties:
// value (the next value)
// done (true or false)

const ex8 = [1,2,3,4,5]
const nn = ex8[Symbol.iterator]();
console.log(nn.next());
console.log(nn.next());
console.log(nn.next());
console.log(nn.next());
console.log(nn.next());
console.log(nn.next());
// 🚀🚀 Object Sets

// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// A Set can hold any value of any data type.

// You can create a JavaScript Set by:
// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables


const letters = new Set(["a","b","c"]);
console.log(letters)
console.dir(letters)


let text1 = ""
for (const x of letters.values()) {
  text += x + "<br>";
}
console.log(text1);


// 🚀🚀 Object Maps

// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.