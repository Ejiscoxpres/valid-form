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
    } if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert("please enter a valid email!");
        email.focus;
        return false;
    }if(password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,25}$/)){
        alert("password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character, and must be between 10 and 25 characters long.");
        password.focus();
        return false;
    }if(!phoneNumber.value.match(/^[1-9][0-9]{7,10}$/)){
        alert("phone number must be 7 and 11 characters long");
        phoneNumber.focus();
        return false;
    }if(gender.gender.value === ""){
        alert("please select your gender!");
        return false;
    }if(language.value === ""){
        alert("please select your language");
        return false;
    }
    
    
}