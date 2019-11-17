const http = require('http');

const express = require('express');

xonst socketio = require('socket.io');
const app = express();


const clientPath = `$_direname/.../client`;
console.log(`Serving static from ${clientPath}`);
app.use(express.static(clientPath));
const sever = http.createServer(app);


const io = socketio(server);

io.on('connection', (sock) =>{

    sock.emit('message', "You've connected ")
})

server.on('error', (err)=>{
    console.error('Server error: ', err)
});

server.listen(1000, ()=>{
    console.log('RPS started on 1000');

});
