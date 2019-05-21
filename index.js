// To connect via mobile = ip:port

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// Same as above - first class function notation
// const exportedSocketModule = require('socket.io');
// const io = exportedSocketModule(server);
const port = process.env.PORT || 3001;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
server.listen(port, function(){
  console.log("Listening on:" + port);
});
