// first Example ...
function greeting(name,anotherFunction){
 console.log(`Hello ${name} How you are`);
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

// third ex
const payment = true;
const mark = 90;
function enroll(callBack){
    console.log("enrollment pending ...");
    setTimeout(function(){
       if(payment){
          callBack();
       }else{
          console.log("payment failed !!! ");
       }
    },2000);
}

function preparetion(callBack){
    console.log(" payment success \n wait for progress ...");
    setTimeout(function(){
       if(mark >= 80){
             callBack();
       }else{
         console.log("can't get certificate bcz of low mark !!!");
       }
    },3000);
}

function getCertificate(){
    console.log("chicking your status ...");
    setTimeout(function(){
        console.log("Hurrah you got certificate ...");
    },1000);
}

enroll(function(){
    preparetion(getCertificate);
})
