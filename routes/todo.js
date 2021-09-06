const router = require('express').Router({
	mergeParams: true,
});
const { getAllTodosOfParticularTask, createNewTodo, deleteTodo } = require('../controllers/todo');

router.get('/', getAllTodosOfParticularTask);

router.post('/', createNewTodo);

router.delete('/:todoId', deleteTodo);

module.exports = router;
