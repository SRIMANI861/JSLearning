// const user = 'Shred';// It is in the global scope, since we have already declared user in otherScript.js , we can't use here.

//WITHOUT PARAMETERS
(function(){
    const user = 'Shred';//It is in the local scope, so we don't get any error.
    console.log(user);
    const hello = ()=> console.log('Hello from IIFE');
    hello();
})(); //This another '()' is for calling the function() by using only ();

//WITH SINGLE PARAMETER
(function(name){
    console.log('Hello '+ name);

})('Srimani');

//WITH MULTIPLE PARAMETERS
(function(name,age){
    console.log('Hello my name is '+name+' my age is '+age);
})('Srimani',21);

//We can create a function with a name
(function hello(){
    console.log('hello');
    //If we call the hello() here, it will be call it infinite loop.
})();
