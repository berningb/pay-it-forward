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