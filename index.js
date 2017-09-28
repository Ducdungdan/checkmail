var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
})

app.listen('8000')
console.log('Magic happens on port 8000');
exports = module.exports = app;