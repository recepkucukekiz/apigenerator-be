const router = require("express").Router();
const controller = require("../controllers/auth.controller");

const authentication = require("../middlewares/authentication.middleware");
const authorization = require("../middlewares/authorization.middleware");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/refresh-token", [authentication], controller.refreshToken);
router.post("/logout", controller.logout);

module.exports = router;