var moment = require('moment');

exports.convertDate = function(data) {
    var isNumber = /^\d+$/.test(data);
    var result = {
        "unix": null,
        "natural": null
    };
    if (isNumber) {
        //convert unix to normal date
        var dateString = moment.unix(data).format('MMMM D, YYYY');
        result = {
            unix: parseInt(data),
            natural: dateString.toString()
        };
    } else {
        //convert normal date to unix
        var unixDate = moment(data, 'MMMM D YYYY').format('X');
        result = {
            unix: parseInt(unixDate),
            natural: data
        };

    }
    return result;
};