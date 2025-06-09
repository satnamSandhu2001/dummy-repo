const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World 8!');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);

	setTimeout(() => {
		console.log('This message is delayed 10 seconds!');
	}, 10 * 1000);
});
