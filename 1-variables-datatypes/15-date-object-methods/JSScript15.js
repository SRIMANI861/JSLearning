let x;

let d=new Date();

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month:'long'}).format(d);
//month: short or month:long or month:narrow or month:2-digit or month:numeric
console.log(x);

//OR

x = d.toLocaleString('default', {month: 'short'});
console.log(x);

x = d.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/kolkata',//Indian time zone

});
console.log(x);


x=d.toString();
console.log(x);

x=d.getTime();
console.log(x);

x=d.valueOf();
console.log(x);

x=d.getFullYear();
console.log(x);

x=d.getMonth();
console.log(x);

x=d.getMonth()+1;
console.log(x);

x=d.getDate();

x=d.getDay();
console.log(x);

x=d.getHours();

x=d.getMinutes();

x=d.getSeconds();

x=d.getMilliseconds();

x=d.getUTCDate();

x=d.getUTCFullYear();

x=d.getUTCMonth();

x=d.getUTCMonth()
console.log(x);

x= `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log(x);

