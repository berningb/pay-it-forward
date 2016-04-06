var express = require('express'),
    jade = require('jade'),
    bodyParser = require('body-parser'),
    expressSession = require('express-session'),
    path = require('path'),
    urlParser = bodyParser.urlencoded({
        extended: false
    });

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use(expressSession({
    secret: "S3Cr3TM3zz3G3",
    saveUninitialized: true,
    resave: true
}));


app.listen(3000);