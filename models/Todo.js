const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    parentTask: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
	createdAt: {
		type: Date,
		default: Date.now,
	},
	editedAt: {
		type: Date,
		default: Date.now,
	},
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
