const WebSocket = require('ws');
var net = require('net');

const wss = new WebSocket.Server({ port: 8080 });

var msg;
var resultReceived = false;

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		console.log('received from websocket: %s', message);
		resultReceived = false;

		var client = new net.Socket();
		client.connect(9996, '193.140.195.153', function() {
			console.log('Connected to TCP Socket');
			client.write(message);
		});

		client.on('data', function(data) {
			console.log('Received From TCP socket: ' + data);
			ws.send(data.toString());
			client.destroy(); // kill client after server's response
			resultReceived = true;
		});

		client.on('close', function() {
			console.log('Connection closed');
		});
		

	});
	console.log('Connected to WebSocket');

});

