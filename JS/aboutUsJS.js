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
})