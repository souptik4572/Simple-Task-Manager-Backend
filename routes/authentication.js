const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
	const { name, email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		return res.status(404).json({
			success: false,
			error: 'Email already exists, please login',
		});
	}
	const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
	const hashedPassword = await bcrypt.hash(password, salt);
	try {
		const newUser = await User.create({
			name,
			email,
			password: hashedPassword,
		});
		return res.status(201).json({
			success: true,
			user: {
				name: newUser.name,
				email: newUser.email,
			},
		});
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
});

router.post('/login', (req, res) => {
	res.send('Login will take place from here');
});

module.exports = router;
