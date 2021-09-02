const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CoursesController {
	// [GET] /course/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) =>
				res.render("courses/show", {
					course: mongooseToObject(course),
				})
			)
			.catch((err) => next(err));
	}

	// [GET] /course/create
	create(req, res, next) {
		res.render("courses/create");
	}

	// [POST] /course/store
	store(req, res, next) {
		const formData = req.body;
		console.log(req.body);
		formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
		const course = new Course(formData);
		course
			.save()
			.then(res.redirect("/"))
			.catch((err) => next());
	}
}

module.exports = new CoursesController();
