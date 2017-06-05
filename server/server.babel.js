import express from 'express';
import React from 'react';
import novedades from './routes/novedades.js';
import http from 'http';


const app = express();
const server = http.createServer(app);
//** Levanta React
app.use(express.static(__dirname + '/../build'));

//** Levantar todos los routes (uno por uno)

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(novedades);

server.listen(3001,'127.0.0.1',function(){
 server.close(function(){
   server.listen(3001,'127.0.0.1')
   console.log('Servidor estático React-Express-Sequelize port 3001!');
 })
})
