export default class RowAnimationStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.RowAnimationStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.RowAnimationStyle.apiName;
	}
	static get BOTTOM () {
		return Titanium.UI.iOS.RowAnimationStyle.BOTTOM;
	}
	static get FADE () {
		return Titanium.UI.iOS.RowAnimationStyle.FADE;
	}
	static get LEFT () {
		return Titanium.UI.iOS.RowAnimationStyle.LEFT;
	}
	static get NONE () {
		return Titanium.UI.iOS.RowAnimationStyle.NONE;
	}
	static get RIGHT () {
		return Titanium.UI.iOS.RowAnimationStyle.RIGHT;
	}
	static get TOP () {
		return Titanium.UI.iOS.RowAnimationStyle.TOP;
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
	get BOTTOM () {
		return this._object.BOTTOM;
	}
	get FADE () {
		return this._object.FADE;
	}
	get LEFT () {
		return this._object.LEFT;
	}
	get NONE () {
		return this._object.NONE;
	}
	get RIGHT () {
		return this._object.RIGHT;
	}
	get TOP () {
		return this._object.TOP;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.iOS.RowAnimationStyle.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.iOS.RowAnimationStyle.bubbleParent = value;
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
Object.freeze(RowAnimationStyle);

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