import { default as Window } from './UI/Window';
import { default as Group } from './Contacts/Group';
import { default as Person } from './Contacts/Person';

export default class Contacts {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Contacts')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Contacts.apiName;
	}
	static get CONTACTS_KIND_ORGANIZATION () {
		return Titanium.Contacts.CONTACTS_KIND_ORGANIZATION;
	}
	static get CONTACTS_KIND_PERSON () {
		return Titanium.Contacts.CONTACTS_KIND_PERSON;
	}
	static get CONTACTS_SORT_FIRST_NAME () {
		return Titanium.Contacts.CONTACTS_SORT_FIRST_NAME;
	}
	static get CONTACTS_SORT_LAST_NAME () {
		return Titanium.Contacts.CONTACTS_SORT_LAST_NAME;
	}
	static get AUTHORIZATION_AUTHORIZED () {
		return Titanium.Contacts.AUTHORIZATION_AUTHORIZED;
	}
	static get AUTHORIZATION_DENIED () {
		return Titanium.Contacts.AUTHORIZATION_DENIED;
	}
	static get AUTHORIZATION_RESTRICTED () {
		return Titanium.Contacts.AUTHORIZATION_RESTRICTED;
	}
	static get AUTHORIZATION_UNKNOWN () {
		return Titanium.Contacts.AUTHORIZATION_UNKNOWN;
	}
	static get contactsAuthorization () {
		return Titanium.Contacts.contactsAuthorization;
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
	get CONTACTS_KIND_ORGANIZATION () {
		return this._object.CONTACTS_KIND_ORGANIZATION;
	}
	get CONTACTS_KIND_PERSON () {
		return this._object.CONTACTS_KIND_PERSON;
	}
	get CONTACTS_SORT_FIRST_NAME () {
		return this._object.CONTACTS_SORT_FIRST_NAME;
	}
	get CONTACTS_SORT_LAST_NAME () {
		return this._object.CONTACTS_SORT_LAST_NAME;
	}
	get AUTHORIZATION_AUTHORIZED () {
		return this._object.AUTHORIZATION_AUTHORIZED;
	}
	get AUTHORIZATION_DENIED () {
		return this._object.AUTHORIZATION_DENIED;
	}
	get AUTHORIZATION_RESTRICTED () {
		return this._object.AUTHORIZATION_RESTRICTED;
	}
	get AUTHORIZATION_UNKNOWN () {
		return this._object.AUTHORIZATION_UNKNOWN;
	}
	get contactsAuthorization () {
		return this._object.contactsAuthorization;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Contacts.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Contacts.bubbleParent = value;
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
	hasContactsPermissions () {
		return this._object.hasContactsPermissions();
	}
	requestAuthorization (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAuthorization(resolve));
		}
		return this._object.requestAuthorization(callback);
	}
	getAllGroups () {
		return this._object.getAllGroups();
	}
	getAllPeople (limit) {
		return this._object.getAllPeople(limit);
	}
	getGroupByID (id) {
		return new Group(this._object.getGroupByID(id));
	}
	getGroupByIdentifier (id) {
		return new Group(this._object.getGroupByIdentifier(id));
	}
	getPeopleWithName (name) {
		return this._object.getPeopleWithName(name);
	}
	getPersonByID (id) {
		return new Person(this._object.getPersonByID(id));
	}
	getPersonByIdentifier (id) {
		return new Person(this._object.getPersonByIdentifier(id));
	}
	removeGroup (group) {
		group = normalize(group);
		return this._object.removeGroup(group);
	}
	removePerson (person) {
		person = normalize(person);
		return this._object.removePerson(person);
	}
	requestContactsPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestContactsPermissions(resolve));
		}
		return this._object.requestContactsPermissions(callback);
	}
	revert () {
		return this._object.revert();
	}
	save (contacts) {
		return this._object.save(contacts);
	}
	showContacts (params) {
		return this._object.showContacts(params);
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
	getContactsAuthorization () {
		return this._object.getContactsAuthorization();
	}

	// static methods
	static addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	static applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	static fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	static removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	static hasContactsPermissions () {
		return this._object.hasContactsPermissions();
	}
	static requestAuthorization (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestAuthorization(resolve));
		}
		return this._object.requestAuthorization(callback);
	}
	static getAllGroups () {
		return this._object.getAllGroups();
	}
	static getAllPeople (limit) {
		return this._object.getAllPeople(limit);
	}
	static getGroupByID (id) {
		return new Group(this._object.getGroupByID(id));
	}
	static getGroupByIdentifier (id) {
		return new Group(this._object.getGroupByIdentifier(id));
	}
	static getPeopleWithName (name) {
		return this._object.getPeopleWithName(name);
	}
	static getPersonByID (id) {
		return new Person(this._object.getPersonByID(id));
	}
	static getPersonByIdentifier (id) {
		return new Person(this._object.getPersonByIdentifier(id));
	}
	static removeGroup (group) {
		group = normalize(group);
		return this._object.removeGroup(group);
	}
	static removePerson (person) {
		person = normalize(person);
		return this._object.removePerson(person);
	}
	static requestContactsPermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestContactsPermissions(resolve));
		}
		return this._object.requestContactsPermissions(callback);
	}
	static revert () {
		return this._object.revert();
	}
	static save (contacts) {
		return this._object.save(contacts);
	}
	static showContacts (params) {
		return this._object.showContacts(params);
	}
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	static getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	static setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	static getContactsAuthorization () {
		return this._object.getContactsAuthorization();
	}

	// modules
};
Object.freeze(Contacts);

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