"use strict";
var express = require('express'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    app = express(),
    jade = require('jade'),
    path = require('path'),
    hasher = require('./hash.js'),
    urlParser = bodyParser.urlencoded({
        extended: false
    });
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
    secret: "S3Cr3TM3zz3G3",
    saveUninitialized: true,
    resave: true
}));
var accessChecker = function (req, res, next) {
    if (req.session.user && req.session.user.isAuthenticated) {
        next();
    } else {
        res.redirect('/login');
    }
};

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// viewed at http://localhost:8080/login
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.post('/login', urlParser, function (req, res) {
    var user = req.body.login;
    if (hasher.verify(user, req.body.password)) {
        req.session.user = {
            isAuthenticated: true,
            username: user
        };
        res.redirect('/admin');
    } else {
        res.sendFile(path.join(__dirname + '/login.html'));
    }
});
// viewed at http://localhost:8080/admin
app.get('/admin', accessChecker, function (req, res) {
    res.render('admin', {
        rvsp: hasher.rvspInfo()
    });
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
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
    var guest1 = "NA";
    var guest2 = "NA";
    if (req.body.guest0 != null) {
        guest1 = req.body.guest0;
    }
    if (req.body.guest1 != null) {
        guest2 = req.body.guest1;
    }
    hasher.rvspAccepted(req.body.name, req.body.email, req.body.phone, req.body.guests, req.body.food, guest1, guest2);
    res.redirect("/")
});




app.listen(8080);