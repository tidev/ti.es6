export default class BonjourService {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.BonjourService')) {
			this._object = object;
		} else {
			this._object = Titanium.Network.createBonjourService(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.BonjourService.apiName;
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
	get domain () {
		return this._object.domain;
	}
	set domain (value) {
		this._object.domain = value;
	}
	get isLocal () {
		return this._object.isLocal;
	}
	set isLocal (value) {
		this._object.isLocal = value;
	}
	get name () {
		return this._object.name;
	}
	set name (value) {
		this._object.name = value;
	}
	get socket () {
		return this._object.socket;
	}
	set socket (value) {
		this._object.socket = value;
	}
	get type () {
		return this._object.type;
	}
	set type (value) {
		this._object.type = value;
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
	publish (socket) {
		socket = normalize(socket);
		return this._object.publish(socket);
	}
	resolve (timeout) {
		return this._object.resolve(timeout);
	}
	stop () {
		return this._object.stop();
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
	getDomain () {
		return this._object.getDomain();
	}
	setDomain (domain) {
		return this._object.setDomain(domain);
	}
	getIsLocal () {
		return this._object.getIsLocal();
	}
	setIsLocal (isLocal) {
		return this._object.setIsLocal(isLocal);
	}
	getName () {
		return this._object.getName();
	}
	setName (name) {
		return this._object.setName(name);
	}
	getSocket () {
		return this._object.getSocket();
	}
	setSocket (socket) {
		socket = normalize(socket);
		return this._object.setSocket(socket);
	}
	getType () {
		return this._object.getType();
	}
	setType (type) {
		return this._object.setType(type);
	}
};
Object.freeze(BonjourService);

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