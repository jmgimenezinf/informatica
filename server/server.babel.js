import express from 'express';
import React from 'react';
import novedades from './routes/novedades.js';
import http from 'http';


const app = express();
const server = http.createServer(app);
//** Levanta React
app.use(express.static(__dirname + '/../build'));

//** Levantar todos los routes (uno por uno)
app.use(novedades);

// app.listen(3001,function () {
// });


// app.get('/',function(req,res){
//   ...
// })

server.listen(3001,'127.0.0.1',function(){
 server.close(function(){
   server.listen(3001,'127.0.0.1')
   console.log('Servidor estático React-Express-Sequelize port 3001!');
 })
})
