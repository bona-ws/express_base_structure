const express = require("express");
const router = express.Router();

const v1 = require("./v1.0/routes");
// const v2 = require("./v2.0/routes/");

router.use("/v1.0", v1);

module.exports = router;
