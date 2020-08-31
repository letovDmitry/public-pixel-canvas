const express = require('express');
const path = require('path')
const port = process.env.PORT || 8000;

let cells = [];

for (let i = 1; i <= 900; i++) {
    cells.push('#FFFFFF')
}

const app = express();
app.use(express.static(path.resolve(__dirname, 'build')))

// app.get('/colors', function (request, response) {
//     cells.splice(request.query.cell, 1, `#${request.query.color}`)
// });

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})



const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



const io = require('socket.io')(server);
io.on('connection', (client) => {
    client.on('subscribeToCells', (properties) => {
        console.log(properties)
        cells.splice(properties.cell, 1, `#${properties.color}`)
    });
    setInterval(() => {
        client.emit('cells', cells);
    }, 100);
    
});
io.listen(server);
console.log('listening');

