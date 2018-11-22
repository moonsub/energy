/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elec', {
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
    cool: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    heat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    light: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    water: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    air: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    etc: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pv: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'elec'
  });
};
