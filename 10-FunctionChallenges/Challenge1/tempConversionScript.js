//ARROW FUNCTION
const getCelsius = (F)=>(F-32)*5/9;
console.log(`The temperature is ${Math.floor(getCelsius(45))} \xB0C`);

//NORMAL FUNCTION
function getCelsius(F) {
      const celsius = (F-32)*5/9;
      return celsius;
}
console.log(`The temperature is ${Math.round(getCelsius(45))} \xB0C`);
