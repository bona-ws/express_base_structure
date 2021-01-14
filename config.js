const dotenv = require("dotenv").config({
	path:
		process.env.NODE_ENV === "development"
			? "development.env"
			: "production.env",
});

module.exports = { dotenv };
