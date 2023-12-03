// how to find a  "WORD" how many times use in a paragraph?
let test = "Lorem ipsum dolor sit amet,lorem consectetur adipiscing elit. Suspendisse est ex, vestibulum sit amet erat et, malesuada dictum sem. Nulla malesuada justo vitae quam aliquam, ac imperdiet urna cursus.Dolor Quisque urna nisl, lacinia sed sem non, malesuada convallis eros.Lorem Proin rhoncus sem eget lacus ultrices, et hendrerit lorem commodo. Maecenas rhoncus lacinia mauris, Dolor et porttitor orci eleifend sit amet. Suspendisse et porttitor nunc, at aliquam urna. In enim elit, scelerisque ut dolor eu, sodales varius ipsum. Vivamus sed faucibus quam. Lorem"

function howManyTime(text){
 return text.match(/lorem/gi)
}
console.log("🚀 ~ file: Test_Two.js:2 ~ test:", howManyTime(test));

//How to get the longest word from the array? And index out?
const lWord = ["Strengths", "Euouae", "Unimaginatively", "Honorificabilitudinitatibus", "Sesquipedalianism", "Volcano"];
function findLongWord(words){
  let longestWord = "";
  
    for(word of words ) {
      if(word.length > longestWord.length){
        longestWord = word ;
      }
    }
  return [longestWord, words.indexOf(longestWord)];
}


console.log("🚀 ~ file: Test_Two.js:11 ~ lWord:", findLongWord(lWord));

// What numbers from 1-100 are divisible by 3, 5 and both 3 and 5?
function devideBy3(){
  for (let x = 1; x <= 100; x++) {
    if(x % 15 === 0){
     console.log(`${x} both`);
    } else if(x % 3 === 0){
      console.log(`${x} by 3`);
    }else if(x % 5 === 0){
      console.log(`${x} by 5`);
    }else{
      console.log(`${x}`);
    }
  }
}
devideBy3(100)
// console.log("🚀 ~ file: Test_Two.js:11 ~ devideBy3:", devideBy3(100));
let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
// const removeFalse = arr.filter(function(el){
//   if(el){
//     return true;
//   }else{
//     return false;
//   }
// })
const removeFalse = arr.filter(Boolean);
console.log("🚀 ~ file: Test_Two.js:49 ~ removeFalse ~ removeFalse:", removeFalse)

