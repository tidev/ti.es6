export default class CollisionBehavior {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.CollisionBehavior')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createCollisionBehavior(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.CollisionBehavior.apiName;
	}
	static get boundaryIdentifiers () {
		return Titanium.UI.iOS.CollisionBehavior.boundaryIdentifiers;
	}
	static get items () {
		return Titanium.UI.iOS.CollisionBehavior.items;
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
	get boundaryIdentifiers () {
		return this._object.boundaryIdentifiers;
	}
	get collisionMode () {
		return this._object.collisionMode;
	}
	set collisionMode (value) {
		this._object.collisionMode = value;
	}
	get items () {
		return this._object.items;
	}
	get referenceInsets () {
		return this._object.referenceInsets;
	}
	set referenceInsets (value) {
		this._object.referenceInsets = value;
	}
	get treatReferenceAsBoundary () {
		return this._object.treatReferenceAsBoundary;
	}
	set treatReferenceAsBoundary (value) {
		this._object.treatReferenceAsBoundary = value;
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
	addBoundary (boundary) {
		return this._object.addBoundary(boundary);
	}
	addItem (item) {
		item = normalize(item);
		return this._object.addItem(item);
	}
	removeAllBoundaries () {
		return this._object.removeAllBoundaries();
	}
	removeBoundary (boundary) {
		return this._object.removeBoundary(boundary);
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
	getBoundaryIdentifiers () {
		return this._object.getBoundaryIdentifiers();
	}
	getCollisionMode () {
		return this._object.getCollisionMode();
	}
	setCollisionMode (collisionMode) {
		return this._object.setCollisionMode(collisionMode);
	}
	getItems () {
		return this._object.getItems();
	}
	getReferenceInsets () {
		return this._object.getReferenceInsets();
	}
	setReferenceInsets (referenceInsets) {
		return this._object.setReferenceInsets(referenceInsets);
	}
	getTreatReferenceAsBoundary () {
		return this._object.getTreatReferenceAsBoundary();
	}
	setTreatReferenceAsBoundary (treatReferenceAsBoundary) {
		return this._object.setTreatReferenceAsBoundary(treatReferenceAsBoundary);
	}
};
Object.freeze(CollisionBehavior);

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