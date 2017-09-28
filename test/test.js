var assert = require('assert');
var convert = require('../convert');

describe('Convert dates from query string', function() {
    describe('convertDate(1450137600)', function() {
        it('shuld return object with 2 dates format', function() {
            assert.equal(convert.convertDate(1450137600), { "unix": 1450137600, "natural": "December 15, 2015" });
        });
    });

    describe('convertDate("December 15, 2015")', function() {
        it('shuld return object with 2 dates format', function() {
            assert.equal(convert.convertDate("December 15, 2015"), { "unix": 1450137600, "natural": "December 15, 2015" });
        })
    })
});