const Reserva = require('./Reserva').Reserva;
const Sequelize = require('sequelize');
const Session = require('../Session.js').Session;


const EventoCalendar = Session.define('evento_calendar', {
    id_evento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    evento_calendar: {
      type: Sequelize.STRING
    },
  },{
    freezeTableName: true
});

EventoCalendar.hasOne(Reserva);
module.exports ={EventoCalendar}
