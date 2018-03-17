import { default as Window } from './UI/Window';
export { default as IOStream } from './IOStream';
import { default as IOStream } from './IOStream';
import { default as Buffer } from './Buffer';

export default class Stream {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Stream')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Stream.apiName;
	}
	static get MODE_APPEND () {
		return Titanium.Stream.MODE_APPEND;
	}
	static get MODE_READ () {
		return Titanium.Stream.MODE_READ;
	}
	static get MODE_WRITE () {
		return Titanium.Stream.MODE_WRITE;
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
	get MODE_APPEND () {
		return this._object.MODE_APPEND;
	}
	get MODE_READ () {
		return this._object.MODE_READ;
	}
	get MODE_WRITE () {
		return this._object.MODE_WRITE;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Stream.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Stream.bubbleParent = value;
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
	read (sourceStream, buffer, offset, length, resultsCallback) {
		sourceStream = normalize(sourceStream);
		buffer = normalize(buffer);
		return this._object.read(sourceStream, buffer, offset, length, resultsCallback);
	}
	readAll (sourceStream, buffer, resultsCallback) {
		sourceStream = normalize(sourceStream);
		buffer = normalize(buffer);
		return new Buffer(this._object.readAll(sourceStream, buffer, resultsCallback));
	}
	write (outputStream, buffer, offset, length, resultsCallback) {
		outputStream = normalize(outputStream);
		buffer = normalize(buffer);
		return this._object.write(outputStream, buffer, offset, length, resultsCallback);
	}
	writeStream (inputStream, outputStream, maxChunkSize, resultsCallback) {
		inputStream = normalize(inputStream);
		outputStream = normalize(outputStream);
		return this._object.writeStream(inputStream, outputStream, maxChunkSize, resultsCallback);
	}
	pump (inputStream, handler, maxChunkSize, isAsync) {
		inputStream = normalize(inputStream);
		return this._object.pump(inputStream, handler, maxChunkSize, isAsync);
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
	static read (sourceStream, buffer, offset, length, resultsCallback) {
		sourceStream = normalize(sourceStream);
		buffer = normalize(buffer);
		return this._object.read(sourceStream, buffer, offset, length, resultsCallback);
	}
	static readAll (sourceStream, buffer, resultsCallback) {
		sourceStream = normalize(sourceStream);
		buffer = normalize(buffer);
		return new Buffer(this._object.readAll(sourceStream, buffer, resultsCallback));
	}
	static write (outputStream, buffer, offset, length, resultsCallback) {
		outputStream = normalize(outputStream);
		buffer = normalize(buffer);
		return this._object.write(outputStream, buffer, offset, length, resultsCallback);
	}
	static writeStream (inputStream, outputStream, maxChunkSize, resultsCallback) {
		inputStream = normalize(inputStream);
		outputStream = normalize(outputStream);
		return this._object.writeStream(inputStream, outputStream, maxChunkSize, resultsCallback);
	}
	static pump (inputStream, handler, maxChunkSize, isAsync) {
		inputStream = normalize(inputStream);
		return this._object.pump(inputStream, handler, maxChunkSize, isAsync);
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
	static get IOStream () {
		return IOStream;
	}
};
Object.freeze(Stream);

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