var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/listar", function (req, res) {
    comentariosController.listar(req, res);
});

router.get("/listar/:idCorinthiano", function (req, res) {
    comentariosController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    comentariosController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idCorinthiano", function (req, res) {
    comentariosController.publicar(req, res);
});

router.delete("/deletar/:idComentario", function (req, res) {
    comentariosController.deletar(req, res);
});

module.exports = router;