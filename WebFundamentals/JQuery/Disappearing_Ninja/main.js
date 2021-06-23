$(document).ready(function () {
    $("li").click(function () {
        $(this).fadeOut();
    })

    $("#restore").click(function () {
        $("li").fadeIn();
    })
})