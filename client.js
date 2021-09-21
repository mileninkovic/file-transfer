const WebSocket = require('ws');
const fs = require("fs");
const ws = new WebSocket("ws://127.0.0.1:8081");

ws.onopen = (e) => {
    console.log('Connection is open ...');
    fs.readFile("testPicture.jpg", (err, data) => {
        if (err) throw err;
        let encodedImage = Buffer.from(data).toString("base64");
        ws.send(encodedImage);
    })
};
ws.onerror = (err) => {
    console.log('err: ', err);
}
ws.onmessage = (e) => {
    console.log(e.data);
};
ws.onclose = () => {
    console.log("Connection is closed...");
}