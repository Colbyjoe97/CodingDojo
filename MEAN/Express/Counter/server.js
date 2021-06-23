var express = require("express");
var session = require("express-session");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(session({
    secret: 'admin',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


// ROOT URL
app.get('/', function(req, res) {
    if(req.session['counter'] == null) {
        req.session['counter'] = 0
    }
    else {
        req.session['counter'] += 1
    }
    res.render("index", {counter: req.session['counter']});
})

app.get('/two', function(req, res) {
    req.session['counter']++
    res.redirect('/')
})

app.get('/reset', function(req, res) {
    req.session.destroy()
    res.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
