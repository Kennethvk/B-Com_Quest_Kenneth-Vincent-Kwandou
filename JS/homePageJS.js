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

$(function(){
    let slide = $(".boxTestimonial")
    slide.hide()
    let curr = 0
    let min = 0
    let max = slide.length - 1
    let cooldown = 0
    slide.eq(0).show()
    

    $("#arrowSliderLeft").click(()=>{
        if(cooldown == 0){
            cooldown = 1
            slide.eq(curr).animate({
                opacity: "0"
            },250);
            slide.eq(curr).delay(0).hide()
            slide.eq(curr).animate({
                opacity: "1"
            },0);
            curr--
            if(curr < min)curr = max
            slide.eq(curr).animate({
                opacity: "0"
            },0)
            slide.eq(curr).delay(0).show()
            slide.eq(curr).animate({
                opacity: "1"
            },500)
            setTimeout(()=>{
                cooldown = 0
            },1000)
        }else{

        }
    })

    $("#arrowSliderRight").click(()=>{
        if(cooldown == 0){
            cooldown = 1
            slide.eq(curr).animate({
                opacity: "0"
            },250);
            slide.eq(curr).delay(0).hide()
            slide.eq(curr).animate({
                opacity: "1"
           },0);
            curr++
            if(curr > max)curr = min
             slide.eq(curr).animate({
                opacity: "0"
            },0)
            slide.eq(curr).delay(0).show()
            slide.eq(curr).animate({
                opacity: "1"
            },500)
            setTimeout(()=>{
                cooldown = 0
            },1000)
        }else{

        }
    })
})