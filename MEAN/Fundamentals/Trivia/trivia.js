$(document).ready(function() {
    $.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy", function(data){
        console.log(data.results)
        sport = data.results;
    })

    $(".show").click(function() {
        // for(let i = 0; i < sport.length; i++) {
            $('.questions').html('<p>'+ sport[0].question + '</p>')
            for(let i = 0; i < sport[0].incorrect_answers.length; i++) {
                $('.answers').append('<p class="incorrect">' + " - " + " " + sport[0].incorrect_answers[i] + '</p>')
            }
            $('.answers').append('<p class="correct">' + " - " + " " + sport[0].correct_answer + "</p>")
        // }
    })
})