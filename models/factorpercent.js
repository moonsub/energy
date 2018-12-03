/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('factorpercent', {
    town_code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    building_code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    gubun_code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    period: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    datetime: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    temp: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    hum: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rain: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wind_deg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    wind_speed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pm10: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    o3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    unknown: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'factorpercent'
  });
};
