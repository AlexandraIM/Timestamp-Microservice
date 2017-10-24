var express = require('express');

var convert = require('./convert');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/:dateToConvert', function(request, responce) {
    var date = request.params.dateToConvert;
    var result = convert.convertDate(date);
    responce.send(result);
});

app.listen(process.env.PORT || 3000, function() {
    console.log('App is running on port: ' + process.env.PORT);
});