var net = require('net');

var host = 'localhost';
var port = 7000;
var client = net.connect(port, host, function () {
  console.log('Connected to '+host+':'+port);
  process.stdin.resume();
  process.stdin.pipe(client);
});

client.on('data', function (data) {
   console.log('Server said: '+data);
});

client.on('end', function() {
    console.log('Connection closed');
});
