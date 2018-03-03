export { default as Proxy } from './Titanium/Proxy';
import { default as Proxy } from './Titanium/Proxy';
export { default as Module } from './Titanium/Module';
import { default as Module } from './Titanium/Module';
export { default as API } from './Titanium/API';
import { default as API } from './Titanium/API';
export { default as Accelerometer } from './Titanium/Accelerometer';
import { default as Accelerometer } from './Titanium/Accelerometer';
export { default as Analytics } from './Titanium/Analytics';
import { default as Analytics } from './Titanium/Analytics';
export { default as Android } from './Titanium/Android';
import { default as Android } from './Titanium/Android';
export { default as App } from './Titanium/App';
import { default as App } from './Titanium/App';
export { default as Blob } from './Titanium/Blob';
import { default as Blob } from './Titanium/Blob';
export { default as BlobStream } from './Titanium/BlobStream';
import { default as BlobStream } from './Titanium/BlobStream';
export { default as Buffer } from './Titanium/Buffer';
import { default as Buffer } from './Titanium/Buffer';
export { default as BufferStream } from './Titanium/BufferStream';
import { default as BufferStream } from './Titanium/BufferStream';
export { default as Calendar } from './Titanium/Calendar';
import { default as Calendar } from './Titanium/Calendar';
export { default as Codec } from './Titanium/Codec';
import { default as Codec } from './Titanium/Codec';
export { default as Contacts } from './Titanium/Contacts';
import { default as Contacts } from './Titanium/Contacts';
export { default as Database } from './Titanium/Database';
import { default as Database } from './Titanium/Database';
export { default as Event } from './Titanium/Event';
import { default as Event } from './Titanium/Event';
export { default as Filesystem } from './Titanium/Filesystem';
import { default as Filesystem } from './Titanium/Filesystem';
export { default as Geolocation } from './Titanium/Geolocation';
import { default as Geolocation } from './Titanium/Geolocation';
export { default as Gesture } from './Titanium/Gesture';
import { default as Gesture } from './Titanium/Gesture';
export { default as IOStream } from './Titanium/IOStream';
import { default as IOStream } from './Titanium/IOStream';
export { default as Locale } from './Titanium/Locale';
import { default as Locale } from './Titanium/Locale';
export { default as Map } from './Titanium/Map';
import { default as Map } from './Titanium/Map';
export { default as Media } from './Titanium/Media';
import { default as Media } from './Titanium/Media';
export { default as Network } from './Titanium/Network';
import { default as Network } from './Titanium/Network';
export { default as Platform } from './Titanium/Platform';
import { default as Platform } from './Titanium/Platform';
export { default as Stream } from './Titanium/Stream';
import { default as Stream } from './Titanium/Stream';
export { default as UI } from './Titanium/UI';
import { default as UI } from './Titanium/UI';
export { default as Utils } from './Titanium/Utils';
import { default as Utils } from './Titanium/Utils';
export { default as WatchSession } from './Titanium/WatchSession';
import { default as WatchSession } from './Titanium/WatchSession';
export { default as XML } from './Titanium/XML';
import { default as XML } from './Titanium/XML';
export { default as Yahoo } from './Titanium/Yahoo';
import { default as Yahoo } from './Titanium/Yahoo';
import { default as Window } from './Titanium/UI/Window';

export default class _Titanium {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.apiName;
	}
	static get version () {
		return Titanium.version;
	}
	static get buildDate () {
		return Titanium.buildDate;
	}
	static get buildHash () {
		return Titanium.buildHash;
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
	get version () {
		return this._object.version;
	}
	get buildDate () {
		return this._object.buildDate;
	}
	get buildHash () {
		return this._object.buildHash;
	}
	get userAgent () {
		return this._object.userAgent;
	}
	set userAgent (value) {
		this._object.userAgent = value;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.bubbleParent = value;
	}
	static get userAgent () {
		return Titanium.userAgent;
	}
	static set userAgent (value) {
		Titanium.userAgent = value;
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
	getVersion () {
		return this._object.getVersion();
	}
	getBuildDate () {
		return this._object.getBuildDate();
	}
	getBuildHash () {
		return this._object.getBuildHash();
	}
	getUserAgent () {
		return this._object.getUserAgent();
	}
	setUserAgent (userAgent) {
		return this._object.setUserAgent(userAgent);
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
	static getVersion () {
		return this._object.getVersion();
	}
	static getBuildDate () {
		return this._object.getBuildDate();
	}
	static getBuildHash () {
		return this._object.getBuildHash();
	}
	static getUserAgent () {
		return this._object.getUserAgent();
	}
	static setUserAgent (userAgent) {
		return this._object.setUserAgent(userAgent);
	}

	// modules
	static get Proxy () {
		return Proxy;
	}
	static get Module () {
		return Module;
	}
	static get API () {
		return API;
	}
	static get Accelerometer () {
		return Accelerometer;
	}
	static get Analytics () {
		return Analytics;
	}
	static get Android () {
		return Android;
	}
	static get App () {
		return App;
	}
	static get Blob () {
		return Blob;
	}
	static get BlobStream () {
		return BlobStream;
	}
	static get Buffer () {
		return Buffer;
	}
	static get BufferStream () {
		return BufferStream;
	}
	static get Calendar () {
		return Calendar;
	}
	static get Codec () {
		return Codec;
	}
	static get Contacts () {
		return Contacts;
	}
	static get Database () {
		return Database;
	}
	static get Event () {
		return Event;
	}
	static get Filesystem () {
		return Filesystem;
	}
	static get Geolocation () {
		return Geolocation;
	}
	static get Gesture () {
		return Gesture;
	}
	static get IOStream () {
		return IOStream;
	}
	static get Locale () {
		return Locale;
	}
	static get Map () {
		return Map;
	}
	static get Media () {
		return Media;
	}
	static get Network () {
		return Network;
	}
	static get Platform () {
		return Platform;
	}
	static get Stream () {
		return Stream;
	}
	static get UI () {
		return UI;
	}
	static get Utils () {
		return Utils;
	}
	static get WatchSession () {
		return WatchSession;
	}
	static get XML () {
		return XML;
	}
	static get Yahoo () {
		return Yahoo;
	}
};
Object.freeze(_Titanium);

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