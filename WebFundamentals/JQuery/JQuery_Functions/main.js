$(document).ready(function () {
    $("h1").click(function (event) {
        $(this).hide();
    });
    
    $("li").click(function () {
        $(this).fadeOut();
    })

    $("h3").click(function (index) {
        $(this).addClass("header");
    })

    $("img").hover(function () {
        $(this).fadeToggle("slow", "linear");
    })



 });