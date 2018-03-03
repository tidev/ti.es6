import { default as Window } from './../UI/Window';
import { default as RecurrenceRule } from './RecurrenceRule';
export { default as Alert } from './Alert';
import { default as Alert } from './Alert';
export { default as Reminder } from './Reminder';
import { default as Reminder } from './Reminder';

export default class Event {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Calendar.Event')) {
			this._object = object;
		} else {
			this._object = Titanium.Calendar.Calendar.createEvent(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Calendar.Event.apiName;
	}
	static get description () {
		return Titanium.Calendar.Event.description;
	}
	static get extendedProperties () {
		return Titanium.Calendar.Event.extendedProperties;
	}
	static get hasAlarm () {
		return Titanium.Calendar.Event.hasAlarm;
	}
	static get id () {
		return Titanium.Calendar.Event.id;
	}
	static get reminders () {
		return Titanium.Calendar.Event.reminders;
	}
	static get status () {
		return Titanium.Calendar.Event.status;
	}
	static get availability () {
		return Titanium.Calendar.Event.availability;
	}
	static get isDetached () {
		return Titanium.Calendar.Event.isDetached;
	}
	static get visibility () {
		return Titanium.Calendar.Event.visibility;
	}
	static get attendees () {
		return Titanium.Calendar.Event.attendees;
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
	get alerts () {
		return this._object.alerts;
	}
	set alerts (value) {
		this._object.alerts = value;
	}
	get allDay () {
		return this._object.allDay;
	}
	set allDay (value) {
		this._object.allDay = value;
	}
	get begin () {
		return this._object.begin;
	}
	set begin (value) {
		this._object.begin = value;
	}
	get notes () {
		return this._object.notes;
	}
	set notes (value) {
		this._object.notes = value;
	}
	get description () {
		return this._object.description;
	}
	get end () {
		return this._object.end;
	}
	set end (value) {
		this._object.end = value;
	}
	get extendedProperties () {
		return this._object.extendedProperties;
	}
	get hasAlarm () {
		return this._object.hasAlarm;
	}
	get id () {
		return this._object.id;
	}
	get location () {
		return this._object.location;
	}
	set location (value) {
		this._object.location = value;
	}
	get reminders () {
		return this._object.reminders;
	}
	get status () {
		return this._object.status;
	}
	get availability () {
		return this._object.availability;
	}
	get isDetached () {
		return this._object.isDetached;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get recurrenceRule () {
		return new RecurrenceRule(this._object.recurrenceRule);
	}
	set recurrenceRule (value) {
		this._object.recurrenceRule = value;
	}
	get recurrenceRules () {
		return this._object.recurrenceRules;
	}
	set recurrenceRules (value) {
		this._object.recurrenceRules = value;
	}
	get visibility () {
		return this._object.visibility;
	}
	get attendees () {
		return this._object.attendees;
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
	createAlert (data) {
		data = normalize(data);
		return new Alert(this._object.createAlert(data));
	}
	createReminder (data) {
		data = normalize(data);
		return new Reminder(this._object.createReminder(data));
	}
	getExtendedProperty (name) {
		return this._object.getExtendedProperty(name);
	}
	setExtendedProperty (name, value) {
		return this._object.setExtendedProperty(name, value);
	}
	createRecurrenceRule (data) {
		data = normalize(data);
		return new RecurrenceRule(this._object.createRecurrenceRule(data));
	}
	save (span) {
		return this._object.save(span);
	}
	remove (span) {
		return this._object.remove(span);
	}
	refresh () {
		return this._object.refresh();
	}
	addRecurrenceRule (rule) {
		rule = normalize(rule);
		return this._object.addRecurrenceRule(rule);
	}
	removeRecurrenceRule (rule) {
		rule = normalize(rule);
		return this._object.removeRecurrenceRule(rule);
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
	getAlerts () {
		return this._object.getAlerts();
	}
	setAlerts (alerts) {
		return this._object.setAlerts(alerts);
	}
	getAllDay () {
		return this._object.getAllDay();
	}
	setAllDay (allDay) {
		return this._object.setAllDay(allDay);
	}
	getBegin () {
		return this._object.getBegin();
	}
	setBegin (begin) {
		return this._object.setBegin(begin);
	}
	getNotes () {
		return this._object.getNotes();
	}
	setNotes (notes) {
		return this._object.setNotes(notes);
	}
	getDescription () {
		return this._object.getDescription();
	}
	getEnd () {
		return this._object.getEnd();
	}
	setEnd (end) {
		return this._object.setEnd(end);
	}
	getExtendedProperties () {
		return this._object.getExtendedProperties();
	}
	getHasAlarm () {
		return this._object.getHasAlarm();
	}
	getId () {
		return this._object.getId();
	}
	getLocation () {
		return this._object.getLocation();
	}
	setLocation (location) {
		return this._object.setLocation(location);
	}
	getReminders () {
		return this._object.getReminders();
	}
	getStatus () {
		return this._object.getStatus();
	}
	getAvailability () {
		return this._object.getAvailability();
	}
	getIsDetached () {
		return this._object.getIsDetached();
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getRecurrenceRule () {
		return new RecurrenceRule(this._object.getRecurrenceRule());
	}
	setRecurrenceRule (recurrenceRule) {
		recurrenceRule = normalize(recurrenceRule);
		return this._object.setRecurrenceRule(recurrenceRule);
	}
	getRecurrenceRules () {
		return this._object.getRecurrenceRules();
	}
	setRecurrenceRules (recurrenceRules) {
		return this._object.setRecurrenceRules(recurrenceRules);
	}
	getVisibility () {
		return this._object.getVisibility();
	}
	getAttendees () {
		return this._object.getAttendees();
	}

	// modules
	static get Alert () {
		return Alert;
	}
	static get Reminder () {
		return Reminder;
	}
};
Object.freeze(Event);

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