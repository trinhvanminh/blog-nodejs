const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const methodOverride = require('method-override')

const app = express();
const port = 3000;

// override with POST having ?_method=PUT
app.use(methodOverride('_method'))

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
		helpers: {
			sum: (a , b) => a + b,
			formatTs: ts => ts ? ts.toLocaleDateString() : '',
		}
	})
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views")); //set views folder, default: views/

// routing
route(app);

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
