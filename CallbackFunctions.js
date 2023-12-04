// first Example ...
function greeting(name,anotherFunction){
 console.log(`Hello ${name} you are`);
 anotherFunction();
}

function welcome(){
   console.log("welcome");
}

greeting("Robin",welcome);

// second Example ... 
function asynFunction(callBackFun){
    console.log("oparetion start !!");
    setTimeout(function(){
        callBackFun();
        console.log("end oparetion !!!");
    },4000)
}
 
function callBackFun(){
    console.log("callback success !!");
}

asynFunction(callBackFun);