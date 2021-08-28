const express = require('express');
const configureMongoose = require('./config/configureMongoose');
const authenticationRoutes = require('./routes/authentication');

// Configuring our mongoose connection
configureMongoose();

const app = express();

// Our express body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our authentication routes
app.use('/auth', authenticationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
