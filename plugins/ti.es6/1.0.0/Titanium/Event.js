export default class Event {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Event')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get source () {
		return Titanium.Event.source;
	}
	static get type () {
		return Titanium.Event.type;
	}
	static get bubbles () {
		return Titanium.Event.bubbles;
	}

	// properties
	get source () {
		return this._object.source;
	}
	get type () {
		return this._object.type;
	}
	get bubbles () {
		return this._object.bubbles;
	}
	get cancelBubble () {
		return this._object.cancelBubble;
	}
	set cancelBubble (value) {
		this._object.cancelBubble = value;
	}

	// static properties
	static get cancelBubble () {
		return Titanium.Event.cancelBubble;
	}
	static set cancelBubble (value) {
		Titanium.Event.cancelBubble = value;
	}
};
Object.freeze(Event);

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