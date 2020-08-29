"use strict";

var _require = require('http'),
    createServer = _require.createServer;

var io = require('socket.io')();

var express = require('express');

var compression = require('compression');

var morgan = require('morgan');

var path = require('path');

var cells = [];

for (var i = 1; i <= 900; i++) {
  cells.push('#FFFFFF');
}

var app = express();
var colorChangeFlag = true;
app.use(compression());
app.use(morgan('common'));
app.use(express["static"](path.resolve(__dirname, 'build')));
app.get('/colors', function (request, response) {
  cells.splice(request.query.cell, 1, "#".concat(request.query.color));
});
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
io.on('connection', function (client) {
  client.on('subscribeToCells', function (interval) {
    setInterval(function () {
      client.emit('cells', cells);
    }, interval);
  });
});
var port = 8000;
io.listen(port);
console.log('listening on port ', port);
app.listen(5000, function () {
  console.log("Example app listening at http://localhost:5000");
});