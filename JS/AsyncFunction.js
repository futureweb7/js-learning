// 🚀🚀🚀 JS Async


//  *** when callbackfunction  nested   called hell ***

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





//ex last....
function examOne(callBack){
    console.log("program start ...");
    setTimeout(function(){
       callBack();
       console.log("end execution ...");
    },4000);
}
function callBack(){
    console.log("execute program ...");
}

console.log(examOne(callBack));

