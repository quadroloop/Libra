const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const cors = require('cors')

const adapter = new FileSync('db.json')
const db = low(adapter)

let port = process.env.PORT || 7000;

app.use(express.static('./frontend/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
http.listen(port);

console.log(`===============================`)
console.log(`Running Project Libra: port ${port}`);
console.log(`===============================`)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
})


// Listening for socket events
io.sockets.on('connection', function (socket) {

  socket.on('transmit', function (resx) {
    console.log('Scan event detected, cascading event');
    io.emit('scan', { data: resx });

  });


});