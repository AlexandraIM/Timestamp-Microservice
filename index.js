var express = require('express');

var app = express();
var port = 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, responce){
    responce.render('index');
});

app.listen(port, function(){
    console.log('App is running on port: ' + port);
})