const express = require('express');
const cors = require('cors');
const configureMongoose = require('./config/configureMongoose');
const authenticationRoutes = require('./routes/authentication');
const taskRoutes = require('./routes/task');
const todoRoutes = require('./routes/todo');
const { authProtection } = require('./middlewares/authStrategy');

// Configuring our mongoose connection
configureMongoose();

const app = express();

app.use(cors());

// Our express body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Our authentication routes
app.use('/auth', authenticationRoutes);
// Our task routes
app.use('/task', authProtection, taskRoutes);
// Our todo routes
app.use('/task/:taskId/todo', authProtection, todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is up and running at http://localhost:${PORT}`);
});
