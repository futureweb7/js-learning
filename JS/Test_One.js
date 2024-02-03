// 1. Write a function that can print any random number between any two given numbers (including them).
console.log("🚀 ~ file: Test_One.js:3 ~ random(1-6)", 
Math.floor(Math.random()*7)
)

function gNumber(min,max){
 
  return Math.floor(Math.random()*(max-min+1)) + min;
}
console.log("🚀 ~ gNumber ~ gNumber:", gNumber(1,6))
// 2. How can you order names of students in your class sequentially?
const student = ["alamin", "kuddus", "samim", "babla", "darus", "camily"];
console.log("🚀 ~ file: Test_One.js:11 ~ student:", student.sort())
// 3.How can you order roll numbers of students in your class sequentially
const roll = [9,1,4,6,8,2,5,3,10,7];
const gRollNumber = roll.sort(
    function(a, b){
      return a-b;
    }
)
console.log("🚀 ~ file: Test_One.js:14 ~ roll:", gRollNumber);
// 4. Write a function that can tell us whether an year is a leap year or not.
const isLeapYear = (year) => {
  if ((year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)) {
    return `${year} is a Leap Year`;
  } else {
    return `${year} is not a Leap Year`;
  }
};
console.log("🚀 ~ file: Test_One.js:28 ~ isLeapyear ~ isLeapyear:", isLeapYear(2020))

// 5. How would you determine the number of vowels in a sentence?
      // *** WAY__ONE
      const test_vowel = "Lorem ipsum dolor sit amet, consectetur dolor";
      function countVowel(test_string){
        const count = test_string.match(/[aeiou]/gi).length;
        return count;
      }
       console.log("🚀 ~ file: Test_One.js:33 ~ vowel_length:", countVowel(test_vowel));
      // *** WAY__two
      function countVowel2(test2_string){
         const testLength = test2_string.length;
         count = 0;
         test_vowel = "aeiouAEIOU";
         for (let x = 0; x < testLength; x++) {
           if(test_vowel.indexOf(test2_string[x])){
             count+=1;
           }
         }
         return count;
      }
      console.log("🚀 ~ file: Test_One.js:33 ~ vowel_length:", countVowel(test_vowel));


// 6. How would you extract the duplicate numbers in an array?
        // *** duplicate number array
        let myArray = [1, 2, 3, 4, 5, 2, 7, 8, 8, 9];
        function dublicateNumber(arry){
          return arry.filter((value, index, arr) => arr.indexOf(value) !== index);
        }
        console.log("🚀 ~ file: Test_One.js:56 ~ myArray:", dublicateNumber(myArray));
      
         // ***  array without duplicate number;
         function wthoutDublicate(arry){
          return Array.from(new Set(arry));
         }
         console.log("🚀 ~ file: Test_One.js:56 ~ myArray:", wthoutDublicate(myArray));  

// 7. How would you extract the unique numbers in an array?
let Arr = [ "Manish", "Chandan", "Piyush", "Sunil", "Pankaj", "Piyush", "Pankaj" ,"Tiny", "Chandan", "Manish"];
function uniqueNum(arry){
  return Array.from(new Set(arry));
}
console.log("🚀 ~ file: Test_One.js:69 ~ uniqueNum:", uniqueNum(Arr));

