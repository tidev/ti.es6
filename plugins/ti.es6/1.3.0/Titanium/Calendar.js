import { default as Window } from './UI/Window';

export default class Calendar {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Calendar')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Calendar.apiName;
	}
	static get METHOD_ALERT () {
		return Titanium.Calendar.METHOD_ALERT;
	}
	static get METHOD_DEFAULT () {
		return Titanium.Calendar.METHOD_DEFAULT;
	}
	static get METHOD_EMAIL () {
		return Titanium.Calendar.METHOD_EMAIL;
	}
	static get METHOD_SMS () {
		return Titanium.Calendar.METHOD_SMS;
	}
	static get STATE_DISMISSED () {
		return Titanium.Calendar.STATE_DISMISSED;
	}
	static get STATE_FIRED () {
		return Titanium.Calendar.STATE_FIRED;
	}
	static get STATE_SCHEDULED () {
		return Titanium.Calendar.STATE_SCHEDULED;
	}
	static get STATUS_NONE () {
		return Titanium.Calendar.STATUS_NONE;
	}
	static get STATUS_CANCELLED () {
		return Titanium.Calendar.STATUS_CANCELLED;
	}
	static get STATUS_CANCELED () {
		return Titanium.Calendar.STATUS_CANCELED;
	}
	static get STATUS_CONFIRMED () {
		return Titanium.Calendar.STATUS_CONFIRMED;
	}
	static get STATUS_TENTATIVE () {
		return Titanium.Calendar.STATUS_TENTATIVE;
	}
	static get AVAILABILITY_NOTSUPPORTED () {
		return Titanium.Calendar.AVAILABILITY_NOTSUPPORTED;
	}
	static get AVAILABILITY_BUSY () {
		return Titanium.Calendar.AVAILABILITY_BUSY;
	}
	static get AVAILABILITY_FREE () {
		return Titanium.Calendar.AVAILABILITY_FREE;
	}
	static get AVAILABILITY_TENTATIVE () {
		return Titanium.Calendar.AVAILABILITY_TENTATIVE;
	}
	static get AVAILABILITY_UNAVAILABLE () {
		return Titanium.Calendar.AVAILABILITY_UNAVAILABLE;
	}
	static get AUTHORIZATION_AUTHORIZED () {
		return Titanium.Calendar.AUTHORIZATION_AUTHORIZED;
	}
	static get AUTHORIZATION_DENIED () {
		return Titanium.Calendar.AUTHORIZATION_DENIED;
	}
	static get AUTHORIZATION_RESTRICTED () {
		return Titanium.Calendar.AUTHORIZATION_RESTRICTED;
	}
	static get AUTHORIZATION_UNKNOWN () {
		return Titanium.Calendar.AUTHORIZATION_UNKNOWN;
	}
	static get SPAN_THISEVENT () {
		return Titanium.Calendar.SPAN_THISEVENT;
	}
	static get SPAN_FUTUREEVENTS () {
		return Titanium.Calendar.SPAN_FUTUREEVENTS;
	}
	static get RECURRENCEFREQUENCY_DAILY () {
		return Titanium.Calendar.RECURRENCEFREQUENCY_DAILY;
	}
	static get RECURRENCEFREQUENCY_WEEKLY () {
		return Titanium.Calendar.RECURRENCEFREQUENCY_WEEKLY;
	}
	static get RECURRENCEFREQUENCY_MONTHLY () {
		return Titanium.Calendar.RECURRENCEFREQUENCY_MONTHLY;
	}
	static get RECURRENCEFREQUENCY_YEARLY () {
		return Titanium.Calendar.RECURRENCEFREQUENCY_YEARLY;
	}
	static get VISIBILITY_CONFIDENTIAL () {
		return Titanium.Calendar.VISIBILITY_CONFIDENTIAL;
	}
	static get VISIBILITY_DEFAULT () {
		return Titanium.Calendar.VISIBILITY_DEFAULT;
	}
	static get VISIBILITY_PRIVATE () {
		return Titanium.Calendar.VISIBILITY_PRIVATE;
	}
	static get VISIBILITY_PUBLIC () {
		return Titanium.Calendar.VISIBILITY_PUBLIC;
	}
	static get ATTENDEE_STATUS_UNKNOWN () {
		return Titanium.Calendar.ATTENDEE_STATUS_UNKNOWN;
	}
	static get ATTENDEE_STATUS_PENDING () {
		return Titanium.Calendar.ATTENDEE_STATUS_PENDING;
	}
	static get ATTENDEE_STATUS_ACCEPTED () {
		return Titanium.Calendar.ATTENDEE_STATUS_ACCEPTED;
	}
	static get ATTENDEE_STATUS_DECLINED () {
		return Titanium.Calendar.ATTENDEE_STATUS_DECLINED;
	}
	static get ATTENDEE_STATUS_TENTATIVE () {
		return Titanium.Calendar.ATTENDEE_STATUS_TENTATIVE;
	}
	static get ATTENDEE_STATUS_INVITED () {
		return Titanium.Calendar.ATTENDEE_STATUS_INVITED;
	}
	static get ATTENDEE_STATUS_NONE () {
		return Titanium.Calendar.ATTENDEE_STATUS_NONE;
	}
	static get ATTENDEE_STATUS_DELEGATED () {
		return Titanium.Calendar.ATTENDEE_STATUS_DELEGATED;
	}
	static get ATTENDEE_STATUS_IN_PROCESS () {
		return Titanium.Calendar.ATTENDEE_STATUS_IN_PROCESS;
	}
	static get RELATIONSHIP_ATTENDEE () {
		return Titanium.Calendar.RELATIONSHIP_ATTENDEE;
	}
	static get RELATIONSHIP_NONE () {
		return Titanium.Calendar.RELATIONSHIP_NONE;
	}
	static get RELATIONSHIP_ORGANIZER () {
		return Titanium.Calendar.RELATIONSHIP_ORGANIZER;
	}
	static get RELATIONSHIP_PERFORMER () {
		return Titanium.Calendar.RELATIONSHIP_PERFORMER;
	}
	static get RELATIONSHIP_SPEAKER () {
		return Titanium.Calendar.RELATIONSHIP_SPEAKER;
	}
	static get RELATIONSHIP_UNKNOWN () {
		return Titanium.Calendar.RELATIONSHIP_UNKNOWN;
	}
	static get ATTENDEE_ROLE_UNKNOWN () {
		return Titanium.Calendar.ATTENDEE_ROLE_UNKNOWN;
	}
	static get ATTENDEE_ROLE_OPTIONAL () {
		return Titanium.Calendar.ATTENDEE_ROLE_OPTIONAL;
	}
	static get ATTENDEE_ROLE_REQUIRED () {
		return Titanium.Calendar.ATTENDEE_ROLE_REQUIRED;
	}
	static get ATTENDEE_ROLE_CHAIR () {
		return Titanium.Calendar.ATTENDEE_ROLE_CHAIR;
	}
	static get ATTENDEE_ROLE_NON_PARTICIPANT () {
		return Titanium.Calendar.ATTENDEE_ROLE_NON_PARTICIPANT;
	}
	static get ATTENDEE_TYPE_UNKNOWN () {
		return Titanium.Calendar.ATTENDEE_TYPE_UNKNOWN;
	}
	static get ATTENDEE_TYPE_PERSON () {
		return Titanium.Calendar.ATTENDEE_TYPE_PERSON;
	}
	static get ATTENDEE_TYPE_ROOM () {
		return Titanium.Calendar.ATTENDEE_TYPE_ROOM;
	}
	static get ATTENDEE_TYPE_RESOURCE () {
		return Titanium.Calendar.ATTENDEE_TYPE_RESOURCE;
	}
	static get ATTENDEE_TYPE_NONE () {
		return Titanium.Calendar.ATTENDEE_TYPE_NONE;
	}
	static get ATTENDEE_TYPE_REQUIRED () {
		return Titanium.Calendar.ATTENDEE_TYPE_REQUIRED;
	}
	static get ATTENDEE_TYPE_GROUP () {
		return Titanium.Calendar.ATTENDEE_TYPE_GROUP;
	}
	static get SOURCE_TYPE_LOCAL () {
		return Titanium.Calendar.SOURCE_TYPE_LOCAL;
	}
	static get SOURCE_TYPE_EXCHANGE () {
		return Titanium.Calendar.SOURCE_TYPE_EXCHANGE;
	}
	static get SOURCE_TYPE_CALDAV () {
		return Titanium.Calendar.SOURCE_TYPE_CALDAV;
	}
	static get SOURCE_TYPE_MOBILEME () {
		return Titanium.Calendar.SOURCE_TYPE_MOBILEME;
	}
	static get SOURCE_TYPE_SUBSCRIBED () {
		return Titanium.Calendar.SOURCE_TYPE_SUBSCRIBED;
	}
	static get SOURCE_TYPE_BIRTHDAYS () {
		return Titanium.Calendar.SOURCE_TYPE_BIRTHDAYS;
	}
	static get eventsAuthorization () {
		return Titanium.Calendar.eventsAuthorization;
	}
	static get calendarAuthorization () {
		return Titanium.Calendar.calendarAuthorization;
	}
	static get allAlerts () {
		return Titanium.Calendar.allAlerts;
	}
	static get allCalendars () {
		return Titanium.Calendar.allCalendars;
	}
	static get allEditableCalendars () {
		return Titanium.Calendar.allEditableCalendars;
	}
	static get selectableCalendars () {
		return Titanium.Calendar.selectableCalendars;
	}
	static get defaultCalendar () {
		return new Calendar(Titanium.Calendar.defaultCalendar);
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get bubbleParent () {
		return this._object.bubbleParent;
	}
	set bubbleParent (value) {
		this._object.bubbleParent = value;
	}
	get lifecycleContainer () {
		return new Window(this._object.lifecycleContainer);
	}
	set lifecycleContainer (value) {
		this._object.lifecycleContainer = value;
	}
	get METHOD_ALERT () {
		return this._object.METHOD_ALERT;
	}
	get METHOD_DEFAULT () {
		return this._object.METHOD_DEFAULT;
	}
	get METHOD_EMAIL () {
		return this._object.METHOD_EMAIL;
	}
	get METHOD_SMS () {
		return this._object.METHOD_SMS;
	}
	get STATE_DISMISSED () {
		return this._object.STATE_DISMISSED;
	}
	get STATE_FIRED () {
		return this._object.STATE_FIRED;
	}
	get STATE_SCHEDULED () {
		return this._object.STATE_SCHEDULED;
	}
	get STATUS_NONE () {
		return this._object.STATUS_NONE;
	}
	get STATUS_CANCELLED () {
		return this._object.STATUS_CANCELLED;
	}
	get STATUS_CANCELED () {
		return this._object.STATUS_CANCELED;
	}
	get STATUS_CONFIRMED () {
		return this._object.STATUS_CONFIRMED;
	}
	get STATUS_TENTATIVE () {
		return this._object.STATUS_TENTATIVE;
	}
	get AVAILABILITY_NOTSUPPORTED () {
		return this._object.AVAILABILITY_NOTSUPPORTED;
	}
	get AVAILABILITY_BUSY () {
		return this._object.AVAILABILITY_BUSY;
	}
	get AVAILABILITY_FREE () {
		return this._object.AVAILABILITY_FREE;
	}
	get AVAILABILITY_TENTATIVE () {
		return this._object.AVAILABILITY_TENTATIVE;
	}
	get AVAILABILITY_UNAVAILABLE () {
		return this._object.AVAILABILITY_UNAVAILABLE;
	}
	get AUTHORIZATION_AUTHORIZED () {
		return this._object.AUTHORIZATION_AUTHORIZED;
	}
	get AUTHORIZATION_DENIED () {
		return this._object.AUTHORIZATION_DENIED;
	}
	get AUTHORIZATION_RESTRICTED () {
		return this._object.AUTHORIZATION_RESTRICTED;
	}
	get AUTHORIZATION_UNKNOWN () {
		return this._object.AUTHORIZATION_UNKNOWN;
	}
	get SPAN_THISEVENT () {
		return this._object.SPAN_THISEVENT;
	}
	get SPAN_FUTUREEVENTS () {
		return this._object.SPAN_FUTUREEVENTS;
	}
	get RECURRENCEFREQUENCY_DAILY () {
		return this._object.RECURRENCEFREQUENCY_DAILY;
	}
	get RECURRENCEFREQUENCY_WEEKLY () {
		return this._object.RECURRENCEFREQUENCY_WEEKLY;
	}
	get RECURRENCEFREQUENCY_MONTHLY () {
		return this._object.RECURRENCEFREQUENCY_MONTHLY;
	}
	get RECURRENCEFREQUENCY_YEARLY () {
		return this._object.RECURRENCEFREQUENCY_YEARLY;
	}
	get VISIBILITY_CONFIDENTIAL () {
		return this._object.VISIBILITY_CONFIDENTIAL;
	}
	get VISIBILITY_DEFAULT () {
		return this._object.VISIBILITY_DEFAULT;
	}
	get VISIBILITY_PRIVATE () {
		return this._object.VISIBILITY_PRIVATE;
	}
	get VISIBILITY_PUBLIC () {
		return this._object.VISIBILITY_PUBLIC;
	}
	get ATTENDEE_STATUS_UNKNOWN () {
		return this._object.ATTENDEE_STATUS_UNKNOWN;
	}
	get ATTENDEE_STATUS_PENDING () {
		return this._object.ATTENDEE_STATUS_PENDING;
	}
	get ATTENDEE_STATUS_ACCEPTED () {
		return this._object.ATTENDEE_STATUS_ACCEPTED;
	}
	get ATTENDEE_STATUS_DECLINED () {
		return this._object.ATTENDEE_STATUS_DECLINED;
	}
	get ATTENDEE_STATUS_TENTATIVE () {
		return this._object.ATTENDEE_STATUS_TENTATIVE;
	}
	get ATTENDEE_STATUS_INVITED () {
		return this._object.ATTENDEE_STATUS_INVITED;
	}
	get ATTENDEE_STATUS_NONE () {
		return this._object.ATTENDEE_STATUS_NONE;
	}
	get ATTENDEE_STATUS_DELEGATED () {
		return this._object.ATTENDEE_STATUS_DELEGATED;
	}
	get ATTENDEE_STATUS_IN_PROCESS () {
		return this._object.ATTENDEE_STATUS_IN_PROCESS;
	}
	get RELATIONSHIP_ATTENDEE () {
		return this._object.RELATIONSHIP_ATTENDEE;
	}
	get RELATIONSHIP_NONE () {
		return this._object.RELATIONSHIP_NONE;
	}
	get RELATIONSHIP_ORGANIZER () {
		return this._object.RELATIONSHIP_ORGANIZER;
	}
	get RELATIONSHIP_PERFORMER () {
		return this._object.RELATIONSHIP_PERFORMER;
	}
	get RELATIONSHIP_SPEAKER () {
		return this._object.RELATIONSHIP_SPEAKER;
	}
	get RELATIONSHIP_UNKNOWN () {
		return this._object.RELATIONSHIP_UNKNOWN;
	}
	get ATTENDEE_ROLE_UNKNOWN () {
		return this._object.ATTENDEE_ROLE_UNKNOWN;
	}
	get ATTENDEE_ROLE_OPTIONAL () {
		return this._object.ATTENDEE_ROLE_OPTIONAL;
	}
	get ATTENDEE_ROLE_REQUIRED () {
		return this._object.ATTENDEE_ROLE_REQUIRED;
	}
	get ATTENDEE_ROLE_CHAIR () {
		return this._object.ATTENDEE_ROLE_CHAIR;
	}
	get ATTENDEE_ROLE_NON_PARTICIPANT () {
		return this._object.ATTENDEE_ROLE_NON_PARTICIPANT;
	}
	get ATTENDEE_TYPE_UNKNOWN () {
		return this._object.ATTENDEE_TYPE_UNKNOWN;
	}
	get ATTENDEE_TYPE_PERSON () {
		return this._object.ATTENDEE_TYPE_PERSON;
	}
	get ATTENDEE_TYPE_ROOM () {
		return this._object.ATTENDEE_TYPE_ROOM;
	}
	get ATTENDEE_TYPE_RESOURCE () {
		return this._object.ATTENDEE_TYPE_RESOURCE;
	}
	get ATTENDEE_TYPE_NONE () {
		return this._object.ATTENDEE_TYPE_NONE;
	}
	get ATTENDEE_TYPE_REQUIRED () {
		return this._object.ATTENDEE_TYPE_REQUIRED;
	}
	get ATTENDEE_TYPE_GROUP () {
		return this._object.ATTENDEE_TYPE_GROUP;
	}
	get SOURCE_TYPE_LOCAL () {
		return this._object.SOURCE_TYPE_LOCAL;
	}
	get SOURCE_TYPE_EXCHANGE () {
		return this._object.SOURCE_TYPE_EXCHANGE;
	}
	get SOURCE_TYPE_CALDAV () {
		return this._object.SOURCE_TYPE_CALDAV;
	}
	get SOURCE_TYPE_MOBILEME () {
		return this._object.SOURCE_TYPE_MOBILEME;
	}
	get SOURCE_TYPE_SUBSCRIBED () {
		return this._object.SOURCE_TYPE_SUBSCRIBED;
	}
	get SOURCE_TYPE_BIRTHDAYS () {
		return this._object.SOURCE_TYPE_BIRTHDAYS;
	}
	get eventsAuthorization () {
		return this._object.eventsAuthorization;
	}
	get calendarAuthorization () {
		return this._object.calendarAuthorization;
	}
	get allAlerts () {
		return this._object.allAlerts;
	}
	get allCalendars () {
		return this._object.allCalendars;
	}
	get allEditableCalendars () {
		return this._object.allEditableCalendars;
	}
	get selectableCalendars () {
		return this._object.selectableCalendars;
	}
	get defaultCalendar () {
		return new Calendar(this._object.defaultCalendar);
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Calendar.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Calendar.bubbleParent = value;
	}

	// methods
	addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	getCalendarById (id) {
		return new Calendar(this._object.getCalendarById(id));
	}
	hasCalendarPermissions () {
		return this._object.hasCalendarPermissions();
	}
	requestCalendarPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestCalendarPermissions(resolve));
		}
		return this._object.requestCalendarPermissions(callback);
	}
	requestEventsAuthorization (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestEventsAuthorization(resolve));
		}
		return this._object.requestEventsAuthorization(callback);
	}
	getApiName () {
		return this._object.getApiName();
	}
	getBubbleParent () {
		return this._object.getBubbleParent();
	}
	setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	getEventsAuthorization () {
		return this._object.getEventsAuthorization();
	}
	getCalendarAuthorization () {
		return this._object.getCalendarAuthorization();
	}
	getAllAlerts () {
		return this._object.getAllAlerts();
	}
	getAllCalendars () {
		return this._object.getAllCalendars();
	}
	getAllEditableCalendars () {
		return this._object.getAllEditableCalendars();
	}
	getSelectableCalendars () {
		return this._object.getSelectableCalendars();
	}
	getDefaultCalendar () {
		return new Calendar(this._object.getDefaultCalendar());
	}

	// static methods
	static addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	static applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	static fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	static removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	static getCalendarById (id) {
		return new Calendar(this._object.getCalendarById(id));
	}
	static hasCalendarPermissions () {
		return this._object.hasCalendarPermissions();
	}
	static requestCalendarPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestCalendarPermissions(resolve));
		}
		return this._object.requestCalendarPermissions(callback);
	}
	static requestEventsAuthorization (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestEventsAuthorization(resolve));
		}
		return this._object.requestEventsAuthorization(callback);
	}
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	static getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	static setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	static getEventsAuthorization () {
		return this._object.getEventsAuthorization();
	}
	static getCalendarAuthorization () {
		return this._object.getCalendarAuthorization();
	}
	static getAllAlerts () {
		return this._object.getAllAlerts();
	}
	static getAllCalendars () {
		return this._object.getAllCalendars();
	}
	static getAllEditableCalendars () {
		return this._object.getAllEditableCalendars();
	}
	static getSelectableCalendars () {
		return this._object.getSelectableCalendars();
	}
	static getDefaultCalendar () {
		return new Calendar(this._object.getDefaultCalendar());
	}

	// modules
};
Object.freeze(Calendar);

function normalize (object) {
	if (typeof object === 'object') {
		if (object._object) {
			return object._object;
		}

		for (let key in object) {
			if (typeof object[key] === 'object') {
				if (object[key]._object) {
					object[key] = object[key]._object;
				}
			}
		}
	}

	return object;
}