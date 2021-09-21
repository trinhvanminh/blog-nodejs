const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator"); //generator name to slug
const mongooseDelete = require("mongoose-delete"); //sort delete

const Schema = mongoose.Schema;
const Course_schema = new Schema(
	{
		name: { type: String, require: true },
		description: { type: String, maxLength: 600 },
		image: { type: String },
		videoId: { type: String, require: true },
		slug: { type: String, slug: "name", unique: true },
	},
	{ timestamps: true }
);

// add plugin
mongoose.plugin(slug);
mongoose.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("Course", Course_schema);
