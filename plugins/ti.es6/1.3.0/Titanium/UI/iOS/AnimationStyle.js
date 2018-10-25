export default class AnimationStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.AnimationStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.AnimationStyle.apiName;
	}
	static get CURL_DOWN () {
		return Titanium.UI.iOS.AnimationStyle.CURL_DOWN;
	}
	static get CURL_UP () {
		return Titanium.UI.iOS.AnimationStyle.CURL_UP;
	}
	static get FLIP_FROM_LEFT () {
		return Titanium.UI.iOS.AnimationStyle.FLIP_FROM_LEFT;
	}
	static get FLIP_FROM_RIGHT () {
		return Titanium.UI.iOS.AnimationStyle.FLIP_FROM_RIGHT;
	}
	static get FLIP_FROM_TOP () {
		return Titanium.UI.iOS.AnimationStyle.FLIP_FROM_TOP;
	}
	static get FLIP_FROM_BOTTOM () {
		return Titanium.UI.iOS.AnimationStyle.FLIP_FROM_BOTTOM;
	}
	static get CROSS_DISSOLVE () {
		return Titanium.UI.iOS.AnimationStyle.CROSS_DISSOLVE;
	}
	static get NONE () {
		return Titanium.UI.iOS.AnimationStyle.NONE;
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
	get CURL_DOWN () {
		return this._object.CURL_DOWN;
	}
	get CURL_UP () {
		return this._object.CURL_UP;
	}
	get FLIP_FROM_LEFT () {
		return this._object.FLIP_FROM_LEFT;
	}
	get FLIP_FROM_RIGHT () {
		return this._object.FLIP_FROM_RIGHT;
	}
	get FLIP_FROM_TOP () {
		return this._object.FLIP_FROM_TOP;
	}
	get FLIP_FROM_BOTTOM () {
		return this._object.FLIP_FROM_BOTTOM;
	}
	get CROSS_DISSOLVE () {
		return this._object.CROSS_DISSOLVE;
	}
	get NONE () {
		return this._object.NONE;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.iOS.AnimationStyle.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.iOS.AnimationStyle.bubbleParent = value;
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
};
Object.freeze(AnimationStyle);

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