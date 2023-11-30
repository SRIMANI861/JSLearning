console.log(addDollarSign(400)); //Only declarations can be accessed before the function declaration
//function Declaration
function addDollarSign(value){
    return '$' + value;
}

// console.log(addPlusSign(500));//This gives you error that function is not initialized but trying to access it

//function Expression
const addPlusSign = function(value){
    return '+' + value;
}
console.log(addPlusSign(900));
