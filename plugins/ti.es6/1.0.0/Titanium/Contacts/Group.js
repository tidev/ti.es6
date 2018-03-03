import { default as Window } from './../UI/Window';

export default class Group {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Contacts.Group')) {
			this._object = object;
		} else {
			this._object = Titanium.Contacts.createGroup(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Contacts.Group.apiName;
	}
	static get identifier () {
		return Titanium.Contacts.Group.identifier;
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
	get lifecycleContainer () {
		return new Window(this._object.lifecycleContainer);
	}
	set lifecycleContainer (value) {
		this._object.lifecycleContainer = value;
	}
	get identifier () {
		return this._object.identifier;
	}
	get name () {
		return this._object.name;
	}
	set name (value) {
		this._object.name = value;
	}
	get recordId () {
		return this._object.recordId;
	}
	set recordId (value) {
		this._object.recordId = value;
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
	add (person) {
		person = normalize(person);
		return this._object.add(person);
	}
	members () {
		return this._object.members();
	}
	remove (person) {
		person = normalize(person);
		return this._object.remove(person);
	}
	sortedMembers (sortBy) {
		return this._object.sortedMembers(sortBy);
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
	getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	getIdentifier () {
		return this._object.getIdentifier();
	}
	getName () {
		return this._object.getName();
	}
	setName (name) {
		return this._object.setName(name);
	}
	getRecordId () {
		return this._object.getRecordId();
	}
	setRecordId (recordId) {
		return this._object.setRecordId(recordId);
	}

	// modules
};
Object.freeze(Group);

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