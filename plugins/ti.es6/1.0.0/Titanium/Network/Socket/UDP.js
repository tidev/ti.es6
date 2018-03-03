export default class UDP {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.Socket.UDP')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// properties
	get port () {
		return this._object.port;
	}
	set port (value) {
		this._object.port = value;
	}
	get started () {
		return this._object.started;
	}
	set started (value) {
		this._object.started = value;
	}
	get data () {
		return this._object.data;
	}
	set data (value) {
		this._object.data = value;
	}
	get error () {
		return this._object.error;
	}
	set error (value) {
		this._object.error = value;
	}

	// methods
	start () {
		return this._object.start();
	}
	stop () {
		return this._object.stop();
	}
	sendString () {
		return this._object.sendString();
	}
	sendBytes () {
		return this._object.sendBytes();
	}
	getPort () {
		return this._object.getPort();
	}
	setPort () {
		return this._object.setPort();
	}
	getStarted () {
		return this._object.getStarted();
	}
	setStarted () {
		return this._object.setStarted();
	}
	getData () {
		return this._object.getData();
	}
	setData () {
		return this._object.setData();
	}
	getError () {
		return this._object.getError();
	}
	setError () {
		return this._object.setError();
	}
};
Object.freeze(UDP);

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