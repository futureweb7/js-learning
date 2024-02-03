document.querySelector('#demo1').innerHTML="Number of anchors are: " +document.anchors.length

// document.querySelector("#demo2").innerHTML= document.body.innerHTML

document.getElementById("demo3").innerHTML =
"Number of images: " + document.images.length;


// form vaidate

function validate(){
    const  form = document.forms['nForm'];
    const value = form['fname'].value;
    if(value === ''){
       alert("no value ...");
       return false;
    }
    console.dir(form);
}

function fsubmit(){
    const x = document.getElementById('num').value;
    if(isNaN(x) || x < 0 || x > 10){
        alert("not validate");
    }else{
        alert("it's ok ok ");
    }
    
}

function clickListen(text){
    console.log(text);
}

function click2Listen(){
    console.log(" this is click2 event");
}
function mouseListen(){
    console.log(" this is mouseListen event");
}
function mouseoutListen(){
    console.log(" this is mouseoutListen event");
}
const e = document.querySelector("#listen");
e.addEventListener("click",function(){
    clickListen("passing parameter ... ");
}) 
e.addEventListener("click",click2Listen) 
e.addEventListener("mouseover",mouseListen) 
e.addEventListener("mouseout",mouseoutListen) 


// next 
function con(){
    console.log("container div");
}
function btn(){
    console.log("button div");
}
const button = document.querySelector("#btn");
const container = document.querySelector("#container");

button.addEventListener("click",btn,true)
container.addEventListener("click",con,true)

//  removeEventListener() 
function renNum(){
    document.querySelector("#rn").innerHTML = Math.random();
}
const area = document.querySelector("#rdiv");
area.addEventListener("mouseover", renNum);

function removeEL(){
    document.querySelector("#rdiv").removeEventListener("mouseover",renNum);
}