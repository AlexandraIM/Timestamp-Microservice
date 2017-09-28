var moment = require('moment');

exports.convertDate = function(data) {
    var isNumber = /^\d+$/.test(data);
    var result = {
        "unix": null,
        "natural": null
    };
    if (isNumber) {
        var dateString = moment.unix(data).format('MMMM DD, YYYY');
        result = {
            "unix": data,
            "natural": dateString
        };
    } else {
        var unixDate = moment(data, 'MMMM DD YYYY').format('X');
        result = {
            "unix": parseInt(unixDate),
            "natural": data
        };

    }
    return result;
};