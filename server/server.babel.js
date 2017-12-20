import express from 'express';
import React from 'react';
import novedades from './routes/novedades.js';
import tesinas from './routes/tesinas.js';
import planesEstudio from './routes/planes-estudio.js';
import http from 'http';
import bodyParser from 'body-parser';
import os from 'os';
import './routes/pdfmake.js';
import email from './routes/email.js';
// import './mail/gmail.js';
import {url,port} from '../ignorar/config.js';
import path from 'path';


var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

const app = express();
const server = http.createServer(app);

//** Levanta React
//app.use(express.static(__dirname + '/../build'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  //en vez de * se puede definir SÓLO los orígenes que permitimos
 // res.setHeader('Access-Control-Allow-Origin', 'http://92.168.183.127:8080');
    // res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); 
  //metodos http permitidos para CORS
//   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(email);
app.use(tesinas);
app.use(novedades);
app.use(planesEstudio);

server.listen(port, addresses, function(){ 
 server.close(function(){
    console.log(path.dirname(__dirname));
   server.listen(port,addresses)
   console.log('Servidor estático React-Express-Sequelize port '+port+' '+ addresses);
 })
})
