const Task = require('../models/Task');
const Todo = require('../models/Todo');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({}).populate('todos');
		return res.status(200).json({
			success: true,
			tasks,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

const createNewTask = async (req, res) => {
	const { name } = req.body;
	try {
		const task = await Task.create({
			name,
			owner: req.user._id,
		});
		return res.status(201).json({
			success: true,
			task,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

const editExistingTask = async (req, res) => {
	const { taskId } = req.params;
	const { name } = req.body;
	try {
		const task = await Task.findById(taskId);
		task.name = name;
		await task.save();
		return res.status(201).json({
			success: true,
			task,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

const deleteExistingTask = async (req, res) => {
	const { taskId } = req.params;
	try {
		await Todo.deleteMany({ parentTask: taskId });
		const deletedTask = await Task.findByIdAndDelete(taskId);
		return res.status(200).json({
			success: true,
			task: deletedTask,
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

module.exports = {
	getAllTasks,
	createNewTask,
	editExistingTask,
	deleteExistingTask,
};
