require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');

const port = 5000;
const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(bodyParser.json());


app.post('/save', (req, res) => {
    console.log("req.data", req.body.data);
    const file = req.body.data;
    var stringFile = "<DOCUMENT>";
    for(var i=0; i<file.length; i++){
        var pom = "<NOTE>"+"<TITLE value='"+file[i].title+"'/><CONTENT value='"+file[i].content+"'/></NOTE>"
        stringFile = stringFile.concat(pom);
        console.log("for file", file[i]);
    }
    stringFile = stringFile.concat("</DOCUMENT>");
    console.log("RESULT", stringFile);
/*     fs.truncate('/path/to/file', 0, function(){console.log('done')})
 */ fs.writeFile("C:/Users/Korisnik/Desktop/webCV/my-cv/server/temp.txt", stringFile, (err) => {
        console.log(req.body.data);
      });
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, function(){
    console.log("Server is listening on port: ", port);
});