const Disertante = require('./Disertante').Disertante;
const Sequelize = require('sequelize');
const Session = require('../Session.js').Session;

const Reserva = Session.define('reserva', {
    id_reserva: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }
  },{
    freezeTableName: true
});
Reserva.hasOne(Disertante);

module.exports ={Reserva}
