const x = 100;
if(true){
    const y = 200;
    console.log(x + y);
}

// console.log(x+y);
for (let i = 0; i <=10; i++) {
console.log(i);    
}

// console.log(i);//i defined inside for cant be used since 'let' scope is inside for itself

if(true){
    const a =500;
    let b=600;
    var c = 700;
}
console.log(c);//VAR variable can be accessed even though it is not a global variable, It shouldn't happen.So, we shouldn't use Var 
// console.log(a);
// console.log(b);  //These cant be accessed outside their scope.

function run(){
    var d= 100;
    console.log(d);
}

run();
console.log(d);// We cant access a var variable that's inside of function outside a function scope.