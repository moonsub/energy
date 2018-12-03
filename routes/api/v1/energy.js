var express = require('express');
var router = express.Router();
const {check, validationResult} = require('express-validator/check');
<<<<<<< HEAD
const {Elec, Factor, Gas, FactorPercent, EnergyPrice, Sequelize: {Op}} = require('../../../models/index');
=======
const {Elec, Factor, Gas, FactorPercent, Sequelize: {Op}} = require('../../../models/index');
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET Elec. */
<<<<<<< HEAD
router.get('/elec', [
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
], async function (req, res, next) {
=======
router.get('/elec', checkQuery(), async function (req, res, next) {
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
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
<<<<<<< HEAD
router.get('/factor', [
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
], async function (req, res, next) {
=======
router.get('/factor', checkQuery(), async function (req, res, next) {
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
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
<<<<<<< HEAD
router.get('/gas', [
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
], async function (req, res, next) {
=======
router.get('/gas', checkQuery(), async function (req, res, next) {
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
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
<<<<<<< HEAD
router.get('/factor/percent', [
    validCheckBuilding(),
    validCheckPeriod(),
    validCheckPredict(),
    validCheckDate()
], async function (req, res, next) {
=======
router.get('/factor/percent', checkQuery(), async function (req, res, next) {
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
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
<<<<<<< HEAD
router.get('/price', [
        validCheckPeriod(),
        validCheckDate()
    ],
    async function (req, res, next) {
    const {period, begin, end} = req.query;
    console.log(period, begin, end);
    const errors = validationResult(req);

=======
router.get('/price', checkQuery(), async function (req, res, next) {
    const {building, predict, period, begin, end} = req.query;
    console.log(building, predict, period, begin, end);
    const errors = validationResult(req);
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

<<<<<<< HEAD
    const result = await EnergyPrice.findAll({
        where: {
=======
    const result = await FactorPercent.findAll({
        where: {
            building_code: building,
            gubun_code   : predict,
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
            period       : period,
            datetime     : {
                [Op.gte]: begin,
                [Op.lte]: end
            }

        }
    });
    res.status(200).json(result);

});

<<<<<<< HEAD
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
=======

function checkQuery() {
    return [
        check('building')
            .exists().withMessage('parameter "building" must be in'),
        check('predict')
            .isIn(['1', '2']).withMessage('parameter "predict" must be in, 1 : acture, 2 : prediction'),
        check('period')
            .isIn(['1', '2', '3', '4']).withMessage('parameter "period" must be in, 1 : 15min, 2 : hour, 3 : day, 4 : month'),
        check('end')
            .exists().withMessage('parameter "end" must be in'),
        check('begin')
            .exists().withMessage('parameter "begin" must be in')
            .custom((value, {req}) => value <= req.query.end).withMessage('Start time must precede end time')
    ]
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd
}

module.exports = router;
