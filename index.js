"use strict";
var express = require('express')
    , bodyParser = require('body-parser')
    , expressSession = require('express-session')
    , app = express()
    , jade = require('jade')
    , path = require('path')
    , hasher = require('./hash.js')
    , urlParser = bodyParser.urlencoded({
        extended: false
    });
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

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
    res.render('admin', {
        rvsp: hasher.rvspInfo()
    });
});
// viewed at http://localhost:8080/location
app.get('/location', function (req, res) {
    res.sendFile(path.join(__dirname + '/location.html'));
});
// viewed at http://localhost:8080/events
app.get('/completed', function (req, res) {
    res.sendFile(path.join(__dirname + '/completed.html'));
});

app.post('/', urlParser, function (req, res) {
    hasher.rvspAccepted(req.body.name, req.body.email, req.body.phone, req.body.guests, req.body.food);
    res.redirect("/")
});




app.listen(8080);