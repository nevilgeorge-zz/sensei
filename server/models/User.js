// User.js
// Data model for both Mentor and Mentee

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	mentor: Boolean,
	firstName: String,
	lastName: String,
	email: String,
	menteeID: mongoose.Schema.ObjectId,
	mentorID: mongoose.Schema.ObjectId,
	relationshipID: mongoose.Schema.ObjectId,
	favSubject: String,
	major: String,
	favSport: String,
	school: String,
	year: String,
	city: String,
	state: String,
	picture: String,
	hobby: String
});

module.exports = mongoose.model('User', userSchema);