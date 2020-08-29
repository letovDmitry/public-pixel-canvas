const io = require('socket.io')();
const express = require('express');

let cells = [];

for (let i = 1; i <= 900; i++) {
    cells.push('#FFFFFF')
}

const app = express();
let colorChangeFlag = true;

app.get('/colors', function (request, response) {
    console.log(request.query);
    cells.splice(request.query.cell, 1, `#${request.query.color}`)
    response.send(`Cell number ${request.query.cell} changed to color ${request.query.color}`);
});

io.on('connection', (client) => {
    client.on('subscribeToCells', (interval) => {
        console.log('client is subscribing to cells with interval ', interval);
        setInterval(() => {
            client.emit('cells', cells);
        }, interval);
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000`)
  })