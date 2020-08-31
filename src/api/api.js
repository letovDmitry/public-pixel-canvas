import openSocket from 'socket.io-client';
import * as axios from 'axios';
const socket = openSocket('http://localhost:8000');
export function getCells(cb) {
  socket.on('cells', timestamp => cb(null, timestamp));
}

export function changeCells(properties) {
  socket.emit('subscribeToCells', properties);  
}

export function newColor(color, cell) {
    return axios.get(`/colors?color=${color}&cell=${cell}`)
}