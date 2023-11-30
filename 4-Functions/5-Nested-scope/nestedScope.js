function first(){
    const x = 100;

    function second(){
        const y = 200;
        console.log(x+y); //here we can use the variable from the parent class
    }
    second();
    // console.log(y); //This accessing the child class variable is not possible.
}
first();

if(true){
    const x = 100;
    if(x === 100){
    const y = 200;
    console.log(x+y);
    }
    console.log(x); //Only x can be accessed, since y is inside the inner if, it cant be accessed
    //console.log(y);
}
// console.log(x);
// console.log(y);