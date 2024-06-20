const express = require('express');
const { getDetails } = require('../Controllers/details');

const router = express.Router();

router
.route('/:name')
.get(getDetails);

module.exports = {router};