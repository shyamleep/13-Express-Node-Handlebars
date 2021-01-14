const express = require("express");
const PORT = process.env.PORT || 8000
const app = express();
const routes = require("./controllers/burgers_controller");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(expres.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs( { defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("listening on port " + PORT);

});





