var express = require('express');
var router  = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var reservar = require('../model/fachadaReservaEspecial').reservar;
var verificarEventoOcupado = require('../model/fachadaReservaEspecial').verificarEventoOcupado;
const calendarIdList = require('../../ignorar/configCalendar').calendarId;
var moment = require('moment-timezone');

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
router.post('/validar-evento',jsonParser,function(req, res) {
    let evento ={
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        horaInicio:req.body.horaInicio,
        horaFin:req.body.horaFin,
        libre: req.body.libre
    } 
     let momentFecha = moment.tz(evento.fecha,'America/Argentina/Buenos_Aires');

    let momentStart = moment.tz(evento.horaInicio,'America/Argentina/Buenos_Aires');
    let momentEnd = moment.tz(evento.horaFin,'America/Argentina/Buenos_Aires');

    let fecha = momentFecha.toDate();
    let start= momentStart.toDate();
    let end = momentEnd.toDate();

    start.setDate(fecha.getDate());
    end.setDate(fecha.getDate());
    start.setSeconds(0);
    start.setMilliseconds(0);
    end.setSeconds(0);
    end.setMilliseconds(0);

    let startDateTime = moment.tz(start.toISOString(),'America/Argentina/Buenos_Aires').format();
    let endDateTime   = moment.tz(end.toISOString(),'America/Argentina/Buenos_Aires').format();
    
    console.log("inicio: "+startDateTime + " fin: "+endDateTime + " fecha: "+fecha);
    let respuesta = verificarEventoOcupado(
        calendarIdList.production,
        startDateTime,
        endDateTime)
    .then((resp)=>{
        res.send(true)
    }).catch(()=>{
        res.send(false)
    });
});


module.exports = router;
