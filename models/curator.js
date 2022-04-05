const mongoose = require('mongoose');
const Schema = mongoose.Schema;

curatorSchema = new Schema( {
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
Curator = mongoose.model('Curator', curatorSchema);

module.exports = Curator;