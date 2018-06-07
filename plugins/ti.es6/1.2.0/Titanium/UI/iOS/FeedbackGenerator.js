export default class FeedbackGenerator {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.FeedbackGenerator')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createFeedbackGenerator(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.FeedbackGenerator.apiName;
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
	prepare () {
		return this._object.prepare();
	}
	selectionChanged () {
		return this._object.selectionChanged();
	}
	impactOccurred () {
		return this._object.impactOccurred();
	}
	notificationOccurred (notificationType) {
		return this._object.notificationOccurred(notificationType);
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
};
Object.freeze(FeedbackGenerator);

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