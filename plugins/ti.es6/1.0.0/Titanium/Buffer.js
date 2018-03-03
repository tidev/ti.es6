import { default as Window } from './UI/Window';
import { default as Blob } from './Blob';

export default class Buffer {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Buffer')) {
			this._object = object;
		} else {
			this._object = Titanium.createBuffer(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Buffer.apiName;
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
	set length (value) {
		this._object.length = value;
	}
	get value () {
		return this._object.value;
	}
	set value (value) {
		this._object.value = value;
	}
	get type () {
		return this._object.type;
	}
	set type (value) {
		this._object.type = value;
	}
	get byteOrder () {
		return this._object.byteOrder;
	}
	set byteOrder (value) {
		this._object.byteOrder = value;
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
	append (sourceBuffer, sourceOffset, sourceLength) {
		sourceBuffer = normalize(sourceBuffer);
		return this._object.append(sourceBuffer, sourceOffset, sourceLength);
	}
	insert (sourceBuffer, offset, sourceOffset, sourceLength) {
		sourceBuffer = normalize(sourceBuffer);
		return this._object.insert(sourceBuffer, offset, sourceOffset, sourceLength);
	}
	copy (sourceBuffer, offset, sourceOffset, sourceLength) {
		sourceBuffer = normalize(sourceBuffer);
		return this._object.copy(sourceBuffer, offset, sourceOffset, sourceLength);
	}
	clone (offset, length) {
		return new Buffer(this._object.clone(offset, length));
	}
	fill (fillByte, offset, length) {
		return this._object.fill(fillByte, offset, length);
	}
	clear () {
		return this._object.clear();
	}
	release () {
		return this._object.release();
	}
	toString () {
		return this._object.toString();
	}
	toBlob () {
		return new Blob(this._object.toBlob());
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
	setLength (length) {
		return this._object.setLength(length);
	}
	getValue () {
		return this._object.getValue();
	}
	setValue (value) {
		return this._object.setValue(value);
	}
	getType () {
		return this._object.getType();
	}
	setType (type) {
		return this._object.setType(type);
	}
	getByteOrder () {
		return this._object.getByteOrder();
	}
	setByteOrder (byteOrder) {
		return this._object.setByteOrder(byteOrder);
	}

	// static methods
	static toString () {
		return this._object.toString();
	}

	// modules
};
Object.freeze(Buffer);

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