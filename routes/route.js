const express = require('express');
const router = express.Router();

const {getAllCards, createCard} = require('../controllers/cardController');

const {getAllCustomers, createCustomer, deleteCustomer} = require('../controllers/customerController');

router.post('/customer', createCustomer);

router.get('/customer', getAllCustomers);

router.delete('/customer/:id', deleteCustomer);

router.post('/card', createCard);

router.get('/card', getAllCards);

module.exports = router;