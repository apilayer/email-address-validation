var API = require('email-address-validation');
var api = new API({
    access_key: 'access_key'
});

var checkQuery = {
    email: 'this.is.a@test.io'
};

api.check(checkQuery)
    .then(function (result) {
        console.log('Check Promise Resolve' + JSON.stringify(result));
    })
    .catch(function (err) {
        console.log('Check Promise Reject: ' + JSON.stringify(err));
    });