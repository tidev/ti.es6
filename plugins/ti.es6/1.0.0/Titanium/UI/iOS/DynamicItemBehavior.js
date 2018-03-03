export default class DynamicItemBehavior {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.DynamicItemBehavior')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createDynamicItemBehavior(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.DynamicItemBehavior.apiName;
	}
	static get items () {
		return Titanium.UI.iOS.DynamicItemBehavior.items;
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
	get allowsRotation () {
		return this._object.allowsRotation;
	}
	set allowsRotation (value) {
		this._object.allowsRotation = value;
	}
	get angularResistance () {
		return this._object.angularResistance;
	}
	set angularResistance (value) {
		this._object.angularResistance = value;
	}
	get density () {
		return this._object.density;
	}
	set density (value) {
		this._object.density = value;
	}
	get elasticity () {
		return this._object.elasticity;
	}
	set elasticity (value) {
		this._object.elasticity = value;
	}
	get friction () {
		return this._object.friction;
	}
	set friction (value) {
		this._object.friction = value;
	}
	get items () {
		return this._object.items;
	}
	get resistance () {
		return this._object.resistance;
	}
	set resistance (value) {
		this._object.resistance = value;
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
	addAngularVelocityForItem (item, velocity) {
		item = normalize(item);
		return this._object.addAngularVelocityForItem(item, velocity);
	}
	addItem (item) {
		item = normalize(item);
		return this._object.addItem(item);
	}
	addLinearVelocityForItem (item, velocity) {
		item = normalize(item);
		return this._object.addLinearVelocityForItem(item, velocity);
	}
	angularVelocityForItem (item) {
		item = normalize(item);
		return this._object.angularVelocityForItem(item);
	}
	linearVelocityForItem (item) {
		item = normalize(item);
		return this._object.linearVelocityForItem(item);
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
	getAllowsRotation () {
		return this._object.getAllowsRotation();
	}
	setAllowsRotation (allowsRotation) {
		return this._object.setAllowsRotation(allowsRotation);
	}
	getAngularResistance () {
		return this._object.getAngularResistance();
	}
	setAngularResistance (angularResistance) {
		return this._object.setAngularResistance(angularResistance);
	}
	getDensity () {
		return this._object.getDensity();
	}
	setDensity (density) {
		return this._object.setDensity(density);
	}
	getElasticity () {
		return this._object.getElasticity();
	}
	setElasticity (elasticity) {
		return this._object.setElasticity(elasticity);
	}
	getFriction () {
		return this._object.getFriction();
	}
	setFriction (friction) {
		return this._object.setFriction(friction);
	}
	getItems () {
		return this._object.getItems();
	}
	getResistance () {
		return this._object.getResistance();
	}
	setResistance (resistance) {
		return this._object.setResistance(resistance);
	}
};
Object.freeze(DynamicItemBehavior);

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