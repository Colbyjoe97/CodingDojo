var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// ROOT URL
app.get('/', function(request, response) {
    response.send("<h1>Cars and Cats</h1>");
})

// ALL CARS
app.get('/cars', function(request, response) {
    response.render('cars')
})

// ALL CATS
app.get('/cats', function(request, response) {
    response.render('cats')
})

// MADI
app.get('/madi', function(request, response) {
    var cats_info = {name: "Madi", favorite_food: "Tuna", enjoys: "Being with people", img: 'cat1.jpg'}
    response.render('cat', {cats: cats_info})
})

// MOLLY
app.get('/molly', function(request, response) {
    var cats_info = {name: "Molly", favorite_food: "Anything", enjoys: "Playing outside", img: 'cat2.jpg'}
    response.render('cat', {cats: cats_info})
})

// CAR FORM
app.get('/cars/new', function(request, response) {
    response.render('form')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})

