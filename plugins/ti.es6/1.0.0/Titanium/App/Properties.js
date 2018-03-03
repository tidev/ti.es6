import { default as Window } from './../UI/Window';

export default class Properties {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.Properties')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.Properties.apiName;
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

	// static properties
	static get bubbleParent () {
		return Titanium.App.Properties.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.App.Properties.bubbleParent = value;
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
	getBool (property, def) {
		return this._object.getBool(property, def);
	}
	getDouble (property, def) {
		return this._object.getDouble(property, def);
	}
	getInt (property, def) {
		return this._object.getInt(property, def);
	}
	getList (property, def) {
		return this._object.getList(property, def);
	}
	getObject (property, def) {
		def = normalize(def);
		return this._object.getObject(property, def);
	}
	getString (property, def) {
		return this._object.getString(property, def);
	}
	hasProperty (property) {
		return this._object.hasProperty(property);
	}
	listProperties () {
		return this._object.listProperties();
	}
	removeAllProperties () {
		return this._object.removeAllProperties();
	}
	removeProperty (property) {
		return this._object.removeProperty(property);
	}
	setBool (property, value) {
		return this._object.setBool(property, value);
	}
	setDouble (property, value) {
		return this._object.setDouble(property, value);
	}
	setInt (property, value) {
		return this._object.setInt(property, value);
	}
	setList (property, value) {
		return this._object.setList(property, value);
	}
	setObject (property, value) {
		value = normalize(value);
		return this._object.setObject(property, value);
	}
	setString (property, value) {
		return this._object.setString(property, value);
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
	static getBool (property, def) {
		return this._object.getBool(property, def);
	}
	static getDouble (property, def) {
		return this._object.getDouble(property, def);
	}
	static getInt (property, def) {
		return this._object.getInt(property, def);
	}
	static getList (property, def) {
		return this._object.getList(property, def);
	}
	static getObject (property, def) {
		def = normalize(def);
		return this._object.getObject(property, def);
	}
	static getString (property, def) {
		return this._object.getString(property, def);
	}
	static hasProperty (property) {
		return this._object.hasProperty(property);
	}
	static listProperties () {
		return this._object.listProperties();
	}
	static removeAllProperties () {
		return this._object.removeAllProperties();
	}
	static removeProperty (property) {
		return this._object.removeProperty(property);
	}
	static setBool (property, value) {
		return this._object.setBool(property, value);
	}
	static setDouble (property, value) {
		return this._object.setDouble(property, value);
	}
	static setInt (property, value) {
		return this._object.setInt(property, value);
	}
	static setList (property, value) {
		return this._object.setList(property, value);
	}
	static setObject (property, value) {
		value = normalize(value);
		return this._object.setObject(property, value);
	}
	static setString (property, value) {
		return this._object.setString(property, value);
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
Object.freeze(Properties);

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