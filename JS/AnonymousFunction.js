
function sum(a,b){
    return a + b ;
}
let sum2 = function(a,b){
    return a + b;
}

console.log("🚀 ~ file: ~ sum:", sum(1,2))
console.log("🚀 ~ file: ~ sum2:", sum2(1,2))


setTimeout(function(){
    console.log("Hello Worl");
},3000);