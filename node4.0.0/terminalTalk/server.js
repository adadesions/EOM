var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
  console.log('AdaTest');
});
server.listen(8124, function() { //'listening' listener
  console.log('server bound');
});

function plus10(chuck) {
  if(chuck > 0) chuck += 10;
  else return

  return chuck
}
