const express = require('express');
const router = express.Router();
const kittenController = require('../controllers/kittens');
const knex = require('../db/knexfile');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Kittens';
  knex('kittens')
    .then(animals => {
      renderObject.data = animals;
      res.render('kittens', renderObject);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
