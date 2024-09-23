const express = require("express");
const usuarioDonoController = require("../controllers/usuarioDonoController");

const router = express.Router();

router.get("/", usuarioDonoController.index);

router.get("/:id", usuarioDonoController.show);

router.post("/", usuarioDonoController.store);

router.put("/:id", usuarioDonoController.update);

router.delete("/:id", usuarioDonoController.delete);

module.exports = router;
