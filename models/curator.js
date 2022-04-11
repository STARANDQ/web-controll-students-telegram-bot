const mongoose = require('mongoose');
const Schema = mongoose.Schema;

curatorSchema = new Schema( {
	name: String,
	email: String,
	phoneNumber: String,
	educational_Institution: String,
	password: String,
	teacher: {
		type: Array,
		default: null
	},
	students:  {
		type: Array,
		default: null
	},
	profiles:  {
		type: Array,
		default: null
	},
	subjects:  {
		type: Array,
		default: null
	},
	IdAdmin: String,
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