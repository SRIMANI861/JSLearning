const image = document.querySelector('img');

const onClick = () => console.log('click event');
// const onDoubleClick = () => console.log('double click event');

const onDoubleClick = ()=>{
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'green';
    }
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    console.log('double click event');
}

const onRightClick = ()=> console.log('right click event');

const onMouseDown = ()=> console.log('mouse down event'); //when we click and hold or just click mouse down is triggered

const onMouseUp = ()=> console.log('mouse up event');//when we leave the mouse, mouse up is triggered

const onMouseWheel = ()=> console.log('mouse wheel event');//when we point the cursor at image and try to scroll this is triggered.

const onMouseOver = ()=> console.log('mouse over event');//When we hover or take our cursor to image, this event is triggered

const onMouseOut = ()=> console.log('mouse out event');//when we move the cursor from the image, this event is triggered

const onMouseEnter = ()=> console.log('mouse enter event');

const onDragStart = ()=> console.log('drag start event'); //when we try to drag the picture, it will trigger drag event

const onDrag = ()=> console.log('drag event');

const onDragEnd = ()=> console.log('drag end event');
//Event Listeners
image.addEventListener('click', onClick);
image.addEventListener('dblclick',onDoubleClick);
image.addEventListener('contextmenu',onRightClick);
image.addEventListener('mousedown',onMouseDown);
image.addEventListener('mouseup',onMouseUp);
image.addEventListener('wheel',onMouseWheel);
image.addEventListener('mouseover',onMouseOver);
image.addEventListener('mouseout',onMouseOut);
image.addEventListener('mouseenter',onMouseEnter);
image.addEventListener('dragstart',onDragStart);
image.addEventListener('drag',onDrag);
image.addEventListener('dragend',onDragEnd);

