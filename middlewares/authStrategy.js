const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authProtection = async (req, res, next) => {
	const token = req.header('Authorization')?.split(' ')[1];
	if (!token) {
		return res.status(404).json({
			success: false,
			error: 'Access denied',
		});
	}
	try {
		const verifiedUser = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
		req.user = await User.findById(verifiedUser.userId);
		next();
	} catch (error) {
		return res.status(404).json({
			success: false,
			error: error.message,
		});
	}
};

module.exports = {
	authProtection,
};
