const router = require('express').Router({
	mergeParams: true,
});

const Todo = require('../models/Todo');
const Task = require('../models/Task');

router.get('/', async (req, res) => {
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
});

router.post('/', async (req, res) => {
	const { taskId } = req.params;
	const { name } = req.body;
	try {
		const todo = await Todo.create({
			name,
			parentTask: taskId,
		});
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
});

router.delete('/:todoId', async (req, res) => {
	const { taskId, todoId } = req.params;
	try {
        
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
});

module.exports = router;
