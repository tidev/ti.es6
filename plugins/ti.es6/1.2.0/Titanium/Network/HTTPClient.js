import { default as Window } from './../UI/Window';
import { default as Blob } from './../Blob';
import { default as Document } from './../XML/Document';

export default class HTTPClient {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network.HTTPClient')) {
			this._object = object;
		} else {
			this._object = Titanium.Network.createHTTPClient(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.HTTPClient.apiName;
	}
	static get responseHeaders () {
		return Titanium.Network.HTTPClient.responseHeaders;
	}
	static get DONE () {
		return Titanium.Network.HTTPClient.DONE;
	}
	static get HEADERS_RECEIVED () {
		return Titanium.Network.HTTPClient.HEADERS_RECEIVED;
	}
	static get LOADING () {
		return Titanium.Network.HTTPClient.LOADING;
	}
	static get OPENED () {
		return Titanium.Network.HTTPClient.OPENED;
	}
	static get UNSENT () {
		return Titanium.Network.HTTPClient.UNSENT;
	}
	static get allResponseHeaders () {
		return Titanium.Network.HTTPClient.allResponseHeaders;
	}
	static get connected () {
		return Titanium.Network.HTTPClient.connected;
	}
	static get connectionType () {
		return Titanium.Network.HTTPClient.connectionType;
	}
	static get location () {
		return Titanium.Network.HTTPClient.location;
	}
	static get readyState () {
		return Titanium.Network.HTTPClient.readyState;
	}
	static get responseData () {
		return new Blob(Titanium.Network.HTTPClient.responseData);
	}
	static get responseText () {
		return Titanium.Network.HTTPClient.responseText;
	}
	static get responseXML () {
		return new Document(Titanium.Network.HTTPClient.responseXML);
	}
	static get status () {
		return Titanium.Network.HTTPClient.status;
	}
	static get statusText () {
		return Titanium.Network.HTTPClient.statusText;
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
	get responseHeaders () {
		return this._object.responseHeaders;
	}
	get autoEncodeUrl () {
		return this._object.autoEncodeUrl;
	}
	set autoEncodeUrl (value) {
		this._object.autoEncodeUrl = value;
	}
	get autoRedirect () {
		return this._object.autoRedirect;
	}
	set autoRedirect (value) {
		this._object.autoRedirect = value;
	}
	get cache () {
		return this._object.cache;
	}
	set cache (value) {
		this._object.cache = value;
	}
	get domain () {
		return this._object.domain;
	}
	set domain (value) {
		this._object.domain = value;
	}
	get enableKeepAlive () {
		return this._object.enableKeepAlive;
	}
	set enableKeepAlive (value) {
		this._object.enableKeepAlive = value;
	}
	get file () {
		return this._object.file;
	}
	set file (value) {
		this._object.file = value;
	}
	get ondatastream () {
		return this._object.ondatastream;
	}
	set ondatastream (value) {
		this._object.ondatastream = value;
	}
	get onerror () {
		return this._object.onerror;
	}
	set onerror (value) {
		this._object.onerror = value;
	}
	get onload () {
		return this._object.onload;
	}
	set onload (value) {
		this._object.onload = value;
	}
	get onreadystatechange () {
		return this._object.onreadystatechange;
	}
	set onreadystatechange (value) {
		this._object.onreadystatechange = value;
	}
	get onsendstream () {
		return this._object.onsendstream;
	}
	set onsendstream (value) {
		this._object.onsendstream = value;
	}
	get password () {
		return this._object.password;
	}
	set password (value) {
		this._object.password = value;
	}
	get securityManager () {
		return this._object.securityManager;
	}
	set securityManager (value) {
		this._object.securityManager = value;
	}
	get timeout () {
		return this._object.timeout;
	}
	set timeout (value) {
		this._object.timeout = value;
	}
	get tlsVersion () {
		return this._object.tlsVersion;
	}
	set tlsVersion (value) {
		this._object.tlsVersion = value;
	}
	get username () {
		return this._object.username;
	}
	set username (value) {
		this._object.username = value;
	}
	get validatesSecureCertificate () {
		return this._object.validatesSecureCertificate;
	}
	set validatesSecureCertificate (value) {
		this._object.validatesSecureCertificate = value;
	}
	get DONE () {
		return this._object.DONE;
	}
	get HEADERS_RECEIVED () {
		return this._object.HEADERS_RECEIVED;
	}
	get LOADING () {
		return this._object.LOADING;
	}
	get OPENED () {
		return this._object.OPENED;
	}
	get UNSENT () {
		return this._object.UNSENT;
	}
	get allResponseHeaders () {
		return this._object.allResponseHeaders;
	}
	get connected () {
		return this._object.connected;
	}
	get connectionType () {
		return this._object.connectionType;
	}
	get location () {
		return this._object.location;
	}
	get readyState () {
		return this._object.readyState;
	}
	get responseData () {
		return new Blob(this._object.responseData);
	}
	get responseText () {
		return this._object.responseText;
	}
	get responseXML () {
		return new Document(this._object.responseXML);
	}
	get status () {
		return this._object.status;
	}
	get statusText () {
		return this._object.statusText;
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
	addAuthFactory (scheme, factory) {
		factory = normalize(factory);
		return this._object.addAuthFactory(scheme, factory);
	}
	addKeyManager (X509KeyManager) {
		X509KeyManager = normalize(X509KeyManager);
		return this._object.addKeyManager(X509KeyManager);
	}
	addTrustManager (X509TrustManager) {
		X509TrustManager = normalize(X509TrustManager);
		return this._object.addTrustManager(X509TrustManager);
	}
	abort () {
		return this._object.abort();
	}
	clearCookies (host) {
		return this._object.clearCookies(host);
	}
	getResponseHeader (name) {
		return this._object.getResponseHeader(name);
	}
	open (method, url, async) {
		return this._object.open(method, url, async);
	}
	send (data) {
		data = normalize(data);
		return this._object.send(data);
	}
	setRequestHeader (name, value) {
		return this._object.setRequestHeader(name, value);
	}
	setTimeout (timeout) {
		return this._object.setTimeout(timeout);
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
	getResponseHeaders () {
		return this._object.getResponseHeaders();
	}
	getAutoEncodeUrl () {
		return this._object.getAutoEncodeUrl();
	}
	setAutoEncodeUrl (autoEncodeUrl) {
		return this._object.setAutoEncodeUrl(autoEncodeUrl);
	}
	getAutoRedirect () {
		return this._object.getAutoRedirect();
	}
	setAutoRedirect (autoRedirect) {
		return this._object.setAutoRedirect(autoRedirect);
	}
	getCache () {
		return this._object.getCache();
	}
	setCache (cache) {
		return this._object.setCache(cache);
	}
	getDomain () {
		return this._object.getDomain();
	}
	setDomain (domain) {
		return this._object.setDomain(domain);
	}
	getEnableKeepAlive () {
		return this._object.getEnableKeepAlive();
	}
	setEnableKeepAlive (enableKeepAlive) {
		return this._object.setEnableKeepAlive(enableKeepAlive);
	}
	getFile () {
		return this._object.getFile();
	}
	setFile (file) {
		return this._object.setFile(file);
	}
	getOndatastream () {
		return this._object.getOndatastream();
	}
	setOndatastream (ondatastream) {
		return this._object.setOndatastream(ondatastream);
	}
	getOnerror () {
		return this._object.getOnerror();
	}
	setOnerror (onerror) {
		return this._object.setOnerror(onerror);
	}
	getOnload () {
		return this._object.getOnload();
	}
	setOnload (onload) {
		return this._object.setOnload(onload);
	}
	getOnreadystatechange () {
		return this._object.getOnreadystatechange();
	}
	setOnreadystatechange (onreadystatechange) {
		return this._object.setOnreadystatechange(onreadystatechange);
	}
	getOnsendstream () {
		return this._object.getOnsendstream();
	}
	setOnsendstream (onsendstream) {
		return this._object.setOnsendstream(onsendstream);
	}
	getPassword () {
		return this._object.getPassword();
	}
	setPassword (password) {
		return this._object.setPassword(password);
	}
	getSecurityManager () {
		return this._object.getSecurityManager();
	}
	setSecurityManager (securityManager) {
		return this._object.setSecurityManager(securityManager);
	}
	getTimeout () {
		return this._object.getTimeout();
	}
	setTimeout (timeout) {
		return this._object.setTimeout(timeout);
	}
	getTlsVersion () {
		return this._object.getTlsVersion();
	}
	setTlsVersion (tlsVersion) {
		return this._object.setTlsVersion(tlsVersion);
	}
	getUsername () {
		return this._object.getUsername();
	}
	setUsername (username) {
		return this._object.setUsername(username);
	}
	getValidatesSecureCertificate () {
		return this._object.getValidatesSecureCertificate();
	}
	setValidatesSecureCertificate (validatesSecureCertificate) {
		return this._object.setValidatesSecureCertificate(validatesSecureCertificate);
	}
	getAllResponseHeaders () {
		return this._object.getAllResponseHeaders();
	}
	getConnected () {
		return this._object.getConnected();
	}
	getConnectionType () {
		return this._object.getConnectionType();
	}
	getLocation () {
		return this._object.getLocation();
	}
	getReadyState () {
		return this._object.getReadyState();
	}
	getResponseData () {
		return new Blob(this._object.getResponseData());
	}
	getResponseText () {
		return this._object.getResponseText();
	}
	getResponseXML () {
		return new Document(this._object.getResponseXML());
	}
	getStatus () {
		return this._object.getStatus();
	}
	getStatusText () {
		return this._object.getStatusText();
	}

	// modules
};
Object.freeze(HTTPClient);

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