export default class SystemButtonStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.SystemButtonStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.SystemButtonStyle.apiName;
	}
	static get BAR () {
		return Titanium.UI.iPhone.SystemButtonStyle.BAR;
	}
	static get BORDERED () {
		return Titanium.UI.iPhone.SystemButtonStyle.BORDERED;
	}
	static get DONE () {
		return Titanium.UI.iPhone.SystemButtonStyle.DONE;
	}
	static get PLAIN () {
		return Titanium.UI.iPhone.SystemButtonStyle.PLAIN;
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
	get BAR () {
		return this._object.BAR;
	}
	get BORDERED () {
		return this._object.BORDERED;
	}
	get DONE () {
		return this._object.DONE;
	}
	get PLAIN () {
		return this._object.PLAIN;
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
};
Object.freeze(SystemButtonStyle);

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