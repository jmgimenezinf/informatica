import express from 'express';
import React from 'react';
import novedades from './routes/novedades.js';
import tesinas from './routes/tesinas.js';
import http from 'http';
import bodyParser from 'body-parser';
// import novedades from './routes/novedades.js';
 // import  './api-calendar.js';
//import './mail/gmail.1.js';
import email from './routes/email.js';
const app = express();
const server = http.createServer(app);

//** Levanta React
app.use(express.static(__dirname + '/../build'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(function(req, res, next) {
  //en vez de * se puede definir SÓLO los orígenes que permitimos
 // res.setHeader('Access-Control-Allow-Origin', 'http://92.168.183.127:8080');
  res.setHeader('Content-Type','aplication/json')
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  //metodos http permitidos para CORS
  // res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use(email);
app.use(tesinas);
app.use(novedades);

server.listen(8080,'manolito',function(){
 server.close(function(){
   server.listen(8080,'manolito')
   console.log('Servidor estático React-Express-Sequelize port 8080!');
 })
})
