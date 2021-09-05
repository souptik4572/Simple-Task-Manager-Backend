const router = require('express').Router();
const {
	getAllTasks,
	createNewTask,
	editExistingTask,
	deleteExistingTask,
} = require('../controllers/task');

router.get('/', getAllTasks);

router.post('/', createNewTask);

router.patch('/:taskId', editExistingTask);

router.delete('/:taskId', deleteExistingTask);

module.exports = router;
