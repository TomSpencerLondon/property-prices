var express = require('express');
var app = express();
var port = 3000;
var api = require('./api');


//Routes
app.get('/propertySearch', function(request,response) {
  api.propertySearch(request.query, response);
});

app.listen(port, function() {
  console.log('Server starting on port ' + port);
});

module.exports = app;
