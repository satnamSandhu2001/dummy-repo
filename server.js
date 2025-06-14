const express = require('express');
const { connectDB } = require('./db');
const app = express();
const port = 7500;

app.get('/', (req, res) => {
	res.send('Hello World 9!');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);

	connectDB();
});
