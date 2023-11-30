const date = new Date(2023,28,11,17,24,0);
const time = date.getHours();
console.log(time);

if (time <= 12) {
    console.log("Good Morning Folks");
}
else if(time < 16){
    console.log("Good Afternoon");
}
else if(time >= 16 && time<=18){
    console.log("Good Evening");
}
else{
    console.log("Good Night");
}