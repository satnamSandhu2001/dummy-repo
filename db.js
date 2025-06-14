function connectDB() {
	console.log('connecting to database...');

	setTimeout(() => {
		console.log('Connected to DB');
	}, 5000);
}

module.exports = {
	connectDB,
};
