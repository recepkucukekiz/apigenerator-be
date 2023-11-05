const router = require("express").Router();
const controller = require("../controllers/project.controller");

const authentication = require("../middlewares/authentication.middleware");
const authorization = require("../middlewares/authorization.middleware");

router.get("/", [authentication], controller.getAll);
router.get("/:id", [authentication], controller.getById);
router.post("/", [authentication], controller.create);
router.put("/:id", [authentication], controller.update);
router.delete("/:id", [authentication], controller.remove);
router.get("/generate-project/:id", [authentication], controller.generateProject);

module.exports = router;