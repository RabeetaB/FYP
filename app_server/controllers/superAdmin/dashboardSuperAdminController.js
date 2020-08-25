var express = require('express');
var router = express.Router();
var authenticate = require('../../../authenticate');

/* GET home page. */
exports.dashboard = ( authenticate.verifyUser, authenticate.verifyAdmin, function(req, res, next) {
    res.send('Admin with a Dashboard');

});
