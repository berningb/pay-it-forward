var crypto = require('crypto'),
    fs = require('fs');
var admin = {
    pass: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    user: "reunion"
};
exports.verify = function (name, password) {
    var m = crypto.createHash('sha256').update(password).digest('hex');
    return (name === admin.user && m === admin.pass);
};
exports.rvspInfo = function () {
    var j = fs.readFileSync("./rvsp.json"),
        m = JSON.parse(j);
    return m;
};