const router = require('express').Router()

const ProductController = require('../controllers/products')


/* VERBOS HTTP (4 TIPOS)
GET - Obter dados
POST - Enviar/receber dados
PUT - Atualizar dados
DELETE - Remover dados


*/
router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
router.put('/products/:id', ProductController.put)
router.delete('/products/:id', ProductController.remove)

module.exports = router