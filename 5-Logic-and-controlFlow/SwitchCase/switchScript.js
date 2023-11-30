const d = new Date(2019,2,28,12,0,0); //Feb 28 in 2019 is Thursday so it prints 4.
const day = d.getUTCDay();
console.log(day);



switch(day){
    case 0: console.log('It\'s Sunday'); 
    break;

    case 1: console.log('It\'s Monday'); 
    break;

    case 2: console.log('It\'s Tuesday'); 
    break;

    case 3: console.log('It\'s Thursday'); 
    break;

    case 4: console.log('It\'s Friday'); 
    break;

    case 5: console.log('It\'s Saturday'); 
    break;

}