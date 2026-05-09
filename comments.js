// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create comments array
var comments = [];

// Create comment endpoint
app.post('/comments', function(req, res) {
    var comment = req.body.comment;
    if (comment) {
        comments.push(comment);
        res.status(201).send({ message: 'Comment added successfully' });
    } else {
        res.status(400).send({ message: 'Comment is required' });
    }
});

// Get comments endpoint
app.get('/comments', function(req, res) {
    res.send(comments);
});

// Start server
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});