window.onload = function(){
    document.querySelector('h1').textContent = 'Hi World';
};


window.addEventListener('load', ()=>console.log('Page Loaded'));

window.addEventListener('DOMContentLoaded',()=> console.log('DOM loaded'));

console.log('run it');//since it is not related to any dom element it will execute first

// window.addEventListener('resize',()=>{
//     document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
// })  

// window.addEventListener('scroll',()=>{
//     console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

//     if (window.scrollY > 170) {
//         document.body.style.backgroundColor = 'green';
//         document.body.style.color = 'black';
//     }
//     else{
//         document.body.style.backgroundColor = 'red';
//         document.body.style.color = 'black';
//     }
// })

window.addEventListener('focus',()=>{
    document.querySelectorAll('p').forEach(p=>{
        p.style.color = 'red';
    })
})

window.addEventListener('blur', ()=>{
    document.querySelectorAll('p').forEach(p=>{
        p.style.color = 'cadetblue';
    })
})