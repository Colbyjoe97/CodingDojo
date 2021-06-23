const express = require("express");
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
var session = require("express-session");
var bodyParser = require("body-parser");
app.use(flash())
app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

mongoose.connect('mongodb://localhost/messageBoardDB', {useNewUrlParser: true});

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    comment: {
        type: String,
        required: [true, "Comment is required"],
        minLength: [10, "Comment must be at least 10 characters long"]
    }
}, {timestamps: true})
const Comment = mongoose.model("Comment", CommentSchema)

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    post: {
        type: String,
        required: [true, "Post is required"],
        minLength: [10, "Post must be at least 10 characters long"]
    },
    comments: [CommentSchema]
}, {timestamps: true})
const Post = mongoose.model("Post", PostSchema)


app.get('/', function(req, res) {
    var errors = []
    for(var error of req.flash('quoteErrors')) {
        // console.log(error)
        errors.push(error)
    }
    Comment.find()
        .sort({createdAt: "ascending"})
        .then(com => {
            Post.find()
                .sort({createdAt: "descending"})
                .then(data => {
                    // console.log(data)
                    res.render("index", {posts: data, errors: errors, comment: com})
                })
                .catch(err => res.json(err))
        })
        .catch(err => res.json(err))
})


app.post('/createPost', (req, res) => {
    const post = new Post()
    post.name = req.body.name
    post.post = req.body.post
    post.save()
        .then(response => {
            console.log("Post Created", response)
            res.redirect('/')
        })
        .catch(err => {
            for(var key in err.errors) {
                req.flash('quoteErrors', err.errors[key].message)
            }
            res.redirect('/')
        })
})

app.post('/addComment/:id', (req, res) => {
    const comment = new Comment()
    comment.name = req.body.name
    comment.comment = req.body.comment
    comment.save()
        .then(newComment => {
            Post.findOne({_id: req.params.id})
                .then(post => {
                    console.log(post.comments.length)
                    post.comments.push(newComment)
                    post.save()
                    .then(updatedPost => {
                        console.log(updatedPost)
                    })
                    .catch(err => {console.log(err)})
                })
                .catch(err => {console.log(err)})
            res.redirect('/')
        })
        .catch(err => {
            for(var key in err.errors) {
                req.flash('quoteErrors', err.errors[key].message)
            }
            res.redirect('/')
        })
})





app.listen(8000, () => console.log("The server is all fired up on port 8000"));