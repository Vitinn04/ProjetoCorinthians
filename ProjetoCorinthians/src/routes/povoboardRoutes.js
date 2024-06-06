var express = require("express");
var router = express.Router();

var povoboardController = require("../controllers/povoboardController");

router.get("/maisEscolhido", function (req, res) {
    povoboardController.maisEscolhido(req, res);
});

router.get("/mediaClick", function (req, res) {
    povoboardController.mediaClick(req, res);
});

router.get("/ranking", function (req, res) {
    povoboardController.ranking(req, res);
});

router.get("/grafico", function (req, res) {
    povoboardController.grafico(req, res);
});

module.exports = router;