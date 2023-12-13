// 🚀🚀   Function Definitions

   // What is function declaration and function expression?

   // ------->  function declaration
   //  function geeksforGeeks(paramA, paramB) { // Set of statements }

   // ------->  function expression
   // var geeksforGeeks= function(paramA, paramB) { // Set of statements }
   // The function above is actually an anonymous function (a function without a name).

   // Functions defined using an declaration is  hoisted.
   console.log("is hoisted -->",ex1(5,2));

   function ex1(a,b){
      return a*b;
   }

   // Functions defined using an expression are not hoisted.
   // console.log("not hoisted-->", ex2(11,2));
   const ex2 = function(a,b){
      return a*b
   }
   console.log("not hoisted -->", ex2(11,2));

   // Self-Invoking Functions

   (function(){
      console.log("it's form WEB7");
   })();
   // The function above is actually an anonymous self-invoking function (function without name).

   // Functions Can Be Used as Values
   // JavaScript functions can be used in expressions:
   function myFunction(a, b) {
      return a * b;
   }
  
  let x = myFunction(4, 3) * 2; // expressions

  // The arguments.length property returns the number of arguments received when the function was invoked:

  function myFunction(a, b) {
    return arguments.length;
  }
  // Arrow functions do not have their own ==> this.
  // normal functions  have their own ==> this.
  // Arrow functions are not hoisted. They must be defined before they are used.
  // Using ==>  const is safer than using ==> var, because a function expression is always constant value.


// 🚀🚀  Function Parameters

  // what is function parameters and arguments in javascript ??????
  // ---> Function parameters are the names listed in the function definition.
  // --->Function arguments are the real values passed to (and received by) the function.

   function add(a,b)// parameters <-------
   {
      return a+b;
   }
   console.log(add(1,2));// arguments <------



   
// 🚀🚀  Function call()

// It is common to use the term "call a function" instead of "invoke a function".
// BUT ===>  "call a function" is Different.

function  sumFum(a,b){
  return a + b ;
}
// now ===> 
sumFum(); //  is  invoke a function 
// not call a function

// **** All Functions are Methods. HOW???? ===> ans

// a normal function is 
function sleep(){
   console.log("i am sleeping");
}

// normally we call or invoke
sleep();
// but it also Method. how???
// window{
//    function sleep(){
//       console.log("i am sleeping");
//    }
// }
//window.spleep(); // it is in a object. 

// so we called All Functions are Methods.

// now call function --- 

const personEx = {
   fullName: function(){
      return this.fName + " " + this.lName  ;
   }
}

const person = {
   fullName: function(x,y){
      return this.fName + " " + this.lName + " " + x + " " + y ;
   }
}

const person1= {
   fName: "sayam",
   lName: "rahman"
}
const person2 = {
   fName: "hemel",
   lName: "hasan"
}
console.log(personEx.fullName.call(person1));
console.log(person.fullName.call(person1,"kkk","llll"));

// JavaScript apply() Method
console.log(personEx.fullName.apply(person1));
console.log(person.fullName.apply(person1,["neww","namee"]));




// extra
console.log("Big is ---->",Math.max(1,2,3,4,5,));
console.log("Big is ---->" ,Math.max.apply("",[1,2,3,4,5]));



// 🚀🚀 JavaScript Closures

function tempo(){
   let counter = 0;
   return function(){
      counter+=1;
   }
}
const addnew = tempo();
console.dir(addnew);
addnew();
addnew();
addnew();