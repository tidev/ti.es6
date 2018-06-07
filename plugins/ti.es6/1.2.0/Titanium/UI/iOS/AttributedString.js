export default class AttributedString {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.AttributedString')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createAttributedString(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.AttributedString.apiName;
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
	get text () {
		return this._object.text;
	}
	set text (value) {
		this._object.text = value;
	}
	get attributes () {
		return this._object.attributes;
	}
	set attributes (value) {
		this._object.attributes = value;
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
	addAttribute (attribute) {
		return this._object.addAttribute(attribute);
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
	getText () {
		return this._object.getText();
	}
	setText (text) {
		return this._object.setText(text);
	}
	getAttributes () {
		return this._object.getAttributes();
	}
	setAttributes (attributes) {
		return this._object.setAttributes(attributes);
	}
};
Object.freeze(AttributedString);

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