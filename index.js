var express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express(),
    path = require('path');

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// viewed at http://localhost:8080/login
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'))
});
// viewed at http://localhost:8080/admin
app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname + '/admin.html'))
});
// viewed at http://localhost:8080/location
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/location.html'))
});
// viewed at http://localhost:8080/events
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/events.html'))
});




app.listen(8080);