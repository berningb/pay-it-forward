"use strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express(),
    path = require('path'),
    hasher = require('./hash.js'),
    urlParser = bodyParser.urlencoded({
        extended: false
    });

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// viewed at http://localhost:8080/login
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.post('/login', urlParser, function (req, res) {
    console.log(hasher.verify(req.body.login, req.body.password));
});
// viewed at http://localhost:8080/admin
app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname + '/admin.html'));
});
// viewed at http://localhost:8080/location
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/location.html'));
});
// viewed at http://localhost:8080/events
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/events.html'));
});

app.post('/', urlencodedParser, function (req, res) {
    var Name = req.body.name;
    var Email = req.body.email;
    var Phone = req.body.phone;
    res.send('Hello ' + name + " " + " " + email + " " +
        phone);
});



app.listen(8080);