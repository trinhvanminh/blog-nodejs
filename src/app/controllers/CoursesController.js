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
		formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
		const course = new Course(formData);
		course.save().then(res.redirect("/")).catch(next);
	}

	// [GET] /course/:id/edit
	edit(req, res, next) {
		Course.findById(req.params.id)
			.then((course) =>
				res.render("courses/edit", {
					course: mongooseToObject(course),
				})
			)
			.catch(next);
	}

	// [PUT] /courses/:id
	update(req, res, next) {
		const formData = req.body;
		formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
		
		Course.findByIdAndUpdate(req.params.id, formData)
			.then(() => res.redirect("/me/stored/courses"))
			.catch(next);
	}

	// [DELETE] /courses/:id
	delete(req, res, next) {
		Course.findByIdAndDelete(req.params.id)
			.then(() => res.redirect("back"))
			.catch(next);
	}
}

module.exports = new CoursesController();
