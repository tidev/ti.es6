export default class StatusBar {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.StatusBar')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.StatusBar.apiName;
	}
	static get ANIMATION_STYLE_NONE () {
		return Titanium.UI.iOS.StatusBar.ANIMATION_STYLE_NONE;
	}
	static get ANIMATION_STYLE_SLIDE () {
		return Titanium.UI.iOS.StatusBar.ANIMATION_STYLE_SLIDE;
	}
	static get ANIMATION_STYLE_FADE () {
		return Titanium.UI.iOS.StatusBar.ANIMATION_STYLE_FADE;
	}
	static get DEFAULT () {
		return Titanium.UI.iOS.StatusBar.DEFAULT;
	}
	static get GRAY () {
		return Titanium.UI.iOS.StatusBar.GRAY;
	}
	static get GREY () {
		return Titanium.UI.iOS.StatusBar.GREY;
	}
	static get LIGHT_CONTENT () {
		return Titanium.UI.iOS.StatusBar.LIGHT_CONTENT;
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
	get ANIMATION_STYLE_NONE () {
		return this._object.ANIMATION_STYLE_NONE;
	}
	get ANIMATION_STYLE_SLIDE () {
		return this._object.ANIMATION_STYLE_SLIDE;
	}
	get ANIMATION_STYLE_FADE () {
		return this._object.ANIMATION_STYLE_FADE;
	}
	get DEFAULT () {
		return this._object.DEFAULT;
	}
	get GRAY () {
		return this._object.GRAY;
	}
	get GREY () {
		return this._object.GREY;
	}
	get LIGHT_CONTENT () {
		return this._object.LIGHT_CONTENT;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.iOS.StatusBar.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.iOS.StatusBar.bubbleParent = value;
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
Object.freeze(StatusBar);

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