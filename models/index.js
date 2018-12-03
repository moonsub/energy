'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Elec = require('./elec')(sequelize, Sequelize);
db.Factor = require('./factor')(sequelize, Sequelize);
db.Gas = require('./gas')(sequelize, Sequelize);
db.FactorPercent = require('./factorpercent')(sequelize, Sequelize);
<<<<<<< HEAD
db.EnergyPrice = require('./energy_price')(sequelize, Sequelize);
=======
>>>>>>> 9a29ffa20b98766e6a63c099ee0a75ff018271fd

module.exports = db;