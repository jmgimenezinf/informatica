var express = require('express');
var router  = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var reservar = require('../model/fachadaReservaEspecial').reservar;
const calendarIdList = require('../../ignorar/configCalendar').calendarId;

router.post('/reserva-especial',jsonParser,async function(req, res) {
    let titulo = req.body.titulo;
    let disertante = req.body.disertante;
    let eventos = req.body.eventos;
    let eventosConTitulo = eventos.map((evento)=>{
        evento.titulo = titulo;
    })
    let respuesta = await reservar(calendarIdList.dev,disertante,eventosConTitulo);
    respuesta
    .then((resp)=>{
        res.send(resp)
    });
});

module.exports = router;
