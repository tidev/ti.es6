import { default as View } from './../View';

export default class AnchorAttachmentBehavior {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.AnchorAttachmentBehavior')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createAnchorAttachmentBehavior(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.AnchorAttachmentBehavior.apiName;
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
	get anchor () {
		return this._object.anchor;
	}
	set anchor (value) {
		this._object.anchor = value;
	}
	get damping () {
		return this._object.damping;
	}
	set damping (value) {
		this._object.damping = value;
	}
	get distance () {
		return this._object.distance;
	}
	set distance (value) {
		this._object.distance = value;
	}
	get frequency () {
		return this._object.frequency;
	}
	set frequency (value) {
		this._object.frequency = value;
	}
	get item () {
		return new View(this._object.item);
	}
	set item (value) {
		this._object.item = value;
	}
	get offset () {
		return this._object.offset;
	}
	set offset (value) {
		this._object.offset = value;
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
	getAnchor () {
		return this._object.getAnchor();
	}
	setAnchor (anchor) {
		return this._object.setAnchor(anchor);
	}
	getDamping () {
		return this._object.getDamping();
	}
	setDamping (damping) {
		return this._object.setDamping(damping);
	}
	getDistance () {
		return this._object.getDistance();
	}
	setDistance (distance) {
		return this._object.setDistance(distance);
	}
	getFrequency () {
		return this._object.getFrequency();
	}
	setFrequency (frequency) {
		return this._object.setFrequency(frequency);
	}
	getItem () {
		return new View(this._object.getItem());
	}
	setItem (item) {
		item = normalize(item);
		return this._object.setItem(item);
	}
	getOffset () {
		return this._object.getOffset();
	}
	setOffset (offset) {
		return this._object.setOffset(offset);
	}

	// modules
};
Object.freeze(AnchorAttachmentBehavior);

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