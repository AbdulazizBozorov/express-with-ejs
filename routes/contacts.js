const express = require('express');
const {getContact} = require('../controllers/contacts');

const router = express.Router();


router.get("/contacts",getContact);

module.exports = router