export default class RowAnimationStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.RowAnimationStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.RowAnimationStyle.apiName;
	}
	static get BOTTOM () {
		return Titanium.UI.iPhone.RowAnimationStyle.BOTTOM;
	}
	static get FADE () {
		return Titanium.UI.iPhone.RowAnimationStyle.FADE;
	}
	static get LEFT () {
		return Titanium.UI.iPhone.RowAnimationStyle.LEFT;
	}
	static get NONE () {
		return Titanium.UI.iPhone.RowAnimationStyle.NONE;
	}
	static get RIGHT () {
		return Titanium.UI.iPhone.RowAnimationStyle.RIGHT;
	}
	static get TOP () {
		return Titanium.UI.iPhone.RowAnimationStyle.TOP;
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