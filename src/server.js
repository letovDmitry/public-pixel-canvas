const io = require('socket.io')();
const express = require('express');

let cells = [];

for (let i = 1; i <= 900; i++) {
    cells.push('#FFFFFF')
}

const app = express();
let colorChangeFlag = true;

app.get('/colors', function (request, response) {
    cells.splice(request.query.cell, 1, `#${request.query.color}`)
});

io.on('connection', (client) => {
    client.on('subscribeToCells', (interval) => {
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