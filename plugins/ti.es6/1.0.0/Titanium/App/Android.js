import { default as Window } from './../UI/Window';
import { default as R } from './Android/R';
import { default as Intent } from './../Android/Intent';

export default class Android {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.Android')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.Android.apiName;
	}
	static get R () {
		return new R(Titanium.App.Android.R);
	}
	static get appVersionCode () {
		return Titanium.App.Android.appVersionCode;
	}
	static get appVersionName () {
		return Titanium.App.Android.appVersionName;
	}
	static get launchIntent () {
		return new Intent(Titanium.App.Android.launchIntent);
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
	get R () {
		return new R(this._object.R);
	}
	get appVersionCode () {
		return this._object.appVersionCode;
	}
	get appVersionName () {
		return this._object.appVersionName;
	}
	get launchIntent () {
		return new Intent(this._object.launchIntent);
	}

	// static properties
	static get bubbleParent () {
		return Titanium.App.Android.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.App.Android.bubbleParent = value;
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
	getAppVersionCode () {
		return this._object.getAppVersionCode();
	}
	getAppVersionName () {
		return this._object.getAppVersionName();
	}
	getLaunchIntent () {
		return new Intent(this._object.getLaunchIntent());
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
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	static getAppVersionCode () {
		return this._object.getAppVersionCode();
	}
	static getAppVersionName () {
		return this._object.getAppVersionName();
	}
	static getLaunchIntent () {
		return new Intent(this._object.getLaunchIntent());
	}

	// modules
};
Object.freeze(Android);

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