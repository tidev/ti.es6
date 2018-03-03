import { default as Window } from './../UI/Window';
import { default as Node } from './Node';
import { default as NodeList } from './NodeList';
import { default as NamedNodeMap } from './NamedNodeMap';
import { default as DocumentType } from './DocumentType';
import { default as DOMImplementation } from './DOMImplementation';
import { default as Element } from './Element';
export { default as DocumentFragment } from './DocumentFragment';
import { default as DocumentFragment } from './DocumentFragment';
export { default as Text } from './Text';
import { default as Text } from './Text';
export { default as Comment } from './Comment';
import { default as Comment } from './Comment';
export { default as CDATASection } from './CDATASection';
import { default as CDATASection } from './CDATASection';
export { default as ProcessingInstruction } from './ProcessingInstruction';
import { default as ProcessingInstruction } from './ProcessingInstruction';
export { default as Attr } from './Attr';
import { default as Attr } from './Attr';
export { default as EntityReference } from './EntityReference';
import { default as EntityReference } from './EntityReference';

export default class Document {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.XML.Document')) {
			this._object = object;
		} else {
			this._object = Titanium.XML.DOMImplementation.createDocument(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.XML.Document.apiName;
	}
	static get ATTRIBUTE_NODE () {
		return Titanium.XML.Document.ATTRIBUTE_NODE;
	}
	static get CDATA_SECTION_NODE () {
		return Titanium.XML.Document.CDATA_SECTION_NODE;
	}
	static get COMMENT_NODE () {
		return Titanium.XML.Document.COMMENT_NODE;
	}
	static get DOCUMENT_FRAGMENT_NODE () {
		return Titanium.XML.Document.DOCUMENT_FRAGMENT_NODE;
	}
	static get DOCUMENT_NODE () {
		return Titanium.XML.Document.DOCUMENT_NODE;
	}
	static get DOCUMENT_TYPE_NODE () {
		return Titanium.XML.Document.DOCUMENT_TYPE_NODE;
	}
	static get ELEMENT_NODE () {
		return Titanium.XML.Document.ELEMENT_NODE;
	}
	static get ENTITY_NODE () {
		return Titanium.XML.Document.ENTITY_NODE;
	}
	static get ENTITY_REFERENCE_NODE () {
		return Titanium.XML.Document.ENTITY_REFERENCE_NODE;
	}
	static get NOTATION_NODE () {
		return Titanium.XML.Document.NOTATION_NODE;
	}
	static get PROCESSING_INSTRUCTION_NODE () {
		return Titanium.XML.Document.PROCESSING_INSTRUCTION_NODE;
	}
	static get TEXT_NODE () {
		return Titanium.XML.Document.TEXT_NODE;
	}
	static get nodeName () {
		return Titanium.XML.Document.nodeName;
	}
	static get nodeType () {
		return Titanium.XML.Document.nodeType;
	}
	static get parentNode () {
		return new Node(Titanium.XML.Document.parentNode);
	}
	static get childNodes () {
		return new NodeList(Titanium.XML.Document.childNodes);
	}
	static get firstChild () {
		return new Node(Titanium.XML.Document.firstChild);
	}
	static get lastChild () {
		return new Node(Titanium.XML.Document.lastChild);
	}
	static get previousSibling () {
		return new Node(Titanium.XML.Document.previousSibling);
	}
	static get nextSibling () {
		return new Node(Titanium.XML.Document.nextSibling);
	}
	static get attributes () {
		return new NamedNodeMap(Titanium.XML.Document.attributes);
	}
	static get ownerDocument () {
		return new Document(Titanium.XML.Document.ownerDocument);
	}
	static get namespaceURI () {
		return Titanium.XML.Document.namespaceURI;
	}
	static get text () {
		return Titanium.XML.Document.text;
	}
	static get textContent () {
		return Titanium.XML.Document.textContent;
	}
	static get doctype () {
		return new DocumentType(Titanium.XML.Document.doctype);
	}
	static get implementation () {
		return new DOMImplementation(Titanium.XML.Document.implementation);
	}
	static get documentElement () {
		return new Element(Titanium.XML.Document.documentElement);
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
	get doctype () {
		return new DocumentType(this._object.doctype);
	}
	get implementation () {
		return new DOMImplementation(this._object.implementation);
	}
	get documentElement () {
		return new Element(this._object.documentElement);
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
	createElement (tagName) {
		return new Element(this._object.createElement(tagName));
	}
	createDocumentFragment () {
		return new DocumentFragment(this._object.createDocumentFragment());
	}
	createTextNode (data) {
		return new Text(this._object.createTextNode(data));
	}
	createComment (data) {
		return new Comment(this._object.createComment(data));
	}
	createCDATASection (data) {
		return new CDATASection(this._object.createCDATASection(data));
	}
	createProcessingInstruction (target, data) {
		return new ProcessingInstruction(this._object.createProcessingInstruction(target, data));
	}
	createAttribute (name) {
		return new Attr(this._object.createAttribute(name));
	}
	createEntityReference (name) {
		return new EntityReference(this._object.createEntityReference(name));
	}
	getElementsByTagName (tagname) {
		return new NodeList(this._object.getElementsByTagName(tagname));
	}
	importNode (importedNode, deep) {
		importedNode = normalize(importedNode);
		return new Node(this._object.importNode(importedNode, deep));
	}
	createElementNS (namespaceURI, name) {
		return new Element(this._object.createElementNS(namespaceURI, name));
	}
	createAttributeNS (namespaceURI, name) {
		return new Attr(this._object.createAttributeNS(namespaceURI, name));
	}
	getElementsByTagNameNS (namespaceURI, localname) {
		return new NodeList(this._object.getElementsByTagNameNS(namespaceURI, localname));
	}
	getElementById (elementId) {
		return new Element(this._object.getElementById(elementId));
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
	getDoctype () {
		return new DocumentType(this._object.getDoctype());
	}
	getImplementation () {
		return new DOMImplementation(this._object.getImplementation());
	}
	getDocumentElement () {
		return new Element(this._object.getDocumentElement());
	}

	// modules
	static get DocumentFragment () {
		return DocumentFragment;
	}
	static get Text () {
		return Text;
	}
	static get Comment () {
		return Comment;
	}
	static get CDATASection () {
		return CDATASection;
	}
	static get ProcessingInstruction () {
		return ProcessingInstruction;
	}
	static get Attr () {
		return Attr;
	}
	static get EntityReference () {
		return EntityReference;
	}
};
Object.freeze(Document);

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