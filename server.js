const WebSocketServer = require('ws').Server
const fs = require("fs");
const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', ((ws) => {
    ws.on('message', (message) => {
        console.log(`received: ${message}`);
        deProcesFile(message);
        ws.close();
    });
    ws.on('end', () => {
        console.log('Connection ended...');
    });
    ws.send('Data received!');
}));

// Saves text file with data
/*
let procesFile = (data) => {
    fs.writeFile("test.txt", data, (err) => {
        if (err) throw err;
    })
    console.log("\nData received! Converting to image...");
    deProcesFile(data);
}
*/

let deProcesFile = (data) => {
    var decodedData = Buffer.from(data.toString(), "base64");
    fs.writeFile("testPicture2.jpg", decodedData, (err) => {
        if (err) throw err;
        console.log("\nFile converted! Closing connection!");
    })
}