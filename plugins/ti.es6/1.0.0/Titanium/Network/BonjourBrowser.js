export default class BonjourBrowser {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.BonjourBrowser')) {
			this._object = object;
		} else {
			this._object = Titanium.Network.createBonjourBrowser(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.BonjourBrowser.apiName;
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
	get isSearching () {
		return this._object.isSearching;
	}
	set isSearching (value) {
		this._object.isSearching = value;
	}
	get serviceType () {
		return this._object.serviceType;
	}
	set serviceType (value) {
		this._object.serviceType = value;
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
	search () {
		return this._object.search();
	}
	stopSearch () {
		return this._object.stopSearch();
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
	getIsSearching () {
		return this._object.getIsSearching();
	}
	setIsSearching (isSearching) {
		return this._object.setIsSearching(isSearching);
	}
	getServiceType () {
		return this._object.getServiceType();
	}
	setServiceType (serviceType) {
		return this._object.setServiceType(serviceType);
	}
};
Object.freeze(BonjourBrowser);

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