const d = new Date(2023,8,29,23,45,18);
const hours = d.getHours();
console.log(hours);

if(hours >= 12 && hours<=16){
    console.log("Good Afternoon");

    if(hours === 13){
        console.log("It\'s lunch time");
    }
    else if(hours<=18){
        console.log("It\'s Work Hours");
    }
}
else if(hours>=6 && hours<=8){
    console.log("Wake Up");

    if(hours===9){
        console.log("Leave to Office");
    }
}
else if(hours>=18 && hours<=20){
    console.log("Leave to Home");
}
else if(hours>=22){
    console.log("Sleep zzzzzzzzz");
}
else{
    console.log("Travel");
}