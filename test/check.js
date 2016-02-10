var path = require('path');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

var api = new API({
    access_key: process.env.ACCESS_KEY
});

// TEST START
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('#check()', function () {

    this.timeout(20000);

    it('basic', function (done) {

        var user = 'this.is.a';
        var domain = 'test.io';
        var email = ''+ user +'@'+ domain;

        // Check Query
        var query = {
            email: email
        };

        api.check(query)
            .then(function (result) {

                expect(result).is.not.null;
                expect(result).property('user').equals(user);
                expect(result).property('domain').equals(domain);

                done(null, result);
            })
            .catch(function (err) {
                done(err);
            });
    });
});