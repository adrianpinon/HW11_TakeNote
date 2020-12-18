const express = require("express");
const path =  require("path");
const fs = require("fs");
//const { response } = require("express");
//--------------------------- localhost:8088
const app = express();
let PORT = process.env.PORT || 8088;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.get("/notes", (request, response) => {
        response.sendFile(__dirname + "/public/notes.html");
}); 

app.get("*", (request, response) => {
    

    
    response.sendFile(__dirname + "/public/index.html");
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });
app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/notes.html"));
  });  
  


app.listen(PORT, function() {
    console.log("App is listening on PORT:" +  PORT);
});

