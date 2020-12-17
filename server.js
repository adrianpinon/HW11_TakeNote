const express = require("express");
const path =  require("path");

const app = express();
let PORT = process.env.PORT || 8088;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//-------------------------------------------------------



//-------------------------------------------------------
app.listen(PORT, function() {
    console.log("App is listening on PORT:" +  PORT);
});

