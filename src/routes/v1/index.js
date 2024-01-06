const express = require("express");
const router = express.Router();
const UserController = require("../../controller/user_controller");

const { AuthRequestValidator } = require("../../middlewares/index");

router.post("/signup", AuthRequestValidator.validateUserSignin);
router.post("/signin", AuthRequestValidator.validateUserSignin);
module.exports = router;
