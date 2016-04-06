var express = require('express');
var app = express();
var path = require('path');
var jade = require('jade');
var bodyParser = require('body-parser');




app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));


var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/location.html'));
});
app.get('/events', function (req, res) {
    res.sendFile(path.join(__dirname + '/events.html'));
});
app.get('/login', function (req, res) {
    res.render('login');
});

app.listen(8080);