
const WebSocket = require('ws');
var net = require('net');

const wss = new WebSocket.Server({ port: 8080 });

var msg;
var resultReceived = false;

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
			ws.send("haber:;TV_CH21_0530_174000_chunk_1 519.979375 524.839375 1.0:::TV_CH21_0531_144000_chunk_1 94.73875 98.359375 0.02757570906832529:::TV_CH21_0531_174000_chunk_1 89.39125 92.81812500000001 0.012539018705364828;:");
		console.log('received from websocket: %s', message);
		resultReceived = false;
	});
	console.log('Connected to WebSocket');


});

