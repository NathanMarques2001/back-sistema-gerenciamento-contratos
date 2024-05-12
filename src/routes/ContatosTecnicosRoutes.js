const express = require('express');
const ContatoTecnicoController = require('../controllers/ContatoTecnicoController.js');
const router = express.Router();

router.get('/', ContatoTecnicoController.indexAll);

router.get('/:id', (req, res) => {
  return res.send('CONTATOS TÉCNICOS DO contato COM ID: ' + req.params.id);
});

router.post('/', (req, res) => {
  return res.send('CONTATO TÉCNICO CRIADO');
});

router.put('/:id', (req, res) => {
  return res.send('CONTATO TÉCNICO ATUALIZADO COM ID: ' + req.params.id);
});

router.delete('/:id', (req, res) => {
  return res.send('CONTATO TÉCNICO DELETADO COM ID: ' + req.params.id);
});

module.exports = router;