const dotenv = require("dotenv").config({
	path:
		process.env.NODE_ENV === "development"
			? "development.env"
			: "production.env",
});

const router = require("express").Router();

module.exports = { dotenv, router };
