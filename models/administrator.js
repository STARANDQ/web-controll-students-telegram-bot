const mongoose = require('mongoose');
const Schema = mongoose.Schema;

administratorSchema = new Schema( {
	name: String,
	login: String,
	password: String,
	dateTimeOnline: Date,
	updateAt: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
Administrator = mongoose.model('Administrator', administratorSchema);

module.exports = Administrator;