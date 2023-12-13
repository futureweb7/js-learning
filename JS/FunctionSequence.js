// Ex one ----
function display(some){
   console.log(some);
};

function sum(num1,num2){
  let add = num1 + num2;
  return add;
}


const result = sum(3,5);display(result);

// Ex two ---
function display2(some){
    console.log(some);
};
 
function sum2(num1,num2){
   let add2 = num1 + num2;
   display2(add2);
}
 
 const result2 = sum(3,5);

//  display(result2);

// Now here's come collback function

// function show(some){
//     console.log("some-->", some);
// }

function addSome(num1, num2, callBack){
    let  add = num1 + num2;
    if(callBack) callBack(add);
    return add;

}
 addSome(2,3, function(result){
    console.log(result);
 })