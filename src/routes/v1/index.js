const express = require("express");
const router = express.Router();
const UserController = require("../../controller/user_controller");

router.post("/signup", UserController.create);
router.post("/signin", UserController.signIn);
module.exports = router;
