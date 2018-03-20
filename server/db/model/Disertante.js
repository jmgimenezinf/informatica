const Sequelize = require('sequelize');
const session = require('../Session.js').Session;

const Disertante = session.define('disertante', {
    id_disertante: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nombre: {
      type: Sequelize.STRING
    },
    apellido: {
      type: Sequelize.STRING
    },
    email:{
        type : Sequelize.STRING
    }
  },{
    freezeTableName: true
});

module.exports ={Disertante}
