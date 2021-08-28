if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/Sharodified';

const configureMongoose = () => {
	mongoose.connect(
		DATABASE_URL,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		},
		() => {
			console.log('Connected to mongoose succesfully');
		}
	);
};

module.exports = configureMongoose;
