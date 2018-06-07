import { default as Window } from './../UI/Window';
export { default as LocationProvider } from './Android/LocationProvider';
import { default as LocationProvider } from './Android/LocationProvider';
export { default as LocationRule } from './Android/LocationRule';
import { default as LocationRule } from './Android/LocationRule';

export default class Android {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Geolocation.Android')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Geolocation.Android.apiName;
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
	get manualMode () {
		return this._object.manualMode;
	}
	set manualMode (value) {
		this._object.manualMode = value;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Geolocation.Android.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Geolocation.Android.bubbleParent = value;
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
	addLocationProvider (provider) {
		provider = normalize(provider);
		return this._object.addLocationProvider(provider);
	}
	removeLocationProvider (provider) {
		provider = normalize(provider);
		return this._object.removeLocationProvider(provider);
	}
	addLocationRule (rule) {
		rule = normalize(rule);
		return this._object.addLocationRule(rule);
	}
	removeLocationRule (rule) {
		rule = normalize(rule);
		return this._object.removeLocationRule(rule);
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
	getManualMode () {
		return this._object.getManualMode();
	}
	setManualMode (manualMode) {
		return this._object.setManualMode(manualMode);
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
	static addLocationProvider (provider) {
		provider = normalize(provider);
		return this._object.addLocationProvider(provider);
	}
	static removeLocationProvider (provider) {
		provider = normalize(provider);
		return this._object.removeLocationProvider(provider);
	}
	static addLocationRule (rule) {
		rule = normalize(rule);
		return this._object.addLocationRule(rule);
	}
	static removeLocationRule (rule) {
		rule = normalize(rule);
		return this._object.removeLocationRule(rule);
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
	static get LocationProvider () {
		return LocationProvider;
	}
	static get LocationRule () {
		return LocationRule;
	}
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