import { default as Window } from './UI/Window';

export default class App {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.apiName;
	}
	static get accessibilityEnabled () {
		return Titanium.App.accessibilityEnabled;
	}
	static get EVENT_ACCESSIBILITY_ANNOUNCEMENT () {
		return Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT;
	}
	static get EVENT_ACCESSIBILITY_CHANGED () {
		return Titanium.App.EVENT_ACCESSIBILITY_CHANGED;
	}
	static get analytics () {
		return Titanium.App.analytics;
	}
	static get copyright () {
		return Titanium.App.copyright;
	}
	static get deployType () {
		return Titanium.App.deployType;
	}
	static get description () {
		return Titanium.App.description;
	}
	static get guid () {
		return Titanium.App.guid;
	}
	static get id () {
		return Titanium.App.id;
	}
	static get installId () {
		return Titanium.App.installId;
	}
	static get keyboardVisible () {
		return Titanium.App.keyboardVisible;
	}
	static get name () {
		return Titanium.App.name;
	}
	static get proximityState () {
		return Titanium.App.proximityState;
	}
	static get publisher () {
		return Titanium.App.publisher;
	}
	static get sessionId () {
		return Titanium.App.sessionId;
	}
	static get url () {
		return Titanium.App.url;
	}
	static get version () {
		return Titanium.App.version;
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
	get accessibilityEnabled () {
		return this._object.accessibilityEnabled;
	}
	get forceSplashAsSnapshot () {
		return this._object.forceSplashAsSnapshot;
	}
	set forceSplashAsSnapshot (value) {
		this._object.forceSplashAsSnapshot = value;
	}
	get idleTimerDisabled () {
		return this._object.idleTimerDisabled;
	}
	set idleTimerDisabled (value) {
		this._object.idleTimerDisabled = value;
	}
	get disableNetworkActivityIndicator () {
		return this._object.disableNetworkActivityIndicator;
	}
	set disableNetworkActivityIndicator (value) {
		this._object.disableNetworkActivityIndicator = value;
	}
	get EVENT_ACCESSIBILITY_ANNOUNCEMENT () {
		return this._object.EVENT_ACCESSIBILITY_ANNOUNCEMENT;
	}
	get EVENT_ACCESSIBILITY_CHANGED () {
		return this._object.EVENT_ACCESSIBILITY_CHANGED;
	}
	get analytics () {
		return this._object.analytics;
	}
	get copyright () {
		return this._object.copyright;
	}
	get deployType () {
		return this._object.deployType;
	}
	get description () {
		return this._object.description;
	}
	get guid () {
		return this._object.guid;
	}
	get id () {
		return this._object.id;
	}
	get installId () {
		return this._object.installId;
	}
	get keyboardVisible () {
		return this._object.keyboardVisible;
	}
	get name () {
		return this._object.name;
	}
	get proximityDetection () {
		return this._object.proximityDetection;
	}
	set proximityDetection (value) {
		this._object.proximityDetection = value;
	}
	get proximityState () {
		return this._object.proximityState;
	}
	get publisher () {
		return this._object.publisher;
	}
	get sessionId () {
		return this._object.sessionId;
	}
	get url () {
		return this._object.url;
	}
	get version () {
		return this._object.version;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.App.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.App.bubbleParent = value;
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
	fireSystemEvent (eventName, param) {
		param = normalize(param);
		return this._object.fireSystemEvent(eventName, param);
	}
	getArguments () {
		return this._object.getArguments();
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
	getAccessibilityEnabled () {
		return this._object.getAccessibilityEnabled();
	}
	getForceSplashAsSnapshot () {
		return this._object.getForceSplashAsSnapshot();
	}
	setForceSplashAsSnapshot (forceSplashAsSnapshot) {
		return this._object.setForceSplashAsSnapshot(forceSplashAsSnapshot);
	}
	getIdleTimerDisabled () {
		return this._object.getIdleTimerDisabled();
	}
	setIdleTimerDisabled (idleTimerDisabled) {
		return this._object.setIdleTimerDisabled(idleTimerDisabled);
	}
	getDisableNetworkActivityIndicator () {
		return this._object.getDisableNetworkActivityIndicator();
	}
	setDisableNetworkActivityIndicator (disableNetworkActivityIndicator) {
		return this._object.setDisableNetworkActivityIndicator(disableNetworkActivityIndicator);
	}
	getAnalytics () {
		return this._object.getAnalytics();
	}
	getCopyright () {
		return this._object.getCopyright();
	}
	getDeployType () {
		return this._object.getDeployType();
	}
	getDescription () {
		return this._object.getDescription();
	}
	getGuid () {
		return this._object.getGuid();
	}
	getId () {
		return this._object.getId();
	}
	getInstallId () {
		return this._object.getInstallId();
	}
	getKeyboardVisible () {
		return this._object.getKeyboardVisible();
	}
	getName () {
		return this._object.getName();
	}
	getProximityDetection () {
		return this._object.getProximityDetection();
	}
	setProximityDetection (proximityDetection) {
		return this._object.setProximityDetection(proximityDetection);
	}
	getProximityState () {
		return this._object.getProximityState();
	}
	getPublisher () {
		return this._object.getPublisher();
	}
	getSessionId () {
		return this._object.getSessionId();
	}
	getUrl () {
		return this._object.getUrl();
	}
	getVersion () {
		return this._object.getVersion();
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
	static fireSystemEvent (eventName, param) {
		param = normalize(param);
		return this._object.fireSystemEvent(eventName, param);
	}
	static getArguments () {
		return this._object.getArguments();
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
	static getAccessibilityEnabled () {
		return this._object.getAccessibilityEnabled();
	}
	static getForceSplashAsSnapshot () {
		return this._object.getForceSplashAsSnapshot();
	}
	static setForceSplashAsSnapshot (forceSplashAsSnapshot) {
		return this._object.setForceSplashAsSnapshot(forceSplashAsSnapshot);
	}
	static getIdleTimerDisabled () {
		return this._object.getIdleTimerDisabled();
	}
	static setIdleTimerDisabled (idleTimerDisabled) {
		return this._object.setIdleTimerDisabled(idleTimerDisabled);
	}
	static getDisableNetworkActivityIndicator () {
		return this._object.getDisableNetworkActivityIndicator();
	}
	static setDisableNetworkActivityIndicator (disableNetworkActivityIndicator) {
		return this._object.setDisableNetworkActivityIndicator(disableNetworkActivityIndicator);
	}
	static getAnalytics () {
		return this._object.getAnalytics();
	}
	static getCopyright () {
		return this._object.getCopyright();
	}
	static getDeployType () {
		return this._object.getDeployType();
	}
	static getDescription () {
		return this._object.getDescription();
	}
	static getGuid () {
		return this._object.getGuid();
	}
	static getId () {
		return this._object.getId();
	}
	static getInstallId () {
		return this._object.getInstallId();
	}
	static getKeyboardVisible () {
		return this._object.getKeyboardVisible();
	}
	static getName () {
		return this._object.getName();
	}
	static getProximityDetection () {
		return this._object.getProximityDetection();
	}
	static setProximityDetection (proximityDetection) {
		return this._object.setProximityDetection(proximityDetection);
	}
	static getProximityState () {
		return this._object.getProximityState();
	}
	static getPublisher () {
		return this._object.getPublisher();
	}
	static getSessionId () {
		return this._object.getSessionId();
	}
	static getUrl () {
		return this._object.getUrl();
	}
	static getVersion () {
		return this._object.getVersion();
	}

	// modules
};
Object.freeze(App);

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