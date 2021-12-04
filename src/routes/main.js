const express = require('express');
const router = express.Router();
const {index, login, register, admin, detail, products} = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin');


router.get('/', index)
router.get('/login', login)
router.get('/register', register)
router.get('/admin', accessAdmin, admin)
router.get('/detail', detail)
router.get('/products', products)


module.exports = router;