var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({entended: true}));

app.use(session({
    secret: 'codingdojo',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res) {
    res.render("index");
})

app.post("/submit", function(req, res){
    req.session.results = req.body;
    res.redirect("result");
})

app.get("/result", function(req, res){
    res.render("results", {results:req.session.results});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})