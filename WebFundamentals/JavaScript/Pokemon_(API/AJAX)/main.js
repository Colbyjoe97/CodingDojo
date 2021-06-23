$(document).ready(function (url, i) {
    $.ajax({
        url: 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/',
        type: 'GET',
        data: {
            format: 'JSON'
        }
        
    });
    for (var i = 1; i <= 151; i++) {
        $.append(url + i + ".img")
    }
});
