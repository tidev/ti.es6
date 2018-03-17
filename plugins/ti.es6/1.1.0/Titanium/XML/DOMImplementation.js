import { default as Window } from './../UI/Window';
export { default as DocumentType } from './DocumentType';
import { default as DocumentType } from './DocumentType';
export { default as Document } from './Document';
import { default as Document } from './Document';

export default class DOMImplementation {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.XML.DOMImplementation')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.XML.DOMImplementation.apiName;
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
	hasFeature (feature, version) {
		return this._object.hasFeature(feature, version);
	}
	createDocumentType (qualifiedName, publicId, systemId) {
		return new DocumentType(this._object.createDocumentType(qualifiedName, publicId, systemId));
	}
	createDocument (namespaceURI, qualifiedName, doctype) {
		doctype = normalize(doctype);
		return new Document(this._object.createDocument(namespaceURI, qualifiedName, doctype));
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

	// modules
	static get DocumentType () {
		return DocumentType;
	}
	static get Document () {
		return Document;
	}
};
Object.freeze(DOMImplementation);

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