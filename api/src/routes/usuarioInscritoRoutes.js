const express = require("express");
const usuarioInscritoController = require("../controllers/usuarioInscritoController");

const router = express.Router();

router.get("/", usuarioInscritoController.index);

router.get("/:id", usuarioInscritoController.show);

router.post("/", usuarioInscritoController.store);

router.put("/:id", usuarioInscritoController.update);

router.delete("/:id", usuarioInscritoController.delete);

module.exports = router;
