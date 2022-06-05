const mongoose = require('mongoose');
const Schema = mongoose.Schema;

teacherSchema = new Schema( {
	name: String,
	code: String,
	curator: String,
	students:  {
		type: Array,
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
Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;