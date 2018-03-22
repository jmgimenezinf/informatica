const db = require('../../ignorar/config.js').db;
const passDB = require('../../ignorar/config.js').passDB;
const username = require('../../ignorar/config.js').username;

const Sequelize = require('sequelize');
const SessionFactory = new Sequelize(db,username,passDB, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports ={SessionFactory}