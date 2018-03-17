import { default as Window } from './Window';

export default class Clipboard {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.Clipboard')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.Clipboard.apiName;
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
	get name () {
		return this._object.name;
	}
	set name (value) {
		this._object.name = value;
	}
	get unique () {
		return this._object.unique;
	}
	set unique (value) {
		this._object.unique = value;
	}
	get allowCreation () {
		return this._object.allowCreation;
	}
	set allowCreation (value) {
		this._object.allowCreation = value;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.Clipboard.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.Clipboard.bubbleParent = value;
	}
	static get name () {
		return Titanium.UI.Clipboard.name;
	}
	static set name (value) {
		Titanium.UI.Clipboard.name = value;
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
	hasURLs () {
		return this._object.hasURLs();
	}
	hasImages () {
		return this._object.hasImages();
	}
	hasColors () {
		return this._object.hasColors();
	}
	setItems (items) {
		return this._object.setItems(items);
	}
	getItems () {
		return this._object.getItems();
	}
	remove () {
		return this._object.remove();
	}
	clearData (type) {
		return this._object.clearData(type);
	}
	clearText () {
		return this._object.clearText();
	}
	getData (type) {
		return this._object.getData(type);
	}
	getText () {
		return this._object.getText();
	}
	hasData (type) {
		return this._object.hasData(type);
	}
	hasText () {
		return this._object.hasText();
	}
	setData (type, data) {
		data = normalize(data);
		return this._object.setData(type, data);
	}
	setText (text) {
		return this._object.setText(text);
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
	getName () {
		return this._object.getName();
	}
	setName (name) {
		return this._object.setName(name);
	}
	getUnique () {
		return this._object.getUnique();
	}
	setUnique (unique) {
		return this._object.setUnique(unique);
	}
	getAllowCreation () {
		return this._object.getAllowCreation();
	}
	setAllowCreation (allowCreation) {
		return this._object.setAllowCreation(allowCreation);
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
	static hasURLs () {
		return this._object.hasURLs();
	}
	static hasImages () {
		return this._object.hasImages();
	}
	static hasColors () {
		return this._object.hasColors();
	}
	static setItems (items) {
		return this._object.setItems(items);
	}
	static getItems () {
		return this._object.getItems();
	}
	static remove () {
		return this._object.remove();
	}
	static clearData (type) {
		return this._object.clearData(type);
	}
	static clearText () {
		return this._object.clearText();
	}
	static getData (type) {
		return this._object.getData(type);
	}
	static getText () {
		return this._object.getText();
	}
	static hasData (type) {
		return this._object.hasData(type);
	}
	static hasText () {
		return this._object.hasText();
	}
	static setData (type, data) {
		data = normalize(data);
		return this._object.setData(type, data);
	}
	static setText (text) {
		return this._object.setText(text);
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
	static getName () {
		return this._object.getName();
	}
	static setName (name) {
		return this._object.setName(name);
	}
	static getUnique () {
		return this._object.getUnique();
	}
	static setUnique (unique) {
		return this._object.setUnique(unique);
	}
	static getAllowCreation () {
		return this._object.getAllowCreation();
	}
	static setAllowCreation (allowCreation) {
		return this._object.setAllowCreation(allowCreation);
	}

	// modules
};
Object.freeze(Clipboard);

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