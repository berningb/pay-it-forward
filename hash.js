var crypto = require('crypto');
var admin = {
    pass: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
    user: "reunion"
};
exports.verify = function (name, password) {
    var m = crypto.SHA1(password);
    console.log(m);
//    if (name === admin.user && password === admin.pass) {
    //
    //    }
    if (name === password) {
        return true;
    } else {
        return false;
    }
};
exports.rvspInfo = function () {

};