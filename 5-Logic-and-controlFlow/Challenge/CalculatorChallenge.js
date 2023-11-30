function calculator(num1,num2,operator){
    let result;
    switch(operator){
        case '+':
            // console.log(num1 + num2);
            result = num1 + num2;
            break
        case '-':
            // console.log(num1 - num2);
            result = num1 - num2;
            break
        case '*':
            // console.log(num1 * num2);
            result = num1 * num2;
            break
        case '/':
            // console.log(num1 / num2);
            result = num1 / num2;
            break
        case '%':
            // console.log(num1 % num2);
            result = num1 % num2;
            break
        default:
            console.error("This is not an operator");

    }

    console.log(result);
    return result;

}
calculator(5,2,'-');