import { default as Window } from './../../UI/Window';
import { default as Event } from './Event';

export default class Calendar {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Calendar.Calendar')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Calendar.Calendar.apiName;
	}
	static get hidden () {
		return Titanium.Android.Calendar.Calendar.hidden;
	}
	static get id () {
		return Titanium.Android.Calendar.Calendar.id;
	}
	static get name () {
		return Titanium.Android.Calendar.Calendar.name;
	}
	static get selected () {
		return Titanium.Android.Calendar.Calendar.selected;
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
	get hidden () {
		return this._object.hidden;
	}
	get id () {
		return this._object.id;
	}
	get name () {
		return this._object.name;
	}
	get selected () {
		return this._object.selected;
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
	createEvent (properties) {
		properties = normalize(properties);
		return new Event(this._object.createEvent(properties));
	}
	getEventById (id) {
		return new Event(this._object.getEventById(id));
	}
	getEventsBetweenDates (date1, date2) {
		return this._object.getEventsBetweenDates(date1, date2);
	}
	getEventsInDate (year, month, day) {
		return this._object.getEventsInDate(year, month, day);
	}
	getEventsInMonth (year, month) {
		return this._object.getEventsInMonth(year, month);
	}
	getEventsInYear (year) {
		return this._object.getEventsInYear(year);
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
	getHidden () {
		return this._object.getHidden();
	}
	getId () {
		return this._object.getId();
	}
	getName () {
		return this._object.getName();
	}
	getSelected () {
		return this._object.getSelected();
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