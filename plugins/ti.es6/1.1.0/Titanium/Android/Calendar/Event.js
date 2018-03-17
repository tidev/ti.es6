import { default as Window } from './../../UI/Window';
export { default as Alert } from './Alert';
import { default as Alert } from './Alert';
export { default as Reminder } from './Reminder';
import { default as Reminder } from './Reminder';

export default class Event {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Calendar.Event')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.Calendar.Calendar.createEvent(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Calendar.Event.apiName;
	}
	static get alerts () {
		return Titanium.Android.Calendar.Event.alerts;
	}
	static get allDay () {
		return Titanium.Android.Calendar.Event.allDay;
	}
	static get begin () {
		return Titanium.Android.Calendar.Event.begin;
	}
	static get description () {
		return Titanium.Android.Calendar.Event.description;
	}
	static get end () {
		return Titanium.Android.Calendar.Event.end;
	}
	static get extendedProperties () {
		return Titanium.Android.Calendar.Event.extendedProperties;
	}
	static get hasAlarm () {
		return Titanium.Android.Calendar.Event.hasAlarm;
	}
	static get hasExtendedProperties () {
		return Titanium.Android.Calendar.Event.hasExtendedProperties;
	}
	static get id () {
		return Titanium.Android.Calendar.Event.id;
	}
	static get location () {
		return Titanium.Android.Calendar.Event.location;
	}
	static get reminders () {
		return Titanium.Android.Calendar.Event.reminders;
	}
	static get status () {
		return Titanium.Android.Calendar.Event.status;
	}
	static get title () {
		return Titanium.Android.Calendar.Event.title;
	}
	static get visibility () {
		return Titanium.Android.Calendar.Event.visibility;
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
	get allDay () {
		return this._object.allDay;
	}
	get begin () {
		return this._object.begin;
	}
	get description () {
		return this._object.description;
	}
	get end () {
		return this._object.end;
	}
	get extendedProperties () {
		return this._object.extendedProperties;
	}
	get hasAlarm () {
		return this._object.hasAlarm;
	}
	get hasExtendedProperties () {
		return this._object.hasExtendedProperties;
	}
	get id () {
		return this._object.id;
	}
	get location () {
		return this._object.location;
	}
	get reminders () {
		return this._object.reminders;
	}
	get status () {
		return this._object.status;
	}
	get title () {
		return this._object.title;
	}
	get visibility () {
		return this._object.visibility;
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
	getAllDay () {
		return this._object.getAllDay();
	}
	getBegin () {
		return this._object.getBegin();
	}
	getDescription () {
		return this._object.getDescription();
	}
	getEnd () {
		return this._object.getEnd();
	}
	getExtendedProperties () {
		return this._object.getExtendedProperties();
	}
	getHasAlarm () {
		return this._object.getHasAlarm();
	}
	getHasExtendedProperties () {
		return this._object.getHasExtendedProperties();
	}
	getId () {
		return this._object.getId();
	}
	getLocation () {
		return this._object.getLocation();
	}
	getReminders () {
		return this._object.getReminders();
	}
	getStatus () {
		return this._object.getStatus();
	}
	getTitle () {
		return this._object.getTitle();
	}
	getVisibility () {
		return this._object.getVisibility();
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