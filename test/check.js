var path = require('path');

var APIPath = path.join(__dirname, '../', 'index');
var API = require(APIPath);

// TEST START
var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('#check()', function () {

    this.timeout(20000);

    var user = 'this.is.a';
    var domain = 'test.io';
    var email = ''+ user +'@'+ domain;

    it('basic', function (done) {

        var api = new API({
            access_key: process.env.ACCESS_KEY
        });

        // Check Query
        var query = {
            email: email
        };

        api.check(query)
            .then(function (result) {

                expect(result).is.not.null;
                expect(result).property(api.check.PARAM_USER).equals(user);
                expect(result).property(api.check.PARAM_DOMAIN).equals(domain);
                expect(result).property(api.check.PARAM_CATCH_ALL).to.be.null;

                done(null, result);
            })
            .catch(function (err) {
                done(err);
            });
    });


    it('basic - w. catch-all', function (done) {

        var api = new API({
            access_key: process.env.ACCESS_KEY
        });

        // Check Query
        var query = {
            email: email,
            catch_all: api.check.PARAM_CATCH_ALL_TRUE
        };

        api.check(query)
            .then(function (result) {

                expect(result).is.not.null;
                expect(result).property(api.check.PARAM_USER).equals(user);
                expect(result).property(api.check.PARAM_DOMAIN).equals(domain);
                expect(result).property(api.check.PARAM_CATCH_ALL).to.be.a('boolean');

                done(null, result);
            })
            .catch(function (err) {
                done(err);
            });
    });


    it('basic - w. catch-all on free account', function (done) {

        var api = new API({
            access_key: process.env.ACCESS_KEY_FREE
        });

        // Check Query
        var query = {
            email: email,
            catch_all: api.check.PARAM_CATCH_ALL_TRUE
        };

        api.check(query)
            .then(function (result) {
                expect(result).is.null;
                done(result);
            })
            .catch(function (err) {
                expect(err).property('code').equals(310);
                done(null, err);
            });
    });
});