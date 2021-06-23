$(document).ready(function () {
    $("img").click(function () {
        var src2 = $(this).attr('src2');
        var alt2 = $(this).attr('alt2');
        $(this).attr({
            src: src2,
            alt: alt2
        });
    });
});