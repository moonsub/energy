var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator/check');
const {Elec, Factor, Gas, Sequelize: {Op}} = require('../models');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET Elec. */
router.get('/elec', checkQuery(), async function (req, res, next) {
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
router.get('/factor', checkQuery(), async function (req, res, next) {
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
router.get('/gas', checkQuery(), async function (req, res, next) {
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

function checkQuery() {
    return [
        check('building')
            .exists().withMessage('building must be in'),
        check('predict')
            .isIn(['1', '2']).withMessage('predict must be in, 1 : acture, 2 : prediction'),
        check('period')
            .isIn(['1', '2', '3', '4']).withMessage('period must be in, 1 : 15min, 2 : hour, 3 : day, 4 : month'),
        check('end')
            .exists().withMessage('end must be in'),
        check('begin')
            .exists().withMessage('begin must be in')
            .custom((value, {req}) => value <= req.query.end).withMessage('Start time must precede end time')
    ]
}

module.exports = router;
