// Select all input elements for varification
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.registration;
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");
function formValidation{
    if (userName.value.length < 2 || userName. value. length > 20){
        alert("Name length should be more 2 leeters and less 21 characters");
        userName. focus();
        return false;
    } return true;
    
}