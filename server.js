//KBlanchette - Setup Express Server
var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

require("./controllers/ordersController")(app);

app.listen(PORT, function() {
    console.log("Listening: " + PORT);
})