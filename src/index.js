const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

db.connect();

// set body-parse to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

//	HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
	".hbs",
	exphbs({
		extname: ".hbs",
	})
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views")); //set views folder, default: views/

// routing
route(app);

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
