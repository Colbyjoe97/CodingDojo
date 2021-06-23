var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {
    response.send("<h1>Cars and Cats</h1>");
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})


// WHEN SEARCHING DIFFERENT URL'S SEARCH FILENAME.HTML
// EX: localhost:8000/cars.html