'use strict'
const express = require('express');
const router = express.Router();
const transCtrl = require('../controllers/transactionsController')

/* GET users listing. */
router.get('/', transCtrl.getAll);
router.get('/:id', transCtrl.getOne);
router.post('/checkout', transCtrl.checkout);
router.put('/:id', transCtrl.update)
router.delete('/:id', transCtrl.remove)

module.exports = router;
