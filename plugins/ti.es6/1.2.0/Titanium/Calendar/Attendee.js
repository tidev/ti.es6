export default class Attendee {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Calendar.Attendee')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Calendar.Attendee.apiName;
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
	get isOrganizer () {
		return this._object.isOrganizer;
	}
	set isOrganizer (value) {
		this._object.isOrganizer = value;
	}
	get name () {
		return this._object.name;
	}
	set name (value) {
		this._object.name = value;
	}
	get email () {
		return this._object.email;
	}
	set email (value) {
		this._object.email = value;
	}
	get role () {
		return this._object.role;
	}
	set role (value) {
		this._object.role = value;
	}
	get type () {
		return this._object.type;
	}
	set type (value) {
		this._object.type = value;
	}
	get status () {
		return this._object.status;
	}
	set status (value) {
		this._object.status = value;
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
	getIsOrganizer () {
		return this._object.getIsOrganizer();
	}
	setIsOrganizer (isOrganizer) {
		return this._object.setIsOrganizer(isOrganizer);
	}
	getName () {
		return this._object.getName();
	}
	setName (name) {
		return this._object.setName(name);
	}
	getEmail () {
		return this._object.getEmail();
	}
	setEmail (email) {
		return this._object.setEmail(email);
	}
	getRole () {
		return this._object.getRole();
	}
	setRole (role) {
		return this._object.setRole(role);
	}
	getType () {
		return this._object.getType();
	}
	setType (type) {
		return this._object.setType(type);
	}
	getStatus () {
		return this._object.getStatus();
	}
	setStatus (status) {
		return this._object.setStatus(status);
	}
};
Object.freeze(Attendee);

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