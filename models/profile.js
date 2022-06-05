const mongoose = require('mongoose');
const Schema = mongoose.Schema;

profileSchema = new Schema( {
	name: String,
	TelegramID: String,
	cronArr: {
		type: Array,
		default: null
	},
	commandArr: {
		type: Object,
		default: {
			command:null,
			send: null
		}
	},
	Curator: String,
	updateAt: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;