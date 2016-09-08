const express = require('express');
const router = express.Router();

const indexController = require('../controllers/kittens');

router.get('/', function (req, res, next) {
  res.send('here');
});

module.exports = router;
