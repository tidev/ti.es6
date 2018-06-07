import { default as Window } from './../UI/Window';

export default class Calendar {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Calendar')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Calendar.apiName;
	}
	static get METHOD_ALERT () {
		return Titanium.Android.Calendar.METHOD_ALERT;
	}
	static get METHOD_DEFAULT () {
		return Titanium.Android.Calendar.METHOD_DEFAULT;
	}
	static get METHOD_EMAIL () {
		return Titanium.Android.Calendar.METHOD_EMAIL;
	}
	static get METHOD_SMS () {
		return Titanium.Android.Calendar.METHOD_SMS;
	}
	static get STATE_DISMISSED () {
		return Titanium.Android.Calendar.STATE_DISMISSED;
	}
	static get STATE_FIRED () {
		return Titanium.Android.Calendar.STATE_FIRED;
	}
	static get STATE_SCHEDULED () {
		return Titanium.Android.Calendar.STATE_SCHEDULED;
	}
	static get STATUS_CANCELED () {
		return Titanium.Android.Calendar.STATUS_CANCELED;
	}
	static get STATUS_CONFIRMED () {
		return Titanium.Android.Calendar.STATUS_CONFIRMED;
	}
	static get STATUS_TENTATIVE () {
		return Titanium.Android.Calendar.STATUS_TENTATIVE;
	}
	static get VISIBILITY_CONFIDENTIAL () {
		return Titanium.Android.Calendar.VISIBILITY_CONFIDENTIAL;
	}
	static get VISIBILITY_DEFAULT () {
		return Titanium.Android.Calendar.VISIBILITY_DEFAULT;
	}
	static get VISIBILITY_PRIVATE () {
		return Titanium.Android.Calendar.VISIBILITY_PRIVATE;
	}
	static get VISIBILITY_PUBLIC () {
		return Titanium.Android.Calendar.VISIBILITY_PUBLIC;
	}
	static get allAlerts () {
		return Titanium.Android.Calendar.allAlerts;
	}
	static get allCalendars () {
		return Titanium.Android.Calendar.allCalendars;
	}
	static get selectableCalendars () {
		return Titanium.Android.Calendar.selectableCalendars;
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
	get STATUS_CANCELED () {
		return this._object.STATUS_CANCELED;
	}
	get STATUS_CONFIRMED () {
		return this._object.STATUS_CONFIRMED;
	}
	get STATUS_TENTATIVE () {
		return this._object.STATUS_TENTATIVE;
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
	get allAlerts () {
		return this._object.allAlerts;
	}
	get allCalendars () {
		return this._object.allCalendars;
	}
	get selectableCalendars () {
		return this._object.selectableCalendars;
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
	getAllAlerts () {
		return this._object.getAllAlerts();
	}
	getAllCalendars () {
		return this._object.getAllCalendars();
	}
	getSelectableCalendars () {
		return this._object.getSelectableCalendars();
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