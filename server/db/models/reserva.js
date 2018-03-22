/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserva', {
    idReserva: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disertanteIdDisertante: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'disertante',
        key: 'idDisertante'
      }
    }
  }, {
    tableName: 'reserva'
  });
};
