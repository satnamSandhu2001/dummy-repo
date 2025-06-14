function connectDB() {
	console.log('connecting to database...');

	setTimeout(() => {
		console.log('Connected to DB');
	}, 4000);
}

module.exports = {
	connectDB,
};
