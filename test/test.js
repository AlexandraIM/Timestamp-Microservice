var assert = require('assert');
var convert = require('../convert');

describe('Convert dates from query string', function() {
    describe('convertDate(1511128800)', function() {
        it('shuld return object with 2 dates format', function() {
            assert.deepEqual(convert.convertDate(1511128800), { unix: 1511128800, natural: "November 20, 2017" });
        });
    });

    describe('convertDate("November 20, 2017")', function() {
        it('shuld return object with 2 dates format', function() {
            assert.deepEqual(convert.convertDate("November 20, 2017"), { unix: 1511128800, natural: "November 20, 2017" });
        });
    });
});