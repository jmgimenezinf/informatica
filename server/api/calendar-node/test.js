const CONFIG = require('../../../ignorar/configCalendar');
const CalendarAPI = require('node-google-calendar');
const cal = new CalendarAPI(CONFIG);
const calendarIdList = CONFIG.calendarId;
const timezone = CONFIG.timezone;
const listRecurringEventsWithinDateRange = require('./events-calendar.js').listRecurringEventsWithinDateRange;
const obtenerEventos = require('./events-calendar.js').obtenerEventos;
const insertEvent = require('./events-calendar.js').insertEvent;
const insertEventSample = require('./events-calendar.js').insertEventSample;
var moment = require('moment-timezone');



var startDateTime = moment.tz("2018-03-27 15:00","America/Argentina/Buenos_Aires").format();
var endDateTime = moment.tz("2018-03-27 15:31","America/Argentina/Buenos_Aires").format();

// var eventos = obtenerEventos(calendarIdList["production"],
// startDateTime,endDateTime);

// var evento = insertEvent(calendarIdList["dev"], 
// 	"evento creado", 
// 	startDateTime, 
// 	endDateTime);
var titulo = "probando";
var evento = insertEvent(calendarIdList["dev"],titulo,startDateTime,endDateTime,"",1);

 console.log(evento);