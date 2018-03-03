import { default as Window } from './../../UI/Window';

export default class Alert {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Calendar.Alert')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.Calendar.Event.createAlert(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Calendar.Alert.apiName;
	}
	static get alarmTime () {
		return Titanium.Android.Calendar.Alert.alarmTime;
	}
	static get begin () {
		return Titanium.Android.Calendar.Alert.begin;
	}
	static get end () {
		return Titanium.Android.Calendar.Alert.end;
	}
	static get eventId () {
		return Titanium.Android.Calendar.Alert.eventId;
	}
	static get id () {
		return Titanium.Android.Calendar.Alert.id;
	}
	static get minutes () {
		return Titanium.Android.Calendar.Alert.minutes;
	}
	static get state () {
		return Titanium.Android.Calendar.Alert.state;
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
	get alarmTime () {
		return this._object.alarmTime;
	}
	get begin () {
		return this._object.begin;
	}
	get end () {
		return this._object.end;
	}
	get eventId () {
		return this._object.eventId;
	}
	get id () {
		return this._object.id;
	}
	get minutes () {
		return this._object.minutes;
	}
	get state () {
		return this._object.state;
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
	getAlarmTime () {
		return this._object.getAlarmTime();
	}
	getBegin () {
		return this._object.getBegin();
	}
	getEnd () {
		return this._object.getEnd();
	}
	getEventId () {
		return this._object.getEventId();
	}
	getId () {
		return this._object.getId();
	}
	getMinutes () {
		return this._object.getMinutes();
	}
	getState () {
		return this._object.getState();
	}

	// modules
};
Object.freeze(Alert);

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