//navbar

document.addEventListener('DOMContentLoaded', function() {
    var navElement = document.querySelector('nav');

    if (navElement) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navElement.classList.add('nav-transition');
            } else {
                navElement.classList.remove('nav-transition');
            }
        });
    } else {
        console.error("The 'nav' element was not found on the page.");
    }
});


// form validation

const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email')
const ph_no = document.querySelector('#ph')
const country = document.querySelector('#country')
const msg = document.querySelector('#msg')



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs()
})



function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const phVal = ph_no.value.trim();
    const countryVal = country.value.trim();
    const msgVal = msg.value.trim();

    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(phVal === ''){
        success= false;
        setError(ph_no,'Phone number is required')
    }
    else{
        setSuccess(ph_no)
    }

    if(countryVal === ''){
        success = false;
        setError(country,'Country is required')
    }
    else{
        setSuccess(country)
    }
    if(msgVal === ''){
        success = false;
        setError(msg,'Message is required')
    }
    else{
        setSuccess(msg)
    }

    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


function displayVal()
{
    console.log('displayed')
    console.log(`Username = ${username.value}`)
    console.log(`Email id = ${email.value}`)
    console.log(`Phone number = ${ph_no.value}`)
    console.log(`Country = ${country.value}`)
    console.log(`Message = ${msg.value}`)

}
