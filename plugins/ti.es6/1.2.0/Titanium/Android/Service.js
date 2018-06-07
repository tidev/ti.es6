import { default as Window } from './../UI/Window';
import { default as Intent } from './Intent';

export default class Service {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Service')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createService(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Service.apiName;
	}
	static get intent () {
		return new Intent(Titanium.Android.Service.intent);
	}
	static get serviceInstanceId () {
		return Titanium.Android.Service.serviceInstanceId;
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
	get intent () {
		return new Intent(this._object.intent);
	}
	get serviceInstanceId () {
		return this._object.serviceInstanceId;
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
	start () {
		return this._object.start();
	}
	stop () {
		return this._object.stop();
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
	getIntent () {
		return new Intent(this._object.getIntent());
	}
	getServiceInstanceId () {
		return this._object.getServiceInstanceId();
	}

	// modules
};
Object.freeze(Service);

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