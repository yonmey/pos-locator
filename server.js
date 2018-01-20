var express = require("express");
var path = require("path");
var cors = require("cors");
var app = express();

// Define the port to run on
app.set("port", 3000);
app.use(express.static(path.join(__dirname, "./")));
app.use(cors());

// Listen for requests
var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("Magic happens on port " + port);
});
