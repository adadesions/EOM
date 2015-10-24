//Load TCP module
var net = require('net');
var PassThroughStream = require('stream').PassThrough;
var stream = new PassThroughStream();

//Create TCP server
var server = net.createServer({allowHalfOpen: true}, function (socket) {
  console.log("Connection from "+ socket.remoteAddress);
  process.stdin.resume();
  process.stdin.pipe(socket);
  // socket.pipe(server, {end: false});

  socket.on('data', function (data) {
      console.log('Send from '+ socket.remoteAddress +' (client) : ' + data);
  })

  socket.on('end', function() {
    console.log('client disconnected');    
  });

});

server.listen(7000, "localhost");

console.log("TCP Server listening on port 7000");
