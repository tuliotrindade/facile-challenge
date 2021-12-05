const express = require('express');

const cryptor = require('../middlewares/cryptor')
const { findById, newEncriptedName } = require('../controllers/cryptorController');
const validateName = require('../middlewares/validateName');

const errorMiddleware = require('../middlewares/errorMiddleware')

const router = express.Router();

router.get('/:id', findById);

router.post('/', validateName, cryptor, newEncriptedName);

router.use(errorMiddleware);

module.exports = router;