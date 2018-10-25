import { default as Window } from './../UI/Window';
export { default as TCP } from './Socket/TCP';
import { default as TCP } from './Socket/TCP';

export default class Socket {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.Socket')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.Socket.apiName;
	}
	static get INITIALIZED () {
		return Titanium.Network.Socket.INITIALIZED;
	}
	static get CONNECTED () {
		return Titanium.Network.Socket.CONNECTED;
	}
	static get LISTENING () {
		return Titanium.Network.Socket.LISTENING;
	}
	static get CLOSED () {
		return Titanium.Network.Socket.CLOSED;
	}
	static get ERROR () {
		return Titanium.Network.Socket.ERROR;
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
	get INITIALIZED () {
		return this._object.INITIALIZED;
	}
	get CONNECTED () {
		return this._object.CONNECTED;
	}
	get LISTENING () {
		return this._object.LISTENING;
	}
	get CLOSED () {
		return this._object.CLOSED;
	}
	get ERROR () {
		return this._object.ERROR;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Network.Socket.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Network.Socket.bubbleParent = value;
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
	static getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	static setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}

	// modules
	static get TCP () {
		return TCP;
	}
};
Object.freeze(Socket);

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