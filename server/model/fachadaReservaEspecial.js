// IMPORT DB
const Session = require('../db/sessionFactory').SessionFactory;
const Reserva = Session.import('../db/models/reserva');
const Disertante = Session.import('../db/models/disertante');
const Evento = Session.import('../db/models/evento_calendar');

//IMPORT API GOOGLE CALENDAR
const CONFIG = require('../../ignorar/configCalendar');
const CalendarAPI = require('node-google-calendar');
const cal = new CalendarAPI(CONFIG);
const calendarIdList = CONFIG.calendarId;
const obtenerEventos = require('../api/calendar-node/events-calendar').obtenerEventos;
const insertEvent = require('../api/calendar-node/events-calendar').insertEvent;

//IMPORT UTILIDADES
var moment = require('moment-timezone');

//RELACIONES DB
Reserva.belongsTo(Disertante)
Disertante.hasMany(Reserva)
Reserva.hasMany(Evento)
Evento.belongsTo(Reserva)


//Verifica si esta ocupado el evento en el calendar
async function verificarEventoOcupado(calendarId, startDateTime, endDateTime) {
    let eventos = await obtenerEventos(calendarId,startDateTime,endDateTime).catch(()=>{
        reject();
    })
    
    let promesaLibre = new Promise(function (resolve, reject) {
        if (eventos.length == 0) {
            resolve(eventos)
        }
        reject();
    })

    return promesaLibre
}
//Verifica si los eventos siguen aun disponible antes de reservar
 async function verificarEventosReserva(calendarId,eventos) {
    let i = 0;
    let promesas = [];
    
    eventos.forEach(function(evento){
        promesas[i] = verificarEventoOcupado(calendarId,evento.startDateTime,evento.endDateTime);
    })
    return new Promise(function(resolve,reject){
        Promise.all(promesas)
        .then(() => {
            console.log("esta libre");
            resolve(true);
    
        })
        .catch(() => {
            console.log("esta ocupado");
            resolve(false);
        });
    })
}
//Crea un evento en el calendar y lo retorna
async function crearEventoCalendar(calendarId,evento){
    let eventoCreado = await insertEvent(calendarId, 
        evento.titulo, 
        evento.startDateTime, 
        evento.endDateTime,"",1);
    return new Promise(function(resolve,reject){
        resolve(eventoCreado);
    })

}
//Crea una lista de eventos en el calendar y los retorna
async function crearEventosCalendar(calendarId,eventos){
    let eventosCreados=[];
    var i=0;
    eventos.forEach(function(evento){
        let eventoCreado = crearEventoCalendar(calendarId,evento);
        eventosCreados[i]= eventoCreado; 
        i++;
    })

    console.log("los eventos cerdos son" + eventosCreados +"estos")
    return new Promise(function(resolve,reject){
        Promise.all(eventosCreados)
        .then(()=>{
            resolve(eventosCreados); 
        }).catch(()=>{
            reject();
        })
    })
}
// guarda los eventos de una reserva en la DB
function guardarEventos (reserva, eventos) {
    eventos.forEach(function (evento) {
        console.log("evento : 1" + evento)
        Evento.create({
            evento_calendar: evento.id,
            reservaIdReserva: reserva.idReserva
        })
    })
}
//guarda las reservas la DB
function guardarReserva (disertante,eventos) {
    return Reserva.create({
        disertanteIdDisertante:disertante.idDisertante
    });
}
// spread creado es un booleano si se creo o no
function guardarDisertanteReservaEventos(disertante,eventos){
    Disertante.findOrCreate({where:{nombre:disertante.nombre,apellido:disertante.apellido,email:disertante.email}}).spread((disertanteCreado, creado) => {
        guardarReserva(disertanteCreado,eventos)
        .then((reserva)=>{
            guardarEventos(reserva, eventos)});
    });
}

async function reservar(calendarId,disertante,eventos){
  return new Promise(async function(resolve,reject){
      let disponible = await verificarEventosReserva(calendarId,eventos);
      if (disponible) {
         let eventosCreados = await crearEventosCalendar(calendarId,eventos);
         Promise.all(eventosCreados).then((eventosCreados)=>{
             guardarDisertanteReservaEventos(disertante, eventosCreados);
             resolve(true);
         })
      } else {
           console.log("No se creo la reserva, horario ocupado");
           reject(false);
      }
  })  
}

module.exports.reservar = reservar;
module.exports.verificarEventosReserva = verificarEventosReserva;