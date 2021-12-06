const express = require('express');

const cryptor = require('../middlewares/cryptor')
const { findById, newEncriptedName, findAll } = require('../controllers/cryptorController');
const validateName = require('../middlewares/validateName');

const errorMiddleware = require('../middlewares/errorMiddleware')

const router = express.Router();

router.get('/all', findAll)

router.get('/:id', findById);

router.post('/', validateName, cryptor, newEncriptedName);

router.use(errorMiddleware);

module.exports = router;