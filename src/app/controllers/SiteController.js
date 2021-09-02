const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
	// GET /
	index(req, res, next) {
        // inject models
		Course.find({})
			.then((courses) => {
                // inject views
				res.render("home", {
					courses: multipleMongooseToObject(courses),
				});
			})
			.catch((err) => next(err));
	}

	// GET /search
	search(req, res) {
		res.render("search");
	}
}

module.exports = new SiteController();
