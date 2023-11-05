const router = require("express").Router();
const controller = require("../controllers/model.controller");

const authentication = require("../middlewares/authentication.middleware");
const authorization = require("../middlewares/authorization.middleware");

router.get("/:id", [authentication], controller.getById);
router.get("/get-all-by-project-id/:projectId", [authentication], controller.getAllByProjectId);
router.post("/", [authentication], controller.create);
// router.put("/:id", controller.update);
router.delete("/:id", [authentication], controller.remove);

module.exports = router;