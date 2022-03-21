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

    const signIn = document.getElementById("signInForm");
    const signUp = document.getElementById("signUpForm");
    
    document.getElementById("toSignUp").addEventListener("click", e => {
        e.preventDefault();
        signIn.classList.add("hiddenForm");
        signUp.classList.remove("hiddenForm");
        document.getElementById("signInForm").reset();
        resetErrorSignIn();
    })

    document.getElementById("toSignIn").addEventListener("click", e => {
        e.preventDefault();
        signIn.classList.remove("hiddenForm");
        signUp.classList.add("hiddenForm");
        document.getElementById("signUpForm").reset();
        resetErrorSignUp();
    })
    
    let checkSignInErrors = 2;
    let checkSignUpErrors = 4;
    let atSignIn = false;
    let atSignUp = false;

    document.getElementById("continueSignIn").addEventListener("click", e => {
        atSignIn = true;
        e.preventDefault();
        validationSignIn();
        atSignIn = false;
    })

    document.getElementById("continueSignUp").addEventListener("click", e => {
        atSignUp = true;
        e.preventDefault();
        validationSignUp();
        atSignUp = false;
    })
    
    let validationSignIn = () => {
        let emailSignIn = document.getElementById('signInEmail');
        let passwordSignIn = document.getElementById('signInPassword');
    
        let errorEmailSignIn = document.getElementById('signInEmailErrorMsg');
        let errorPasswordSignIn = document.getElementById('signInPasswordErrorMsg');
    
        checkSignInErrors = 2;
        validateEmail(emailSignIn, errorEmailSignIn);
        validatePassword(passwordSignIn, errorPasswordSignIn);
    
        if(checkSignInErrors === 0){
            alert('Successfully signed in')
            document.getElementById("signInForm").reset();
        }
    }

    let validationSignUp = () => {
        let emailSignUp = document.getElementById('signUpEmail');
        let passwordSignUp = document.getElementById('signUpPassword');
        let confirmPasswordSignUp = document.getElementById('signUpConfirmPassword');
        let agreeSignUp = document.getElementById('signUpAgree');
    
        let errorEmailSignUp = document.getElementById('signUpEmailErrorMsg');
        let errorPasswordSignUp = document.getElementById('signUpPasswordErrorMsg');
        let errorConfirmPasswordSignUp = document.getElementById('signUpConfirmPasswordErrorMsg');
        let errorAgreeSignUp = document.getElementById('signUpAgreeErrorMsg');
    
        checkSignUpErrors = 4;
        validateEmail(emailSignUp, errorEmailSignUp);
        validatePassword(passwordSignUp, errorPasswordSignUp);
        validateConfirmPassword(passwordSignUp, confirmPasswordSignUp, errorConfirmPasswordSignUp);
        validateAgree(agreeSignUp, errorAgreeSignUp);
    
        if(checkSignUpErrors === 0){
            alert('Successfully signed up, welcome!')
            document.getElementById("signUpForm").reset();
        }

        // console.log(passwordSignUp.value)
        // console.log(confirmPasswordSignUp.value)
        // console.log(agreeSignUp.checked)
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
            if(atSignIn === true){
                checkSignInErrors--;
            }else if(atSignUp === true){
                checkSignUpErrors--;
            }
        }
    }
    
    let validatePassword = (password, errorPassword) => {
        if(password.value === ""){
            errorPassword.innerHTML = "*Password required";
        }else if(password.value.length < 8){
            errorPassword.innerHTML = "*Password's length must be at least 8 characters long";
        }else if(password.value.search("[A-Z]") === -1 && password.value.search("[a-z]") === -1){
            errorPassword.innerHTML = "*Password must contain at least 1 character";
        }else if(password.value.search("[0-9]") === -1){
            errorPassword.innerHTML = "*Password must contain at least 1 number";
        }else{
            errorPassword.innerHTML = ""
            if(atSignIn === true){
                checkSignInErrors--;
            }else if(atSignUp === true){
                checkSignUpErrors--;
            }
        }
    }

    let validateConfirmPassword = (password, confirmPassword, errorConfirmPassword) => {
        if(password.value !== confirmPassword.value){
            errorConfirmPassword.innerHTML = "*Password is not the same";
        }else{
            errorConfirmPassword.innerHTML = ""
            if(atSignIn === true){
                checkSignInErrors--;
            }else if(atSignUp === true){
                checkSignUpErrors--;
            }
        }
    }

    let validateAgree = (agree, errorAgree) => {
        if(agree.checked === false){
            errorAgree.innerHTML = "*User must agree to our terms and conditions";
        }else{
            errorAgree.innerHTML = ""
            if(atSignIn === true){
                checkSignInErrors--;
            }else if(atSignUp === true){
                checkSignUpErrors--;
            }
        }
    }

    let resetErrorSignIn = () => {
        let errorEmailSignIn = document.getElementById('signInEmailErrorMsg');
        let errorPasswordSignIn = document.getElementById('signInPasswordErrorMsg');

        errorEmailSignIn.innerHTML = "";
        errorPasswordSignIn.innerHTML = "";
    }

    let resetErrorSignUp = () => {
        let errorEmailSignUp = document.getElementById('signUpEmailErrorMsg');
        let errorPasswordSignUp = document.getElementById('signUpPasswordErrorMsg');
        let errorConfirmPasswordSignUp = document.getElementById('signUpConfirmPasswordErrorMsg');
        let errorAgreeSignUp = document.getElementById('signUpAgreeErrorMsg');

        errorEmailSignUp.innerHTML = "";
        errorPasswordSignUp.innerHTML = "";
        errorConfirmPasswordSignUp.innerHTML = "";
        errorAgreeSignUp.innerHTML = "";
    }

})