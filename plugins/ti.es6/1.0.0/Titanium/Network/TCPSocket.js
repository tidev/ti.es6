export default class TCPSocket {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.TCPSocket')) {
			this._object = object;
		} else {
			this._object = Titanium.Network.createTCPSocket(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.TCPSocket.apiName;
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
	get hostName () {
		return this._object.hostName;
	}
	set hostName (value) {
		this._object.hostName = value;
	}
	get isValid () {
		return this._object.isValid;
	}
	set isValid (value) {
		this._object.isValid = value;
	}
	get mode () {
		return this._object.mode;
	}
	set mode (value) {
		this._object.mode = value;
	}
	get port () {
		return this._object.port;
	}
	set port (value) {
		this._object.port = value;
	}
	get stripTerminator () {
		return this._object.stripTerminator;
	}
	set stripTerminator (value) {
		this._object.stripTerminator = value;
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
	close () {
		return this._object.close();
	}
	connect () {
		return this._object.connect();
	}
	listen () {
		return this._object.listen();
	}
	write (data, sendTo) {
		data = normalize(data);
		return this._object.write(data, sendTo);
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
	getHostName () {
		return this._object.getHostName();
	}
	setHostName (hostName) {
		return this._object.setHostName(hostName);
	}
	getIsValid () {
		return this._object.getIsValid();
	}
	setIsValid (isValid) {
		return this._object.setIsValid(isValid);
	}
	getMode () {
		return this._object.getMode();
	}
	setMode (mode) {
		return this._object.setMode(mode);
	}
	getPort () {
		return this._object.getPort();
	}
	setPort (port) {
		return this._object.setPort(port);
	}
	getStripTerminator () {
		return this._object.getStripTerminator();
	}
	setStripTerminator (stripTerminator) {
		return this._object.setStripTerminator(stripTerminator);
	}
};
Object.freeze(TCPSocket);

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