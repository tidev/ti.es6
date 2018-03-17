export default class Attribute {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.Attribute')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createAttribute(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.Attribute.apiName;
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
	get type () {
		return this._object.type;
	}
	set type (value) {
		this._object.type = value;
	}
	get value () {
		return this._object.value;
	}
	set value (value) {
		this._object.value = value;
	}
	get range () {
		return this._object.range;
	}
	set range (value) {
		this._object.range = value;
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
	getType () {
		return this._object.getType();
	}
	setType (type) {
		return this._object.setType(type);
	}
	getValue () {
		return this._object.getValue();
	}
	setValue (value) {
		return this._object.setValue(value);
	}
	getRange () {
		return this._object.getRange();
	}
	setRange (range) {
		return this._object.setRange(range);
	}
};
Object.freeze(Attribute);

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