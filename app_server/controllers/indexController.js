var express = require('express');
var router = express.Router();

/* /api */
exports.index = ( function(req, res, next) {
  res.render('index', { title: 'Open Restaurant' });
});

