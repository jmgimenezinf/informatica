const CONFIG = require('../../../ignorar/configCalendar');
const CalendarAPI = require('node-google-calendar');
const cal = new CalendarAPI(CONFIG);
const calendarIdList = CONFIG.calendarId;
const timeZone= CONFIG.timezone;

function listRecurringEventsWithinDateRange(calendarId, startDateTime, endDateTime) {
	let eventsArray = [];
	let params = {
        timeMin: startDateTime,
		timeMax: endDateTime,
		singleEvents: false
	}

	return cal.Events.list(calendarId, params)
		.then(json => {
			for (let i = 0; i < json.length; i++) {
				let event = {
					id: json[i].id,
					summary: json[i].summary,
					location: json[i].location,
					start: json[i].start,
					end: json[i].end,
					status: json[i].status
				};
				eventsArray.push(event);
			}
			console.log('List of recurring events on calendar within time-range:');
			console.log(eventsArray);
			return eventsArray;
		}).catch(err => {
			console.log('Error: listRecurringEventsWithinDateRange', err.message);
		});
}

var startDateTime = new Date(Date.UTC(2018,03,27,9,0,0,0)).toISOString();
var endDateTime = new Date(Date.UTC(2018,03,27,16,0,0,0)).toISOString();
console.log(startDateTime);
listRecurringEventsWithinDateRange(calendarIdList["production"],
startDateTime,endDateTime);