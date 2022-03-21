document.addEventListener("DOMContentLoaded", () => {

    //Header JS
    let menu1 = document.getElementById("responsiveMenu1")
    let menu2 = document.getElementById("responsiveMenu2")
    let menu3 = document.getElementById("responsiveMenu3")
    let menu4 = document.getElementById("responsiveMenu4")

    document.getElementById("navigationBar3").addEventListener("click", () => {
        responsiveToggle();
    })

    let responsiveToggle = () => {
        menu1.classList.toggle("hideResponsive");
        menu2.classList.toggle("hideResponsive");
        menu3.classList.toggle("hideResponsive");
        menu4.classList.toggle("hideResponsive");
        menu4.classList.toggle("menu4");
    }
    //Header JS

    let checkErrors = 3;

    document.getElementById("submitForm").addEventListener("click", e => {
        e.preventDefault();
        validation();
    })

    let validation = () => {
        let name = document.getElementById('formInputName');
        let email = document.getElementById('formInputEmail');
        let message = document.getElementById('formInputMessage');
    
        let errorName = document.getElementById('formNameErrorMsg');
        let errorEmail = document.getElementById('formEmailErrorMsg');
        let errorMessage = document.getElementById('formMessageErrorMsg');
    
        checkErrors = 3;
        validateName(name, errorName);
        validateEmail(email, errorEmail);
        validateMessage(message, errorMessage);
    
        if(checkErrors === 0){
            alert('Message successfully sent')
            document.getElementById("contactUsInnerForm").reset();
        }
    }
    
    let validateName = (name, errorName) => {
        if(name.value === ""){
            errorName.innerHTML = "*Name required";
        }else{
            errorName.innerHTML = "";
            checkErrors--;
        }
    }
    
    let validateEmail = (email, errorEmail) => {
        if(email.value === ""){
            errorEmail.innerHTML = "*Email required"
        }else if((!email.value.includes("."))||(!email.value.includes("@"))){
            errorEmail.innerHTML = "*Please check your email correctly"
        }else if(email.value.startsWith(".") || email.value.startsWith("@")){
            errorEmail.innerHTML = "*Please check your email correctly"
        }else if(email.value.indexOf(".") < email.value.indexOf("@")){
            errorEmail.innerHTML = "*Please check your email correctly"
        }else if(email.value.indexOf(".") === (email.value.indexOf("@")+1)){
            errorEmail.innerHTML = "*Please check your email correctly"
        }else if(email.value.endsWith("@") || email.value.endsWith(".")){
            errorEmail.innerHTML = "*Please check your email correctly"
        }else{
            errorEmail.innerHTML = ""
            checkErrors--;
        }
    }
    
    let validateMessage = (message, errorMessage) => {
        
        if(message.value === ""){
            errorMessage.innerHTML = "*Message required";
        }else{
            errorMessage.innerHTML = ""
            checkErrors--;
        }
    }

})