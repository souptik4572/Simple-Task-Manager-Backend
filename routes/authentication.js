const router = require('express').Router();

router.post('/register', (req, res) => {
	res.send('Registration will take place from here');
});

router.post('/login', (req, res) => {
	res.send('Login will take place from here');
});

module.exports = router;