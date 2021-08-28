const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	todos: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Todo',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	editedAt: {
		type: Date,
		default: Date.now,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
