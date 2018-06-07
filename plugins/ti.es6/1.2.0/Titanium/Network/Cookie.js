import { default as Window } from './../UI/Window';

export default class Cookie {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.Cookie')) {
			this._object = object;
		} else {
			this._object = Titanium.Network.createCookie(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.Cookie.apiName;
	}
	static get name () {
		return Titanium.Network.Cookie.name;
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
	get comment () {
		return this._object.comment;
	}
	set comment (value) {
		this._object.comment = value;
	}
	get domain () {
		return this._object.domain;
	}
	set domain (value) {
		this._object.domain = value;
	}
	get expiryDate () {
		return this._object.expiryDate;
	}
	set expiryDate (value) {
		this._object.expiryDate = value;
	}
	get maxAge () {
		return this._object.maxAge;
	}
	set maxAge (value) {
		this._object.maxAge = value;
	}
	get httponly () {
		return this._object.httponly;
	}
	set httponly (value) {
		this._object.httponly = value;
	}
	get name () {
		return this._object.name;
	}
	get originalUrl () {
		return this._object.originalUrl;
	}
	set originalUrl (value) {
		this._object.originalUrl = value;
	}
	get path () {
		return this._object.path;
	}
	set path (value) {
		this._object.path = value;
	}
	get secure () {
		return this._object.secure;
	}
	set secure (value) {
		this._object.secure = value;
	}
	get value () {
		return this._object.value;
	}
	set value (value) {
		this._object.value = value;
	}
	get version () {
		return this._object.version;
	}
	set version (value) {
		this._object.version = value;
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
	isValid () {
		return this._object.isValid();
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
	getComment () {
		return this._object.getComment();
	}
	setComment (comment) {
		return this._object.setComment(comment);
	}
	getDomain () {
		return this._object.getDomain();
	}
	setDomain (domain) {
		return this._object.setDomain(domain);
	}
	getExpiryDate () {
		return this._object.getExpiryDate();
	}
	setExpiryDate (expiryDate) {
		return this._object.setExpiryDate(expiryDate);
	}
	getMaxAge () {
		return this._object.getMaxAge();
	}
	setMaxAge (maxAge) {
		return this._object.setMaxAge(maxAge);
	}
	getHttponly () {
		return this._object.getHttponly();
	}
	setHttponly (httponly) {
		return this._object.setHttponly(httponly);
	}
	getName () {
		return this._object.getName();
	}
	getOriginalUrl () {
		return this._object.getOriginalUrl();
	}
	setOriginalUrl (originalUrl) {
		return this._object.setOriginalUrl(originalUrl);
	}
	getPath () {
		return this._object.getPath();
	}
	setPath (path) {
		return this._object.setPath(path);
	}
	getSecure () {
		return this._object.getSecure();
	}
	setSecure (secure) {
		return this._object.setSecure(secure);
	}
	getValue () {
		return this._object.getValue();
	}
	setValue (value) {
		return this._object.setValue(value);
	}
	getVersion () {
		return this._object.getVersion();
	}
	setVersion (version) {
		return this._object.setVersion(version);
	}

	// modules
};
Object.freeze(Cookie);

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