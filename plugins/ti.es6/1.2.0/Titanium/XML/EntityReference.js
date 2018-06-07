import { default as Window } from './../UI/Window';
import { default as Node } from './Node';
import { default as NodeList } from './NodeList';
import { default as NamedNodeMap } from './NamedNodeMap';
import { default as Document } from './Document';

export default class EntityReference {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.XML.EntityReference')) {
			this._object = object;
		} else {
			this._object = Titanium.XML.Document.createEntityReference(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.XML.EntityReference.apiName;
	}
	static get ATTRIBUTE_NODE () {
		return Titanium.XML.EntityReference.ATTRIBUTE_NODE;
	}
	static get CDATA_SECTION_NODE () {
		return Titanium.XML.EntityReference.CDATA_SECTION_NODE;
	}
	static get COMMENT_NODE () {
		return Titanium.XML.EntityReference.COMMENT_NODE;
	}
	static get DOCUMENT_FRAGMENT_NODE () {
		return Titanium.XML.EntityReference.DOCUMENT_FRAGMENT_NODE;
	}
	static get DOCUMENT_NODE () {
		return Titanium.XML.EntityReference.DOCUMENT_NODE;
	}
	static get DOCUMENT_TYPE_NODE () {
		return Titanium.XML.EntityReference.DOCUMENT_TYPE_NODE;
	}
	static get ELEMENT_NODE () {
		return Titanium.XML.EntityReference.ELEMENT_NODE;
	}
	static get ENTITY_NODE () {
		return Titanium.XML.EntityReference.ENTITY_NODE;
	}
	static get ENTITY_REFERENCE_NODE () {
		return Titanium.XML.EntityReference.ENTITY_REFERENCE_NODE;
	}
	static get NOTATION_NODE () {
		return Titanium.XML.EntityReference.NOTATION_NODE;
	}
	static get PROCESSING_INSTRUCTION_NODE () {
		return Titanium.XML.EntityReference.PROCESSING_INSTRUCTION_NODE;
	}
	static get TEXT_NODE () {
		return Titanium.XML.EntityReference.TEXT_NODE;
	}
	static get nodeName () {
		return Titanium.XML.EntityReference.nodeName;
	}
	static get nodeType () {
		return Titanium.XML.EntityReference.nodeType;
	}
	static get parentNode () {
		return new Node(Titanium.XML.EntityReference.parentNode);
	}
	static get childNodes () {
		return new NodeList(Titanium.XML.EntityReference.childNodes);
	}
	static get firstChild () {
		return new Node(Titanium.XML.EntityReference.firstChild);
	}
	static get lastChild () {
		return new Node(Titanium.XML.EntityReference.lastChild);
	}
	static get previousSibling () {
		return new Node(Titanium.XML.EntityReference.previousSibling);
	}
	static get nextSibling () {
		return new Node(Titanium.XML.EntityReference.nextSibling);
	}
	static get attributes () {
		return new NamedNodeMap(Titanium.XML.EntityReference.attributes);
	}
	static get ownerDocument () {
		return new Document(Titanium.XML.EntityReference.ownerDocument);
	}
	static get namespaceURI () {
		return Titanium.XML.EntityReference.namespaceURI;
	}
	static get text () {
		return Titanium.XML.EntityReference.text;
	}
	static get textContent () {
		return Titanium.XML.EntityReference.textContent;
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
	get ATTRIBUTE_NODE () {
		return this._object.ATTRIBUTE_NODE;
	}
	get CDATA_SECTION_NODE () {
		return this._object.CDATA_SECTION_NODE;
	}
	get COMMENT_NODE () {
		return this._object.COMMENT_NODE;
	}
	get DOCUMENT_FRAGMENT_NODE () {
		return this._object.DOCUMENT_FRAGMENT_NODE;
	}
	get DOCUMENT_NODE () {
		return this._object.DOCUMENT_NODE;
	}
	get DOCUMENT_TYPE_NODE () {
		return this._object.DOCUMENT_TYPE_NODE;
	}
	get ELEMENT_NODE () {
		return this._object.ELEMENT_NODE;
	}
	get ENTITY_NODE () {
		return this._object.ENTITY_NODE;
	}
	get ENTITY_REFERENCE_NODE () {
		return this._object.ENTITY_REFERENCE_NODE;
	}
	get NOTATION_NODE () {
		return this._object.NOTATION_NODE;
	}
	get PROCESSING_INSTRUCTION_NODE () {
		return this._object.PROCESSING_INSTRUCTION_NODE;
	}
	get TEXT_NODE () {
		return this._object.TEXT_NODE;
	}
	get nodeValue () {
		return this._object.nodeValue;
	}
	set nodeValue (value) {
		this._object.nodeValue = value;
	}
	get prefix () {
		return this._object.prefix;
	}
	set prefix (value) {
		this._object.prefix = value;
	}
	get nodeName () {
		return this._object.nodeName;
	}
	get nodeType () {
		return this._object.nodeType;
	}
	get parentNode () {
		return new Node(this._object.parentNode);
	}
	get childNodes () {
		return new NodeList(this._object.childNodes);
	}
	get firstChild () {
		return new Node(this._object.firstChild);
	}
	get lastChild () {
		return new Node(this._object.lastChild);
	}
	get previousSibling () {
		return new Node(this._object.previousSibling);
	}
	get nextSibling () {
		return new Node(this._object.nextSibling);
	}
	get attributes () {
		return new NamedNodeMap(this._object.attributes);
	}
	get ownerDocument () {
		return new Document(this._object.ownerDocument);
	}
	get namespaceURI () {
		return this._object.namespaceURI;
	}
	get localName () {
		return this._object.localName;
	}
	set localName (value) {
		this._object.localName = value;
	}
	get text () {
		return this._object.text;
	}
	get textContent () {
		return this._object.textContent;
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
	insertBefore (newChild, refChild) {
		newChild = normalize(newChild);
		refChild = normalize(refChild);
		return new Node(this._object.insertBefore(newChild, refChild));
	}
	replaceChild (newChild, oldChild) {
		newChild = normalize(newChild);
		oldChild = normalize(oldChild);
		return new Node(this._object.replaceChild(newChild, oldChild));
	}
	removeChild (oldChild) {
		oldChild = normalize(oldChild);
		return new Node(this._object.removeChild(oldChild));
	}
	appendChild (newChild) {
		newChild = normalize(newChild);
		return new Node(this._object.appendChild(newChild));
	}
	hasChildNodes () {
		return this._object.hasChildNodes();
	}
	cloneNode (deep) {
		return new Node(this._object.cloneNode(deep));
	}
	normalize () {
		return this._object.normalize();
	}
	isSupported (feature, version) {
		return this._object.isSupported(feature, version);
	}
	hasAttributes () {
		return this._object.hasAttributes();
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
	getAttributes () {
		return new NamedNodeMap(this._object.getAttributes());
	}

	// modules
};
Object.freeze(EntityReference);

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