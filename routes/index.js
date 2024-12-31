const express = require('express');
const petsRouter = require('./pets')
const router = express.Router();

router.use('/pets', petsRouter);

module.exports = router;
