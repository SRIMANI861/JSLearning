const form = document.getElementById("form")

const formFields = form.querySelectorAll('input,select,textarea,button');

const closebtn = document.getElementById('cancel');

const First = document.getElementById("fname")

const Last = document.getElementById("lname")

const Mail = document.getElementById("email")

const Contact = document.getElementById("phone")

const Country= document.getElementById("country")

const Zipcode = document.getElementById("zipcode")

const Terms = document.getElementById("terms")

const blur = document.getElementById("blur")

const elementsOutsidePopup = document.querySelectorAll('body :not(.popup) *');

const popup = document.getElementById("popup")

const dropdown = document.getElementsByClassName("dropdown");

const dropdownContent = document.getElementsByClassName("dropdown-content");

Terms.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        Terms.checked = !Terms.checked; // Toggle the checkbox state
    }
});

closebtn.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        closePopup();
        console.log(closePopup);
    }
})
    
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
    console.log(validate());
});
function validate(){
    let fnameValue = First.value.trim();
    let lnameValue = Last.value.trim();
    let emailValue = Mail.value.trim();
    let contactValue = Contact.value.trim();
    let zipValue = Zipcode.value.trim();
    let termsValue = Terms.checked;
    var isFnameValid = false;
    var isLnameValid = false;
    var isEmailValid = false;
    var isContactValid = false;
    var isZipValid = false;
    var isTermsValid = false;

    //fname
    if(fnameValue.length===0 ||fnameValue===''){
        setError(First, 'First name cannot be empty');
        
    }
    else if(!/^[a-zA-Z]+$/.test(fnameValue)) {
        setError(First, 'First name should contain only alphabets');
    } 
    else if(fnameValue.length>10){
        setError(First,'First name should not exceed 10 characters');
        
    }
    else{
        setSuccess(First);
        isFnameValid = true;
    }

    //lname
    if(lnameValue.length===0 || lnameValue===' '){
        setError(Last, 'Last name cannot be empty');
        
    }
    else if(!/^[a-zA-Z]+$/.test(lnameValue)) {
        setError(Last, 'Last name should contain only alphabets');
    } 
    else if(lnameValue.length>10){
        setError(Last,'Last name should not exceed 10 characters');
        
    }
    else{
        setSuccess(Last);
        isLnameValid = true;
    }

    //email
    if(emailValue===''){
        setError(Mail,'Email cannot be empty');
        
    }
    else if(!emailCheck(emailValue)){
        setError(Mail,'Enter valid email id');
        
    }
    else{
        setSuccess(Mail);
        isEmailValid = true;
    }

    //phone
    if(contactValue===''){
        setError(Contact,'Mobile number cannot be empty');
        
    }
    else if(!/^\d+$/.test(contactValue)) {
        setError(Contact, 'Enter valid mobile number (numeric only)');
    }
    else if(contactValue.length<10 || contactValue.length>10){
        setError(Contact,'contact number should be 10 digits');
        
    }
    else{
        setSuccess(Contact);
        isContactValid = true;
    }

    //Zip
    if(zipValue===''){
        setError(Zipcode,'Zip code cannot be empty');
        
    }
    else if(!/^\d+$/.test(zipValue)) {
        setError(Zipcode, 'Enter valid zipcode (numeric only)');
    }
    else if(zipValue.length<5 || zipValue.length>5){
        setError(Zipcode,'zip code should be 5 digits');
        
    }
    else{
        setSuccess(Zipcode);
        isZipValid = true
    }
    //TC
    if(!termsValue){
        setError(Terms,'select the checkbox');
        
    }
    else{
        setSuccess(Terms);
        isTermsValid = true;
    }

    function setError(input,message){
        let parent = input.parentElement;//.field
        let small = parent.querySelector('small');
        small.innerText = message;
        parent.classList.add('error');
        parent.classList.remove('success');
    }

    function setSuccess(input){
        let parent = input.parentElement;
        parent.classList.add('success');
        parent.classList.remove('error');
    }

    function emailCheck(input){
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(input);
        console.log(isValidEmail);
        return isValidEmail;
    }
   

    if (isFnameValid && isLnameValid && isContactValid && isEmailValid && isZipValid && isTermsValid) {
        openPopup();
    }
    
}

// window.onclick = (event)=>{
//     if (!event.target.matches('.btn') && !event.target.matches('.material-icons')) {
//         if(popup.classList.contains("open-popup")){
//             popup.classList.remove("open-popup")
//         }
//     }
// }
let isPopupOpen = false;

function setTabindex(enable){
    elementsOutsidePopup.forEach(element=>{
        element.tabIndex = isPopupOpen?-1:0;
    });
}

function openPopup(){
    isPopupOpen = true;
    popup.classList.add("open-popup");    
    blur.classList.toggle('active');
    popup.classList.toggle('active');
    setTabindex(true);
}


function closePopup(){
    isPopupOpen = false;
            if (popup.classList.contains("open-popup")) {
                popup.classList.remove("open-popup");
                setTabindex(false);
            }
        console.log("clicked x icon");
}


function setFocusToCloseButton(){
    closebtn.focus();
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the Your Career dropdown menu and its content
    var yourCareerMenu = document.querySelector('.dropdown');
    var dropdownContent = document.querySelector('.dropdown-content');
    var formElements = document.querySelectorAll('.form input, .form select, .form textarea, .form button');

    // Add focus and blur event listeners to toggle visibility
    yourCareerMenu.addEventListener('focus', function () {
        dropdownContent.style.display = 'block';
    });

    dropdownContent.addEventListener('blur',function(){
        dropdownContent.style.display = 'none';
    })

    // Add mouse enter and leave event listeners to keep dropdown visible when mouse is over it
    yourCareerMenu.addEventListener('mouseenter', function () {
        dropdownContent.style.display = 'block';
    });

    dropdownContent.addEventListener('mouseleave', function () {
        dropdownContent.style.display = 'none';
    });

    formElements.forEach(function (element) {
        element.addEventListener('focus', function () {
            // Close the dropdown
            dropdownContent.style.display = 'none';
        });
    });

    // Add click event listener to document to close dropdown on outside click
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown')) {
            dropdownContent.style.display='none';
        }
    });
});



document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closePopup();
  }
});


