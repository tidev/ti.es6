import { default as Window } from './UI/Window';
import { default as DB } from './Database/DB';

export default class Database {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Database')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Database.apiName;
	}
	static get FIELD_TYPE_DOUBLE () {
		return Titanium.Database.FIELD_TYPE_DOUBLE;
	}
	static get FIELD_TYPE_FLOAT () {
		return Titanium.Database.FIELD_TYPE_FLOAT;
	}
	static get FIELD_TYPE_INT () {
		return Titanium.Database.FIELD_TYPE_INT;
	}
	static get FIELD_TYPE_STRING () {
		return Titanium.Database.FIELD_TYPE_STRING;
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
	get FIELD_TYPE_DOUBLE () {
		return this._object.FIELD_TYPE_DOUBLE;
	}
	get FIELD_TYPE_FLOAT () {
		return this._object.FIELD_TYPE_FLOAT;
	}
	get FIELD_TYPE_INT () {
		return this._object.FIELD_TYPE_INT;
	}
	get FIELD_TYPE_STRING () {
		return this._object.FIELD_TYPE_STRING;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Database.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Database.bubbleParent = value;
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
	install (path, dbName) {
		return new DB(this._object.install(path, dbName));
	}
	open (dbName) {
		return new DB(this._object.open(dbName));
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
	static install (path, dbName) {
		return new DB(this._object.install(path, dbName));
	}
	static open (dbName) {
		return new DB(this._object.open(dbName));
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

	// modules
};
Object.freeze(Database);

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