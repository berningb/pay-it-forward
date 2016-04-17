"use strict";
var crypto = require('crypto'),
    fs = require('fs');
var user = {
    name: "reunion",
    pass: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8"
};

exports.verify = function (name, password) {
    var p = crypto.createHash('sha256').update(password).digest('hex');
    return (name === user.name && p === user.pass);
};
exports.rvspInfo = function () {
    return JSON.parse(fs.readFileSync('./rvsp.json'));
};
exports.rvspAccepted = function (name, email, phone, guests, food, g1, g2) {
    var parent = JSON.parse(fs.readFileSync('./rvsp.json')),
        child = {
            rvspName: name,
            rvspEmail: email,
            rvspPhone: phone,
            rvspGuests: guests,
            rvspFood: [food, g1, g2]
        };
    parent.rvsp.push(child);
    fs.writeFile('./rvsp.json', JSON.stringify(parent), function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
};
exports.remove = function (index) {
    var parent = JSON.parse(fs.readFileSync('./rvsp.json'));
    parent.rvsp.splice(index, 1);
    fs.writeFile('./rvsp.json', JSON.stringify(parent), function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data);
    });
}