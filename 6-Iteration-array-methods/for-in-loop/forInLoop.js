const colorObj = {
    color1:'red',
    color2:'blue',
    color3:'Orange',
    color4:'Purple',
    color5:'Voilet',

};

for (const key in colorObj) {
    console.log(colorObj[key]);
}

const colorArr = ['red','blue','purple','voilet'];
for (const color in colorArr) {
    console.log(color);
    console.log(colorArr[color]);
}