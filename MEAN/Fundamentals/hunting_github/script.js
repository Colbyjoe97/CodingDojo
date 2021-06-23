$(document).ready(function() {
    $('.getName').click(function() {
        $.get("https://api.github.com/users/Colbyjoe97", displayName)
        function displayName(data) {
            console.log(data);
            var name = data.name
            $('.myName').html(name)
        }
    })
})