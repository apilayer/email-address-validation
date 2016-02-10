var path = require('path');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});

var email = 'this.is.a@test.io';

var checkQuery = {
    email: email
};

api.check(checkQuery, function (err, result) {
    if (err) {
        return console.log('Check Callback (Error): ' + JSON.stringify(err));
    }
    console.log('Check Callback (Success): '+ JSON.stringify(result));
});