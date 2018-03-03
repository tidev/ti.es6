export default class GravityBehavior {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.GravityBehavior')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createGravityBehavior(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.GravityBehavior.apiName;
	}
	static get items () {
		return Titanium.UI.iOS.GravityBehavior.items;
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
	get angle () {
		return this._object.angle;
	}
	set angle (value) {
		this._object.angle = value;
	}
	get gravityDirection () {
		return this._object.gravityDirection;
	}
	set gravityDirection (value) {
		this._object.gravityDirection = value;
	}
	get items () {
		return this._object.items;
	}
	get magnitude () {
		return this._object.magnitude;
	}
	set magnitude (value) {
		this._object.magnitude = value;
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
	addItem (item) {
		item = normalize(item);
		return this._object.addItem(item);
	}
	removeItem (item) {
		item = normalize(item);
		return this._object.removeItem(item);
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
	getAngle () {
		return this._object.getAngle();
	}
	setAngle (angle) {
		return this._object.setAngle(angle);
	}
	getGravityDirection () {
		return this._object.getGravityDirection();
	}
	setGravityDirection (gravityDirection) {
		return this._object.setGravityDirection(gravityDirection);
	}
	getItems () {
		return this._object.getItems();
	}
	getMagnitude () {
		return this._object.getMagnitude();
	}
	setMagnitude (magnitude) {
		return this._object.setMagnitude(magnitude);
	}
};
Object.freeze(GravityBehavior);

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