const numbers = [1,2,3,90,5];

//ARROW FUNCTION
minMax = () =>{
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    console.log(min+"\n"+max);
}
minMax(numbers);


//NORMAL FUNCTION
function arrMinMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return{
        min,
        max,
    };
}
console.log(arrMinMax([2,12,4,5,76,90]));

