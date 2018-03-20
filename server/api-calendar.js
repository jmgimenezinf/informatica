var apiCalendar = require('./api-calendar-conection').processFunction;
var google = require('googleapis');
var googleAuth = require('google-auth-library');

function listEvents(auth) {
  console.log("auth test:",auth);
  var calendar = google.calendar('v3');
 // console.log(auth);
  calendar.events.list({
    auth: auth,
   // calendarId: 'fd7mr7mrcjct59asoqkr85ldl0@group.calendar.google.com',
   calendarId:'tao3m8995uh139qalvbcatc9o8@group.calendar.google.com',
    timeMin: new Date().toISOString(),
    maxResults: 100,
    singleEvents: false,
    // orderBy: 'startTime'
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
        var start = event.start.dateTime || event.start.date;
        // console.log('%s - %s', start, event.summary, event.id, event.final.date);
        // console.log(event);
        if (event.recurrence == null){
          console.log(event.recurrence);
        }else {
          console.log(event.recurrence);
        }
      }
    }
  });
}

apiCalendar(listEvents);