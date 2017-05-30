import express from 'express';
import React from 'react';

const app = express();

//** Levanta React
app.use(express.static(__dirname + '/../build'));

//** Levantar todos los routes (uno por uno)

app.listen(3001,function () {
  console.log('Servidor estático React-Express-Sequelize port 3001!');
});

