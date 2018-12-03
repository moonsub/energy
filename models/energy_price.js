/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('energy_price', {
    datetime: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    period: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    elec: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gas: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    tableName: 'energy_price'
  });
};
