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


app.use("/", express.static(__dirname + '/public'));


// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// viewed at http://localhost:8080/login
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.post('/login', urlParser, function (req, res) {
    if (hasher.verify(req.body.login, req.body.password)) {
        res.redirect('/admin');
    } else {
        res.sendFile(path.join(__dirname + '/login.html'));
    }
});

// viewed at http://localhost:8080/admin
app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname + '/admin.html'));
    var h = hasher.rvspInfo();
    res.send(h);
});

// viewed at http://localhost:8080/location
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/location.html'));
});

// viewed at http://localhost:8080/events
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/events.html'));
});
// viewed at http://localhost:8080/events
app.get('/completed', function (req, res) {
    res.sendFile(path.join(__dirname + '/completed.html'));
});

app.post('/', urlParser, function (req, res) {
    var Name = req.body.name;
    var Email = req.body.email;
    var Phone = req.body.phone;
    var Food = req.body.food;
    var guests = [];
//    for (i = 0; i = < req.body.guests; i++) {
//
//    }
    console.log("Hello" + Name + Email + Phone + Food);
    res.redirect("../completed");
});



app.listen(8080);