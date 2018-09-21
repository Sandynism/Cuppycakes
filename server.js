// Dependencies.
let express = require("express")
let bodyParser = require("body-parser")

let app = express();
let PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/cupcakes_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
