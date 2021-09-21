const fs = require("fs");

fs.readFile("testPicture.jpg", (err, data) => {
    if (err) throw err;
    let encodedImage = Buffer.from(data).toString("binary");
    procesFile(encodedImage);
})

let procesFile = (data) => {
    fs.writeFile("testPicture.txt", data, (err) => {
        if (err) throw err;
        console.log("Picture written to: testPicture.txt");
    })
    deProcesFile(data);
}

let deProcesFile = (data) => {
    var decodedData = Buffer.from(data, "binary");
    fs.writeFile("testPicture2.jpg", decodedData, (err) => {
        if (err) throw err;
        console.log("Picture remade in: testPicture2.jpg");
    })
}