import openSocket from 'socket.io-client';
import * as axios from 'axios';

const  socket = openSocket('http://localhost:8000');
export function subscribeToCells(cb) {
  socket.on('cells', timestamp => cb(null, timestamp));
  socket.emit('subscribeToCells', 1000);
}

export function newColor(color, cell) {
    return axios.get(`/colors?color=${color}&cell=${cell}`)
}