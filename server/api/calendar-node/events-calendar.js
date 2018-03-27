const CONFIG = require('../../../ignorar/configCalendar');
const CalendarAPI = require('node-google-calendar');
const cal = new CalendarAPI(CONFIG);

function listAllEventsInCalendar(calendarId) {
	let eventsArray = [];
	let params = {};
	return cal.Events.list(calendarId, params, {})
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
			console.log('List of all events on calendar');
			console.log(eventsArray);
			return eventsArray;
		}).catch(err => {
			console.log('Error: listAllEventsInCalendar', err.message);
		});
}

function listSingleEventsWithinDateRange(calendarId, startDateTime, endDateTime, query) {
	let eventsArray = [];
	let params = {
		timeMin: startDateTime,
		timeMax: endDateTime,
		q: query,
		singleEvents: true,
		orderBy: 'startTime'
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
			console.log('List of events on calendar within time-range:');
			console.log(eventsArray);
			return eventsArray;
		}).catch(err => {
			console.log('Error: listSingleEventsWithinDateRange', err.message);
		});
}

function listRecurringEventsWithinDateRange(calendarId, startDateTime, endDateTime, query) {
	let eventsArray = [];
	let params = {
		timeMin: startDateTime,
		timeMax: endDateTime,
		q: query,
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

function getEvent(calendarId, eventId) {
	let params = { timeZone: 'Asia/Singapore' };

	return cal.Events.get(calendarId, eventId, params)
		.then(resp => {
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: getEvent', JSON.parse(err.message));
		});
}

function quickAddEvent(calendarId, text) {
	let params = {
		'text': text
	}

	return cal.Events.quickAdd(calendarId, params)
		.then(resp => {
			console.log('inserted quickAddEvent:');
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: quickAddEvent', err.message);
		});
}

function insertEventWithAttendee(calendarId, eventSummary, startDateTime, endDateTime, location, status, description, attendeeName, attendeeEmail) {
	let event = {
		'start': {
			'dateTime': startDateTime
		},
		'end': {
			'dateTime': endDateTime
		},
		'location': location,
		'summary': eventSummary,
		'status': status,
		'description': description,
		'colorId': 1,
		"attendees": [
			{
				"email": attendeeEmail,
				"displayName": attendeeName
			}
		]
	};
	return cal.Events.insert(calendarId, event)
		.then(resp => {
			console.log('inserted event with attendee:');
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: insertEventWithAttendee', err.message);
		});
}

function insertEventSample(calendarId) {
	let params = {
		'summary': 'Sample Event with reminders',
		'start': { 'dateTime': '2017-10-15T21:30:00+08:00' },
		'end': { 'dateTime': '2017-10-15T22:00:00+08:00' },
		'description': '',
		'status': 'confirmed',
		'colorId': 3,
		"reminders": {
			"useDefault": false,
			"overrides": [
				{ "method": "email", "minutes": 25 },
				{ "method": "popup", "minutes": 20 }
			]
		},
		'attendees': [{ 'email': 'yuhong90@gmail.com' }]
	};
	let optionalQueryParams = {
		sendNotifications: true
	};

	return cal.Events.insert(calendarId, params, optionalQueryParams)
		.then(resp => {
			console.log('inserted event:');
			console.log(resp);
		})
		.catch(err => {
			console.log('Error: insertEvent', err.message);
		});
}

function insertEvent(calendarId, eventSummary, startDateTime, endDateTime, location, status, description) {
	let event = {
		'start': {
			'dateTime': startDateTime
		},
		'end': {
			'dateTime': endDateTime
		},
		'location': location,
		'summary': eventSummary,
		'status': status,
		'description': description,
		'colorId': 1
	};
	let optionalQueryParams = {
		sendNotifications: true
	};

	return cal.Events.insert(calendarId, event, optionalQueryParams)
		.then(resp => {
			console.log(resp);
			let results = {
				id: resp.id,
				'summary': resp.summary,
				'location': resp.location,
				'status': resp.status,
				'start': resp.start.dateTime,
				'end': resp.end.dateTime,
				'created': new Date(resp.created)
			};
			console.log('inserted event:');
			console.log(results);
			return results;
		})
		.catch(err => {
			console.log('Error: insertEvent', err.message);
		});
}

function insertRecurringEvent(calendarId, eventSummary, startDateTime, endDateTime, location, status, description, recurrenceRule) {
	let event = {
		'start': {
			'dateTime': startDateTime,
			'timeZone': 'Asia/Singapore'
		},
		'end': {
			'dateTime': endDateTime,
			'timeZone': 'Asia/Singapore'
		},
		'location': location,
		'summary': eventSummary,
		'status': status,
		'description': description,
		'colorId': 1,
		'recurrence': recurrenceRule
	};

	cal.Events.insert(calendarId, event)
		.then(resp => {
			console.log('inserted event:');
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: insertRecurringEvent-' + err.message);
		});
}

function updateEvent(calendarId, eventId, eventSummary, startDateTime, endDateTime, location, status, description, recurrenceRule) {
	let event = {
		'start': {
			'dateTime': startDateTime,
			'timeZone': 'Asia/Singapore'
		},
		'end': {
			'dateTime': endDateTime,
			'timeZone': 'Asia/Singapore'
		},
		'location': location,
		'summary': eventSummary,
		'status': status,
		'description': description,
		'recurrence': recurrenceRule,
		'reminders': {
			'useDefault': false,
			'overrides':
			[{ 'method': 'popup', 'minutes': '25' },
			{ 'method': 'email', 'minutes': '20' }]
		}
	};
	let optionalQueryParams = { sendNotifications: true };

	cal.Events.update(calendarId, eventId, event, optionalQueryParams)
		.then(resp => {
			console.log('updated event:');
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: updatedEvent', err.message);
		});
}

function deleteEvent(calendarId, eventId) {
	let params = {
		sendNotifications: true
	};
	return cal.Events.delete(calendarId, eventId, params)
		.then(resp => {
			console.log('Deleted Event Response: ');
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: deleteEvent', JSON.parse(err.message));
		});
}

function eventInstances(calendarId, eventId) {
	let params = {};

	return cal.Events.instances(calendarId, eventId, params)
		.then(resp => {
			console.log('eventInstances: ' + eventId);
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: eventInstances' + err.message);
		});
}

function moveEvent(calendarId, eventId, destination) {
	let params = { 'destination': destination, 'sendNotifications': true };

	return cal.Events.move(calendarId, eventId, params)
		.then(resp => {
			console.log('moveEvent: ' + eventId);
			console.log(resp);
			return resp;
		})
		.catch(err => {
			console.log('Error: moveEvent', err.message);
		});
}
module.exports.listAllEventsInCalendar = listAllEventsInCalendar;
module.exports.listSingleEventsWithinDateRange = listSingleEventsWithinDateRange;
module.exports.listRecurringEventsWithinDateRange = listRecurringEventsWithinDateRange;
module.exports.getEvent = getEvent;
module.exports.insertEventWithAttendee = insertEventWithAttendee;
module.exports.insertEventSample = insertEventSample;
module.exports.insertEvent = insertEvent;
module.exports.insertRecurringEvent = insertRecurringEvent;
module.exports.insertEvent = insertEvent;
module.exports.updateEvent = updateEvent;
module.exports.deleteEvent = deleteEvent;
module.exports.eventInstances = eventInstances;
module.exports.moveEvent = moveEvent;
