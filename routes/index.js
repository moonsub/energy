var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator/check');
const {Elec, Factor, Gas, Sequelize: {Op}} = require('../models');

const PREDICT_ERR_MESSAGE = 'predict is not correct, 1 : acture, 2 : prediction'
const PERIOD_ERR_MESSAGE = 'period is not correct, 1 : 15min, 2 : hour, 3 : day, 4 : month'
const DATE_ERR_MESSAGE = 'Start time must precede end time'
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET Elec. */
router.get('/elec', [
    check('building').exists(),
    check('predict').exists().isIn(['1', '2']).withMessage(PREDICT_ERR_MESSAGE),
    check('period').exists().isIn(['1', '2', '3', '4']).withMessage(PERIOD_ERR_MESSAGE),
    check('end').exists(),
    check('begin')
        .custom((value, {req}) => value <= req.query.end).withMessage(DATE_ERR_MESSAGE)
], async function (req, res, next) {
    const {building, predict, period, begin, end} = req.query;
    console.log(building, predict, period, begin, end);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const result = await Elec.findAll({
        where: {
            building_code: building,
            gubun_code   : predict,
            period       : period,
            datetime     : {
                [Op.gte]: begin,
                [Op.lte]: end
            }

        }
    });
    res.status(200).json(result);

});

/* GET Factor. */
router.get('/factor', [
    check('building').exists(),
    check('predict').exists().isIn(['1', '2']).withMessage(PREDICT_ERR_MESSAGE),
    check('period').exists().isIn(['1', '2', '3', '4']).withMessage(PERIOD_ERR_MESSAGE),
    check('end').exists(),
    check('begin')
        .custom((value, {req}) => value <= req.query.end).withMessage(DATE_ERR_MESSAGE)
], async function (req, res, next) {
    const {building, predict, period, begin, end} = req.query;
    console.log(building, predict, period, begin, end);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const result = await Factor.findAll({
        where: {
            building_code: building,
            gubun_code   : predict,
            period       : period,
            datetime     : {
                [Op.gte]: begin,
                [Op.lte]: end
            }

        }
    });
    res.status(200).json(result);

});

/* GET Gas. */
router.get('/gas', [
    check('building').exists(),
    check('predict').exists().isIn(['1', '2']).withMessage(PREDICT_ERR_MESSAGE),
    check('period').exists().isIn(['1', '2', '3', '4']).withMessage(PERIOD_ERR_MESSAGE),
    check('end').exists(),
    check('begin')
        .custom((value, {req}) => value <= req.query.end).withMessage(DATE_ERR_MESSAGE)
], async function (req, res, next) {
    const {building, predict, period, begin, end} = req.query;
    console.log(building, predict, period, begin, end);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const result = await Gas.findAll({
        where: {
            building_code: building,
            gubun_code   : predict,
            period       : period,
            datetime     : {
                [Op.gte]: begin,
                [Op.lte]: end
            }

        }
    });
    res.status(200).json(result);

});

module.exports = router;
