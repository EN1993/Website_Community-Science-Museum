const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector(".errorFname");

const lastName = document.querySelector("#lname");
const lastNameError = document.querySelector(".errorLname");

const email = document.querySelector("#email");
const emailError = document.querySelector(".errorEmail");

const message = document.querySelector("#message");
const messageError = document.querySelector(".errorMessage");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value,2)=== true) {
    firstNameError.style.display ="none";
  } else{
    firstNameError.style.display ="block";
  }

  if (checkLength(lastName.value,2)=== true) {
    lastNameError.style.display ="none";
  } else{
    lastNameError.style.display ="block";
  }  

  if (validateEmail(email.value)=== true) {
    emailError.style.display ="none";
  } else {
    emailError.style.display ="block";
  }

  if (checkLength( message.value,10)=== true) {
    messageError.style.display ="none";
  } else{
    messageError.style.display ="block";
  }  

}

form.addEventListener("submit", validateForm);
function checkLength(value, len) {
  if (value.trim().length >= len) {
    return true;
  }else{
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}