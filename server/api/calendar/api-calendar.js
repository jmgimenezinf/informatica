var apiCalendar = require('./api-calendar-conection').processFunction;
var auth = require('./api-calendar-conection').auth;
var google = require('googleapis');
var googleAuth = require('google-auth-library');

function estaOcupado(auth,fechaIncio,fechaFin) {
  var calendar = google.calendar('v3');
  calendar.events.list({
    auth: auth,
    calendarId: 'fd7mr7mrcjct59asoqkr85ldl0@group.calendar.google.com',
   //calendarId:'tao3m8995uh139qalvbcatc9o8@group.calendar.google.com',
    // timeMin: new Date('2018-03-26T13:00:00-03:00').toISOString(),
    timeMin: new Date(fechaIncio).toISOString(),
    timeMax:new Date(fechaFin).toISOString(),
    maxResults: 100,
    singleEvents: false,
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var events = response.items;
    if (events.length == 0) {
      console.log('No upcoming events found.');
    } else {
      console.log('Upcoming 10 events:');
      for (var i = 0; i < events.length; i++) {
        var event = events[i];
      }
    }
  });
}

apiCalendar(estaOcupado(auth));