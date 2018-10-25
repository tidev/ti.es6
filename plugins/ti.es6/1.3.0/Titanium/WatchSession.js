export default class WatchSession {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.WatchSession')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.WatchSession.apiName;
	}
	static get activationState () {
		return Titanium.WatchSession.activationState;
	}
	static get ACTIVATION_STATE_NOT_ACTIVATED () {
		return Titanium.WatchSession.ACTIVATION_STATE_NOT_ACTIVATED;
	}
	static get ACTIVATION_STATE_INACTIVE () {
		return Titanium.WatchSession.ACTIVATION_STATE_INACTIVE;
	}
	static get ACTIVATION_STATE_ACTIVATED () {
		return Titanium.WatchSession.ACTIVATION_STATE_ACTIVATED;
	}
	static get hasContentPending () {
		return Titanium.WatchSession.hasContentPending;
	}
	static get remainingComplicationUserInfoTransfers () {
		return Titanium.WatchSession.remainingComplicationUserInfoTransfers;
	}
	static get isSupported () {
		return Titanium.WatchSession.isSupported;
	}
	static get isPaired () {
		return Titanium.WatchSession.isPaired;
	}
	static get isWatchAppInstalled () {
		return Titanium.WatchSession.isWatchAppInstalled;
	}
	static get isComplicationEnabled () {
		return Titanium.WatchSession.isComplicationEnabled;
	}
	static get isReachable () {
		return Titanium.WatchSession.isReachable;
	}
	static get isActivated () {
		return Titanium.WatchSession.isActivated;
	}
	static get recentApplicationContext () {
		return Titanium.WatchSession.recentApplicationContext;
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
	get activationState () {
		return this._object.activationState;
	}
	get ACTIVATION_STATE_NOT_ACTIVATED () {
		return this._object.ACTIVATION_STATE_NOT_ACTIVATED;
	}
	get ACTIVATION_STATE_INACTIVE () {
		return this._object.ACTIVATION_STATE_INACTIVE;
	}
	get ACTIVATION_STATE_ACTIVATED () {
		return this._object.ACTIVATION_STATE_ACTIVATED;
	}
	get hasContentPending () {
		return this._object.hasContentPending;
	}
	get remainingComplicationUserInfoTransfers () {
		return this._object.remainingComplicationUserInfoTransfers;
	}
	get isSupported () {
		return this._object.isSupported;
	}
	get isPaired () {
		return this._object.isPaired;
	}
	get isWatchAppInstalled () {
		return this._object.isWatchAppInstalled;
	}
	get isComplicationEnabled () {
		return this._object.isComplicationEnabled;
	}
	get isReachable () {
		return this._object.isReachable;
	}
	get isActivated () {
		return this._object.isActivated;
	}
	get recentApplicationContext () {
		return this._object.recentApplicationContext;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.WatchSession.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.WatchSession.bubbleParent = value;
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
	activateSession () {
		return this._object.activateSession();
	}
	sendMessage (message, reply) {
		message = normalize(message);
		return this._object.sendMessage(message, reply);
	}
	updateApplicationContext (params) {
		params = normalize(params);
		return this._object.updateApplicationContext(params);
	}
	transferUserInfo (params) {
		params = normalize(params);
		return this._object.transferUserInfo(params);
	}
	transferFile (params) {
		params = normalize(params);
		return this._object.transferFile(params);
	}
	transferCurrentComplication (params) {
		params = normalize(params);
		return this._object.transferCurrentComplication(params);
	}
	cancelAllUserInfoTransfers () {
		return this._object.cancelAllUserInfoTransfers();
	}
	cancelAllFileTransfers () {
		return this._object.cancelAllFileTransfers();
	}
	cancelAllTransfers () {
		return this._object.cancelAllTransfers();
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
	getActivationState () {
		return this._object.getActivationState();
	}
	getHasContentPending () {
		return this._object.getHasContentPending();
	}
	getRemainingComplicationUserInfoTransfers () {
		return this._object.getRemainingComplicationUserInfoTransfers();
	}
	getIsSupported () {
		return this._object.getIsSupported();
	}
	getIsPaired () {
		return this._object.getIsPaired();
	}
	getIsWatchAppInstalled () {
		return this._object.getIsWatchAppInstalled();
	}
	getIsComplicationEnabled () {
		return this._object.getIsComplicationEnabled();
	}
	getIsReachable () {
		return this._object.getIsReachable();
	}
	getIsActivated () {
		return this._object.getIsActivated();
	}
	getRecentApplicationContext () {
		return this._object.getRecentApplicationContext();
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
	static activateSession () {
		return this._object.activateSession();
	}
	static sendMessage (message, reply) {
		message = normalize(message);
		return this._object.sendMessage(message, reply);
	}
	static updateApplicationContext (params) {
		params = normalize(params);
		return this._object.updateApplicationContext(params);
	}
	static transferUserInfo (params) {
		params = normalize(params);
		return this._object.transferUserInfo(params);
	}
	static transferFile (params) {
		params = normalize(params);
		return this._object.transferFile(params);
	}
	static transferCurrentComplication (params) {
		params = normalize(params);
		return this._object.transferCurrentComplication(params);
	}
	static cancelAllUserInfoTransfers () {
		return this._object.cancelAllUserInfoTransfers();
	}
	static cancelAllFileTransfers () {
		return this._object.cancelAllFileTransfers();
	}
	static cancelAllTransfers () {
		return this._object.cancelAllTransfers();
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
	static getActivationState () {
		return this._object.getActivationState();
	}
	static getHasContentPending () {
		return this._object.getHasContentPending();
	}
	static getRemainingComplicationUserInfoTransfers () {
		return this._object.getRemainingComplicationUserInfoTransfers();
	}
	static getIsSupported () {
		return this._object.getIsSupported();
	}
	static getIsPaired () {
		return this._object.getIsPaired();
	}
	static getIsWatchAppInstalled () {
		return this._object.getIsWatchAppInstalled();
	}
	static getIsComplicationEnabled () {
		return this._object.getIsComplicationEnabled();
	}
	static getIsReachable () {
		return this._object.getIsReachable();
	}
	static getIsActivated () {
		return this._object.getIsActivated();
	}
	static getRecentApplicationContext () {
		return this._object.getRecentApplicationContext();
	}
};
Object.freeze(WatchSession);

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