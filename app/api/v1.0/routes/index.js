const { router } = require("../../../../config");
const controllers = require("../controllers/index.js");

const { test } = controllers;

// test
router.post("/test", test);

// export default router;
