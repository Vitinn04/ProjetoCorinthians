var express = require("express");
var router = express.Router();

var timaoClickerController = require("../controllers/timaoClickerController");

//Recebendo os dados do html e direcionando para a função cadastrar de timaoClickerController.js
router.post("/enviarJogo", function (req, res) {
    timaoClickerController.enviarJogo(req, res);
})

module.exports = router;