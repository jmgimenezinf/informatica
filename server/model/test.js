const calendarIdList = require('../../ignorar/configCalendar').calendarId;
var reservar = require('./fachadaReservaEspecial').reservar;
var verificarEventosReserva = require('./fachadaReservaEspecial').verificarEventosReserva;
var moment = require('moment-timezone');

var startDateTime = moment.tz("2018-03-28 18:00","America/Argentina/Buenos_Aires").format();
var endDateTime = moment.tz("2018-03-28 18:31","America/Argentina/Buenos_Aires").format();

var startDateTime2 = moment.tz("2018-03-28 19:00","America/Argentina/Buenos_Aires").format();
var endDateTime2 = moment.tz("2018-03-28 19:31","America/Argentina/Buenos_Aires").format();

// var startDateTime = moment.tz("2018-03-28 22:00","America/Argentina/Buenos_Aires").format();
// var endDateTime = moment.tz("2018-03-28 22:31","America/Argentina/Buenos_Aires").format();

// var startDateTime2 = moment.tz("2018-03-28 23:00","America/Argentina/Buenos_Aires").format();
// var endDateTime2 = moment.tz("2018-03-28 23:31","America/Argentina/Buenos_Aires").format();

var eventos =[{
    titulo:"evento creado",
    startDateTime:startDateTime, 
    endDateTime:endDateTime
},
{
    titulo:"evento creado",
    startDateTime:startDateTime2, 
    endDateTime:endDateTime2
}

]
var disertante = {
    nombre:"Martín",
    apellido:"Giménez",
    email:"jm.gimenez.inf@gmail.com"
}
//reservar(calendarIdList.dev,"evento creado",disertante,eventos);
function asincronico(){
 return verificarEventosReserva(calendarIdList.dev,eventos);
}

console.log(asincronico());