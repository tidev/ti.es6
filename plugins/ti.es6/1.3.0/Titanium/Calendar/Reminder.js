import { default as Window } from './../UI/Window';

export default class Reminder {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Calendar.Reminder')) {
			this._object = object;
		} else {
			this._object = Titanium.Calendar.Event.createReminder(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Calendar.Reminder.apiName;
	}
	static get id () {
		return Titanium.Calendar.Reminder.id;
	}
	static get method () {
		return Titanium.Calendar.Reminder.method;
	}
	static get minutes () {
		return Titanium.Calendar.Reminder.minutes;
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
	get id () {
		return this._object.id;
	}
	get method () {
		return this._object.method;
	}
	get minutes () {
		return this._object.minutes;
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
	getId () {
		return this._object.getId();
	}
	getMethod () {
		return this._object.getMethod();
	}
	getMinutes () {
		return this._object.getMinutes();
	}

	// modules
};
Object.freeze(Reminder);

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