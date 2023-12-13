function add(){
    let counter = 0;
    return function(){
        counter+=1; // closure function
    }
}
const result = add();
console.dir(result);
result();
result();
result();
