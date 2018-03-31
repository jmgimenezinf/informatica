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


//Verifica si esta ocupado el evento
async function verificarEventoOcupado(calendarId, startDateTime, endDateTime) {
    eventos = await obtenerEventos(calendarId,startDateTime,endDateTime)
    
    promesaLibre = new Promise(function (resolve, reject) {
        if (eventos.length == 0) {
            resolve()
        }
        reject()
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
    
    Promise.all(promesas)
    .then(() => {
        console.log("esta libre");
        return true;
    })
    .catch(() => {
        console.log("esta ocupado");
        return false;
    });
}
//Crea los eventos y retorna los id de los eventos creado por la API
function crearEventos(calendarId,eventos){
    return new Promise(function(resolve,reject){
        var eventosCreados=[];
        var i=0;
        eventos.forEach(function(evento){
            eventosCreados[i]=insertEvent(calendarId, 
                evento.titulo, 
                evento.startDateTime, 
                evento.endDateTime,"",1)
            i++;
        })
        resolve(eventosCreados);
    })
}

function guardarEventos (reserva, eventos) {
    return eventos.forEach(function (evento) {
        Evento.create({
            evento_calendar: evento.id,
            reservaIdReserva: reserva.idReserva,
        })
    })
}

function guardarReserva (disertante) {
    return Reserva.findOrCreate({
        where: {
            nombre: disertante.nombre,
            apellido: disertante.apellido,
            email: disertante.email
        }
    })
    .then((reserva) => guardarEventos(reserva, eventos))
}

function reservar(calendarId,titulo,disertante,eventos){
    verificarEventosReserva(calendarId,eventos).then(()=>{
        crearEventos(calendarId,eventos).then((eventosCreados)=>{
            Disertante.findOrCreate({where:{nombre:disertante.nombre,apellido:disertante.apellido,email:disertante.email}}).spread((disertanteCreado, creado) => {
                guardarReserva(disertante)
            });
        })
    }).catch((eventos)=>{
        console.log(eventos)
    })

    // if (verificarEventosReserva(calendarId,eventos)){
    //     crearEventos(calendarId,eventos).then((eventosId)=>{
    //         if (eventosId!==[]){
    //             Disertante.findOrCreate({where:{nombre:disertante.nombre,apellido:disertante.apellido,email:disertante.email}}).spread((disertanteCreado, creado) => {
    //                 Reserva.create({titulo:titulo,disertanteIdDisertante:disertanteCreado.idDisertante}).then((reserva)=>{
    //                     eventosId.forEach(function(evento) {
    //                         Evento.create({evento_calendar:evento.id,reservaIdReserva:reserva.idReserva});
    //                     });    
    //                 });
    //             });
    //         }
    //     })
    // }else { console.log("ocupado")}
}

module.exports.reservar = reservar;
module.exports.verificarEventosReserva = verificarEventosReserva;