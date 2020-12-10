const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradorasController");

router.get("/", controller.getAll);
router.get("/colaboradoras", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postColaboradoras)
router.delete("/:id", controller.deleteColaboradora)



module.exports = router;
