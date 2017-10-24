var express = require('express');

var convert = require('./convert');

var app = express();
var port = process.env.PORT || 5000;
app.use(express.static(__dirname + '/public'));

app.get('/:dateToConvert', function(request, responce) {
    var date = request.params.dateToConvert;
    var result = convert.convertDate(date);
    responce.send(result);
});

app.listen(port, function() {
    console.log('App is running on port: ' + port);
});