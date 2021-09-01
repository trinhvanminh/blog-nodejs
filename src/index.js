const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

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
app.set("views", path.join(__dirname, "/resources/views"));

// routing
app.get("/", function (req, res) {
	res.render("home");
});

app.get("/news", function (req, res) {
	console.log(req.query.q)
	res.render("news");
});

app.get("/search", function (req, res) {
	res.render("search");
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
