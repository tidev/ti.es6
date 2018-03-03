import { default as Window } from './../UI/Window';
export { default as NotificationChannel } from './NotificationChannel';
import { default as NotificationChannel } from './NotificationChannel';

export default class NotificationManager {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.NotificationManager')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.NotificationManager.apiName;
	}
	static get DEFAULT_ALL () {
		return Titanium.Android.NotificationManager.DEFAULT_ALL;
	}
	static get DEFAULT_LIGHTS () {
		return Titanium.Android.NotificationManager.DEFAULT_LIGHTS;
	}
	static get DEFAULT_SOUND () {
		return Titanium.Android.NotificationManager.DEFAULT_SOUND;
	}
	static get DEFAULT_VIBRATE () {
		return Titanium.Android.NotificationManager.DEFAULT_VIBRATE;
	}
	static get FLAG_AUTO_CANCEL () {
		return Titanium.Android.NotificationManager.FLAG_AUTO_CANCEL;
	}
	static get FLAG_INSISTENT () {
		return Titanium.Android.NotificationManager.FLAG_INSISTENT;
	}
	static get FLAG_NO_CLEAR () {
		return Titanium.Android.NotificationManager.FLAG_NO_CLEAR;
	}
	static get FLAG_ONGOING_EVENT () {
		return Titanium.Android.NotificationManager.FLAG_ONGOING_EVENT;
	}
	static get FLAG_ONLY_ALERT_ONCE () {
		return Titanium.Android.NotificationManager.FLAG_ONLY_ALERT_ONCE;
	}
	static get FLAG_SHOW_LIGHTS () {
		return Titanium.Android.NotificationManager.FLAG_SHOW_LIGHTS;
	}
	static get STREAM_DEFAULT () {
		return Titanium.Android.NotificationManager.STREAM_DEFAULT;
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
	get DEFAULT_ALL () {
		return this._object.DEFAULT_ALL;
	}
	get DEFAULT_LIGHTS () {
		return this._object.DEFAULT_LIGHTS;
	}
	get DEFAULT_SOUND () {
		return this._object.DEFAULT_SOUND;
	}
	get DEFAULT_VIBRATE () {
		return this._object.DEFAULT_VIBRATE;
	}
	get FLAG_AUTO_CANCEL () {
		return this._object.FLAG_AUTO_CANCEL;
	}
	get FLAG_INSISTENT () {
		return this._object.FLAG_INSISTENT;
	}
	get FLAG_NO_CLEAR () {
		return this._object.FLAG_NO_CLEAR;
	}
	get FLAG_ONGOING_EVENT () {
		return this._object.FLAG_ONGOING_EVENT;
	}
	get FLAG_ONLY_ALERT_ONCE () {
		return this._object.FLAG_ONLY_ALERT_ONCE;
	}
	get FLAG_SHOW_LIGHTS () {
		return this._object.FLAG_SHOW_LIGHTS;
	}
	get STREAM_DEFAULT () {
		return this._object.STREAM_DEFAULT;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Android.NotificationManager.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Android.NotificationManager.bubbleParent = value;
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
	cancel (id) {
		return this._object.cancel(id);
	}
	cancelAll () {
		return this._object.cancelAll();
	}
	notify (id, notification) {
		notification = normalize(notification);
		return this._object.notify(id, notification);
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
	static cancel (id) {
		return this._object.cancel(id);
	}
	static cancelAll () {
		return this._object.cancelAll();
	}
	static notify (id, notification) {
		notification = normalize(notification);
		return this._object.notify(id, notification);
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

	// modules
	static get NotificationChannel () {
		return NotificationChannel;
	}
};
Object.freeze(NotificationManager);

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