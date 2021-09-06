const Todo = require('../models/Todo');
const Task = require('../models/Task');

const getAllTodosOfParticularTask = async (req, res) => {
	const { taskId } = req.params;
	try {
		const todos = await Todo.find({ parentTask: taskId });
		return res.status(200).json({
			success: true,
			todos,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

const createNewTodo = async (req, res) => {
	const { taskId } = req.params;
	const { name } = req.body;
	try {
		const todo = await Todo.create({
			name,
			parentTask: taskId,
		});
		const task = await Task.findById(taskId);
		task.todos.push(todo._id);
		await task.save();
		return res.status(201).json({
			success: true,
			todo,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

const deleteTodo = async (req, res) => {
	const { taskId, todoId } = req.params;
	try {
		const todo = await Todo.findByIdAndDelete(todoId);
		await Task.updateOne(
			{ _id: taskId },
			{
				$pull: {
					todos: todoId,
				},
			}
		);
		return res.status(200).json({
			success: true,
			todo,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

module.exports = {
	getAllTodosOfParticularTask,
	createNewTodo,
	deleteTodo,
};
