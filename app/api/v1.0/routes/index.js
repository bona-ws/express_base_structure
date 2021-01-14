const express = require("express");
const router = express.Router();

const controllers = require("../controllers/");

const { test } = controllers;

// test
router.get("/test", test);

module.exports = router;
