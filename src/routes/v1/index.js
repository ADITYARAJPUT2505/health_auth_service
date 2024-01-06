const express = require("express");
const router = express.Router();
const UserController = require("../../controller/user_controller");

const { AuthRequestValidator } = require("../../middlewares/index");

router.post("/signup", UserController.create);
router.post("/signin", UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
module.exports = router;
