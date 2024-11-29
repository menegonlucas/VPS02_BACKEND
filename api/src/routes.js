const express = require('express')
const router = express.Router()

const clientes = require('../src/controllers/clientescontroller.js')
const fornecedores = require('./controllers/fornecedorescontroller.js')
const produtos = require('../src/controllers/produtoscontroller.js')
const pedidos = require('../src/controllers/pedidoscontroller.js')
const telefone = require('../src/controllers/telefonecontroller.js')

router.post('/clientes', clientes.create);
router.get('/clientes', clientes.read);
router.put('/clientes', clientes.update);
router.delete('/clientes/:id', clientes.deletar);

router.post('/fornecedores', fornecedores.create);
router.get('/fornecedores', fornecedores.read);
router.put('/fornecedores', fornecedores.update);
router.delete('/fornecedores/:id', fornecedores.deletar);

router.post('/produtos', produtos.create);
router.get('/produtos', produtos.read);
router.put('/produtos', produtos.update);
router.delete('/produtos/:id', produtos.deletar);

router.post('/pedidos', pedidos.create);
router.get('/pedidos', pedidos.read);
router.put('/pedidos', pedidos.update);
router.delete('/pedidos/:id', pedidos.deletar);

router.post('/telefone', telefone.create);
router.get('/telefone', telefone.read);
router.put('/telefone', telefone.update);
router.delete('/telefone/:id', telefone.deletar);


module.exports = router;