const payment = true;
const mark = 99;

function enrollment(){
    console.log("enrollment is progress ..");
    const promice = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(payment){
               resolve();
            }else{
                reject("paymeny not failed !!!");
    
            }
        },2000);
    });
    return promice;

}

function report(){
    console.log("report in progres ...");
    const promice = new Promise(function(resolve,reject){   
        setTimeout(function(){
            if (mark >= 80) {
                resolve();
            } else {
                reject("No cirtificate bcz of low mark !!!");
            }
        },3000);
    });

    return promice;

}

function getCertificate(){
    console.log("certificate in progress ...");
    const promice = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hurra !!!, you got certificate ");
        },1000);
    });
    return promice;
} 
    enrollment()
          .then(report)
          .then(getCertificate)
          .then(function(value){
             console.log(value);
          })
          .catch(function(err){
              console.log(err);
          });

// enrollment(function(){
//     report(getCertificate);
// })