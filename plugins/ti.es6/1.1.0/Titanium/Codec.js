import { default as Window } from './UI/Window';

export default class Codec {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Codec')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Codec.apiName;
	}
	static get CHARSET_ASCII () {
		return Titanium.Codec.CHARSET_ASCII;
	}
	static get CHARSET_ISO_LATIN_1 () {
		return Titanium.Codec.CHARSET_ISO_LATIN_1;
	}
	static get CHARSET_UTF8 () {
		return Titanium.Codec.CHARSET_UTF8;
	}
	static get CHARSET_UTF16 () {
		return Titanium.Codec.CHARSET_UTF16;
	}
	static get CHARSET_UTF16BE () {
		return Titanium.Codec.CHARSET_UTF16BE;
	}
	static get CHARSET_UTF16LE () {
		return Titanium.Codec.CHARSET_UTF16LE;
	}
	static get TYPE_BYTE () {
		return Titanium.Codec.TYPE_BYTE;
	}
	static get TYPE_SHORT () {
		return Titanium.Codec.TYPE_SHORT;
	}
	static get TYPE_INT () {
		return Titanium.Codec.TYPE_INT;
	}
	static get TYPE_FLOAT () {
		return Titanium.Codec.TYPE_FLOAT;
	}
	static get TYPE_LONG () {
		return Titanium.Codec.TYPE_LONG;
	}
	static get TYPE_DOUBLE () {
		return Titanium.Codec.TYPE_DOUBLE;
	}
	static get BIG_ENDIAN () {
		return Titanium.Codec.BIG_ENDIAN;
	}
	static get LITTLE_ENDIAN () {
		return Titanium.Codec.LITTLE_ENDIAN;
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
	get CHARSET_ASCII () {
		return this._object.CHARSET_ASCII;
	}
	get CHARSET_ISO_LATIN_1 () {
		return this._object.CHARSET_ISO_LATIN_1;
	}
	get CHARSET_UTF8 () {
		return this._object.CHARSET_UTF8;
	}
	get CHARSET_UTF16 () {
		return this._object.CHARSET_UTF16;
	}
	get CHARSET_UTF16BE () {
		return this._object.CHARSET_UTF16BE;
	}
	get CHARSET_UTF16LE () {
		return this._object.CHARSET_UTF16LE;
	}
	get TYPE_BYTE () {
		return this._object.TYPE_BYTE;
	}
	get TYPE_SHORT () {
		return this._object.TYPE_SHORT;
	}
	get TYPE_INT () {
		return this._object.TYPE_INT;
	}
	get TYPE_FLOAT () {
		return this._object.TYPE_FLOAT;
	}
	get TYPE_LONG () {
		return this._object.TYPE_LONG;
	}
	get TYPE_DOUBLE () {
		return this._object.TYPE_DOUBLE;
	}
	get BIG_ENDIAN () {
		return this._object.BIG_ENDIAN;
	}
	get LITTLE_ENDIAN () {
		return this._object.LITTLE_ENDIAN;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Codec.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Codec.bubbleParent = value;
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
	getNativeByteOrder () {
		return this._object.getNativeByteOrder();
	}
	encodeNumber (options) {
		return this._object.encodeNumber(options);
	}
	decodeNumber (options) {
		return this._object.decodeNumber(options);
	}
	encodeString (options) {
		return this._object.encodeString(options);
	}
	decodeString (options) {
		return this._object.decodeString(options);
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
	static getNativeByteOrder () {
		return this._object.getNativeByteOrder();
	}
	static encodeNumber (options) {
		return this._object.encodeNumber(options);
	}
	static decodeNumber (options) {
		return this._object.decodeNumber(options);
	}
	static encodeString (options) {
		return this._object.encodeString(options);
	}
	static decodeString (options) {
		return this._object.decodeString(options);
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
};
Object.freeze(Codec);

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