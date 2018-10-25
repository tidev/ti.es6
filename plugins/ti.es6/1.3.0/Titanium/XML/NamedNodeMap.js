import { default as Window } from './../UI/Window';
import { default as Node } from './Node';

export default class NamedNodeMap {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.XML.NamedNodeMap')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.XML.NamedNodeMap.apiName;
	}
	static get length () {
		return Titanium.XML.NamedNodeMap.length;
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
	get length () {
		return this._object.length;
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
	getNamedItem (name) {
		return new Node(this._object.getNamedItem(name));
	}
	setNamedItem (node) {
		node = normalize(node);
		return new Node(this._object.setNamedItem(node));
	}
	removeNamedItem (name) {
		return new Node(this._object.removeNamedItem(name));
	}
	item (index) {
		return new Node(this._object.item(index));
	}
	getNamedItemNS (namespaceURI, localName) {
		return new Node(this._object.getNamedItemNS(namespaceURI, localName));
	}
	setNamedItemNS (node) {
		node = normalize(node);
		return new Node(this._object.setNamedItemNS(node));
	}
	removeNamedItemNS (namespaceURI, localName) {
		return new Node(this._object.removeNamedItemNS(namespaceURI, localName));
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
	getLength () {
		return this._object.getLength();
	}

	// modules
};
Object.freeze(NamedNodeMap);

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