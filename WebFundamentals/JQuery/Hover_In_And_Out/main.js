$(document).ready(function () {
    $("img").hover(function () {
        var src = $(this).attr('src');
        var alt = $(this).attr('alt');
        
        $(this).data('src', this.src);

        var src2 = $(this).attr('src2');
        var alt2 = $(this).attr('alt2');

        $(this).attr({
            src: src2,
            alt: alt2
        });

    }, function () {
        this.src = $(this).data('src');
    })
});