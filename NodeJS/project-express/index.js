var express = require('express');
var app = express();

app.get('/',function(request, response){
   response.end('Hello world')
});

app.listen(3000, '127.0.0.1', function() {
    console.log('The express server has been started...');
});