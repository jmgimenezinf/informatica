/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento_calendar', {
    idEvento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    evento_calendar: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    reservaIdReserva: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'reserva',
        key: 'idReserva'
      }
    }
  }, {
    tableName: 'evento_calendar'
  });
};
