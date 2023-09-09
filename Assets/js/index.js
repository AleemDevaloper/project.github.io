$(document).ready (function(){
    window.addEventListener("scroll" , function () {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky" , window.scrollY > 0);
    })
$('.btn1').click(function(){
    window.open('https://www.fiverr.com/hamzak47?source=inbox');
})
$('.btn2').click(function(){
    window.open('https://www.fiverr.com/hamzak47?source=inbox');
})
    $('.btn5').hide();
   $('.btn4').click(function () {
    $(".h3").html("Download My CV");
    $("h4").hide();
    $('.btn5').show();
    $(".edli").hide();
   })
   $('.btn3').click(function () {
    $(".h3").html("Bachelor of Computer Science (2019)");
    $(".edli").show(); 
    $("h4").show();
    $('.btn5').hide();
   })



})