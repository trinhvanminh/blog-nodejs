const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); //generator name to slug

mongoose.plugin(slug);

const Schema = mongoose.Schema;


const Course_schema = new Schema({
	name: { type: String, require: true },
	description: { type: String, maxLength: 600 },
	image: { type: String },
	videoId: { type: String, require: true},
	slug: { type: String, slug: 'name', unique: true },
}, { timestamps: true, });

module.exports = mongoose.model('Course', Course_schema);