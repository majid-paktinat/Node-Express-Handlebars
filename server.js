// run a server

// put a textbox and submit button on index page
// on click create a ajax and call server

// on server define route and static.express
// on the route add the data to data base

// on index use slidebar to call a route and receive data
// as per the status use two handlebars in two column to define it

// write an orm file to do inser to db and get from db
// in server route call orm method

// try to use devnote [env]

// be fekre req.body.burger_name, req.body.devoured bash!!!

var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
