var express = require('express');
var router = express.Router();

var energyRouter = require('./energy');


router.use('/', energyRouter);

module.exports = router;
