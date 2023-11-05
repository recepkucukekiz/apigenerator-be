const config = {
	app: {
		port: parseInt(process.env.HTTP_PORT, 10),
		env: process.env.NODE_ENV
	},
	db: {
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		server: process.env.DB_HOST,
		database: process.env.DB_NAME,
		port: parseInt(process.env.DB_PORT, 10),
		dialect: process.env.DB_DIALECT
	},
	jwt: {
		secret: process.env.JWT_SECRET
	},
};

module.exports = config;