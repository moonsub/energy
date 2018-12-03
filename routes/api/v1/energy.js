var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator/check');
const {Elec, Factor, Gas, FactorPercent, EnergyPrice, Sequelize: {Op}} = require('../../../models/index');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET Elec. */
router.get('/elec', [
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
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
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
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
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
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

/* GET Factor Percent. */
router.get('/factor/percent', [
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
], async function (req, res, next) {
    const {building, predict, period, begin, end} = req.query;
    console.log(building, predict, period, begin, end);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const result = await FactorPercent.findAll({
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

/* GET Price. */
router.get('/price', [
        validCheckPeriod(),
        validCheckDate()
    ],
    async function (req, res, next) {
    const {period, begin, end} = req.query;
    console.log(period, begin, end);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const result = await EnergyPrice.findAll({
        where: {
            period       : period,
            datetime     : {
                [Op.gte]: begin,
                [Op.lte]: end
            }

        }
    });
    res.status(200).json(result);

});

function validCheckBuilding() {
    return check('building')
        .exists().withMessage('parameter "building" must be in')
}

function validCheckPredict() {
    return check('predict')
        .isIn(['1', '2']).withMessage('parameter "predict" must be in, 1 : acture, 2 : prediction')
}

function validCheckPeriod() {
    return check('period')
        .isIn(['1', '2', '3', '4']).withMessage('parameter "period" must be in, 1 : 15min, 2 : hour, 3 : day, 4 : month')
}

function validCheckDate() {
    return check('end')
        .exists().withMessage('parameter "end" must be in'),
        check('begin')
            .exists().withMessage('parameter "begin" must be in')
            .custom((value, {req}) => value <= req.query.end).withMessage('Start time must precede end time')
}

module.exports = router;
