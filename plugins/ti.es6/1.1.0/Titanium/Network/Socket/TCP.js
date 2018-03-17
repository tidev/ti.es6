import { default as Window } from './../../UI/Window';

export default class TCP {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.Socket.TCP')) {
			this._object = object;
		} else {
			this._object = Titanium.Network.Socket.createTCP(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.Socket.TCP.apiName;
	}
	static get state () {
		return Titanium.Network.Socket.TCP.state;
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
	get host () {
		return this._object.host;
	}
	set host (value) {
		this._object.host = value;
	}
	get port () {
		return this._object.port;
	}
	set port (value) {
		this._object.port = value;
	}
	get listenQueueSize () {
		return this._object.listenQueueSize;
	}
	set listenQueueSize (value) {
		this._object.listenQueueSize = value;
	}
	get timeout () {
		return this._object.timeout;
	}
	set timeout (value) {
		this._object.timeout = value;
	}
	get connected () {
		return this._object.connected;
	}
	set connected (value) {
		this._object.connected = value;
	}
	get error () {
		return this._object.error;
	}
	set error (value) {
		this._object.error = value;
	}
	get accepted () {
		return this._object.accepted;
	}
	set accepted (value) {
		this._object.accepted = value;
	}
	get state () {
		return this._object.state;
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
	read (buffer, offset, length) {
		buffer = normalize(buffer);
		return this._object.read(buffer, offset, length);
	}
	write (buffer, offset, length) {
		buffer = normalize(buffer);
		return this._object.write(buffer, offset, length);
	}
	isWritable () {
		return this._object.isWritable();
	}
	isReadable () {
		return this._object.isReadable();
	}
	close () {
		return this._object.close();
	}
	connect () {
		return this._object.connect();
	}
	listen () {
		return this._object.listen();
	}
	accept (options) {
		return this._object.accept(options);
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
	getHost () {
		return this._object.getHost();
	}
	setHost (host) {
		return this._object.setHost(host);
	}
	getPort () {
		return this._object.getPort();
	}
	setPort (port) {
		return this._object.setPort(port);
	}
	getListenQueueSize () {
		return this._object.getListenQueueSize();
	}
	setListenQueueSize (listenQueueSize) {
		return this._object.setListenQueueSize(listenQueueSize);
	}
	getTimeout () {
		return this._object.getTimeout();
	}
	setTimeout (timeout) {
		return this._object.setTimeout(timeout);
	}
	getConnected () {
		return this._object.getConnected();
	}
	setConnected (connected) {
		return this._object.setConnected(connected);
	}
	getError () {
		return this._object.getError();
	}
	setError (error) {
		return this._object.setError(error);
	}
	getAccepted () {
		return this._object.getAccepted();
	}
	setAccepted (accepted) {
		return this._object.setAccepted(accepted);
	}
	getState () {
		return this._object.getState();
	}

	// modules
};
Object.freeze(TCP);

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