const mongoose = require('mongoose');
const Schema = mongoose.Schema;

studentSchema = new Schema( {
	name: String,
	code: String,
	curator: String,
	TelegramID:  {
		type: String,
		default: null
	},
	subjects:  {
		type: Array,
		default: null
	},
	updateAt: {
		type: Date,
		default: Date.now
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
Student = mongoose.model('Student', studentSchema);

module.exports = Student;
