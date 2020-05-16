'use strict';
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
    console.log(`listening at ${app.get('port')}`);
});