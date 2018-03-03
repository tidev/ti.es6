import { default as Window } from './UI/Window';
export { default as BonjourBrowser } from './Network/BonjourBrowser';
import { default as BonjourBrowser } from './Network/BonjourBrowser';
export { default as BonjourService } from './Network/BonjourService';
import { default as BonjourService } from './Network/BonjourService';
export { default as TCPSocket } from './Network/TCPSocket';
import { default as TCPSocket } from './Network/TCPSocket';
export { default as Cookie } from './Network/Cookie';
import { default as Cookie } from './Network/Cookie';
export { default as HTTPClient } from './Network/HTTPClient';
import { default as HTTPClient } from './Network/HTTPClient';

export default class Network {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Network')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Network.apiName;
	}
	static get INADDR_ANY () {
		return Titanium.Network.INADDR_ANY;
	}
	static get READ_MODE () {
		return Titanium.Network.READ_MODE;
	}
	static get READ_WRITE_MODE () {
		return Titanium.Network.READ_WRITE_MODE;
	}
	static get SOCKET_CLOSED () {
		return Titanium.Network.SOCKET_CLOSED;
	}
	static get SOCKET_CONNECTED () {
		return Titanium.Network.SOCKET_CONNECTED;
	}
	static get SOCKET_ERROR () {
		return Titanium.Network.SOCKET_ERROR;
	}
	static get SOCKET_INITIALIZED () {
		return Titanium.Network.SOCKET_INITIALIZED;
	}
	static get SOCKET_LISTENING () {
		return Titanium.Network.SOCKET_LISTENING;
	}
	static get WRITE_MODE () {
		return Titanium.Network.WRITE_MODE;
	}
	static get allHTTPCookies () {
		return Titanium.Network.allHTTPCookies;
	}
	static get remoteDeviceUUID () {
		return Titanium.Network.remoteDeviceUUID;
	}
	static get remoteNotificationTypes () {
		return Titanium.Network.remoteNotificationTypes;
	}
	static get remoteNotificationsEnabled () {
		return Titanium.Network.remoteNotificationsEnabled;
	}
	static get NETWORK_LAN () {
		return Titanium.Network.NETWORK_LAN;
	}
	static get NETWORK_MOBILE () {
		return Titanium.Network.NETWORK_MOBILE;
	}
	static get NETWORK_NONE () {
		return Titanium.Network.NETWORK_NONE;
	}
	static get NETWORK_UNKNOWN () {
		return Titanium.Network.NETWORK_UNKNOWN;
	}
	static get NETWORK_WIFI () {
		return Titanium.Network.NETWORK_WIFI;
	}
	static get NOTIFICATION_TYPE_ALERT () {
		return Titanium.Network.NOTIFICATION_TYPE_ALERT;
	}
	static get NOTIFICATION_TYPE_BADGE () {
		return Titanium.Network.NOTIFICATION_TYPE_BADGE;
	}
	static get NOTIFICATION_TYPE_SOUND () {
		return Titanium.Network.NOTIFICATION_TYPE_SOUND;
	}
	static get NOTIFICATION_TYPE_NEWSSTAND () {
		return Titanium.Network.NOTIFICATION_TYPE_NEWSSTAND;
	}
	static get TLS_VERSION_1_0 () {
		return Titanium.Network.TLS_VERSION_1_0;
	}
	static get TLS_VERSION_1_1 () {
		return Titanium.Network.TLS_VERSION_1_1;
	}
	static get TLS_VERSION_1_2 () {
		return Titanium.Network.TLS_VERSION_1_2;
	}
	static get PROGRESS_UNKNOWN () {
		return Titanium.Network.PROGRESS_UNKNOWN;
	}
	static get networkType () {
		return Titanium.Network.networkType;
	}
	static get networkTypeName () {
		return Titanium.Network.networkTypeName;
	}
	static get online () {
		return Titanium.Network.online;
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
	get INADDR_ANY () {
		return this._object.INADDR_ANY;
	}
	get READ_MODE () {
		return this._object.READ_MODE;
	}
	get READ_WRITE_MODE () {
		return this._object.READ_WRITE_MODE;
	}
	get SOCKET_CLOSED () {
		return this._object.SOCKET_CLOSED;
	}
	get SOCKET_CONNECTED () {
		return this._object.SOCKET_CONNECTED;
	}
	get SOCKET_ERROR () {
		return this._object.SOCKET_ERROR;
	}
	get SOCKET_INITIALIZED () {
		return this._object.SOCKET_INITIALIZED;
	}
	get SOCKET_LISTENING () {
		return this._object.SOCKET_LISTENING;
	}
	get WRITE_MODE () {
		return this._object.WRITE_MODE;
	}
	get allHTTPCookies () {
		return this._object.allHTTPCookies;
	}
	get remoteDeviceUUID () {
		return this._object.remoteDeviceUUID;
	}
	get remoteNotificationTypes () {
		return this._object.remoteNotificationTypes;
	}
	get remoteNotificationsEnabled () {
		return this._object.remoteNotificationsEnabled;
	}
	get NETWORK_LAN () {
		return this._object.NETWORK_LAN;
	}
	get NETWORK_MOBILE () {
		return this._object.NETWORK_MOBILE;
	}
	get NETWORK_NONE () {
		return this._object.NETWORK_NONE;
	}
	get NETWORK_UNKNOWN () {
		return this._object.NETWORK_UNKNOWN;
	}
	get NETWORK_WIFI () {
		return this._object.NETWORK_WIFI;
	}
	get NOTIFICATION_TYPE_ALERT () {
		return this._object.NOTIFICATION_TYPE_ALERT;
	}
	get NOTIFICATION_TYPE_BADGE () {
		return this._object.NOTIFICATION_TYPE_BADGE;
	}
	get NOTIFICATION_TYPE_SOUND () {
		return this._object.NOTIFICATION_TYPE_SOUND;
	}
	get NOTIFICATION_TYPE_NEWSSTAND () {
		return this._object.NOTIFICATION_TYPE_NEWSSTAND;
	}
	get TLS_VERSION_1_0 () {
		return this._object.TLS_VERSION_1_0;
	}
	get TLS_VERSION_1_1 () {
		return this._object.TLS_VERSION_1_1;
	}
	get TLS_VERSION_1_2 () {
		return this._object.TLS_VERSION_1_2;
	}
	get PROGRESS_UNKNOWN () {
		return this._object.PROGRESS_UNKNOWN;
	}
	get networkType () {
		return this._object.networkType;
	}
	get networkTypeName () {
		return this._object.networkTypeName;
	}
	get online () {
		return this._object.online;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Network.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Network.bubbleParent = value;
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
	addConnectivityListener (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addConnectivityListener(resolve));
		}
		return this._object.addConnectivityListener(callback);
	}
	addHTTPCookie (cookie) {
		cookie = normalize(cookie);
		return this._object.addHTTPCookie(cookie);
	}
	addSystemCookie (cookie) {
		cookie = normalize(cookie);
		return this._object.addSystemCookie(cookie);
	}
	decodeURIComponent (value) {
		return this._object.decodeURIComponent(value);
	}
	encodeURIComponent (value) {
		return this._object.encodeURIComponent(value);
	}
	getHTTPCookies (domain, path, name) {
		return this._object.getHTTPCookies(domain, path, name);
	}
	getHTTPCookiesForDomain (domain) {
		return this._object.getHTTPCookiesForDomain(domain);
	}
	getSystemCookies (domain, path, name) {
		return this._object.getSystemCookies(domain, path, name);
	}
	removeAllHTTPCookies () {
		return this._object.removeAllHTTPCookies();
	}
	removeAllSystemCookies () {
		return this._object.removeAllSystemCookies();
	}
	removeHTTPCookie (domain, path, name) {
		return this._object.removeHTTPCookie(domain, path, name);
	}
	removeHTTPCookiesForDomain (domain) {
		return this._object.removeHTTPCookiesForDomain(domain);
	}
	removeSystemCookie (domain, path, name) {
		return this._object.removeSystemCookie(domain, path, name);
	}
	registerForPushNotifications (config) {
		return this._object.registerForPushNotifications(config);
	}
	removeConnectivityListener (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeConnectivityListener(resolve));
		}
		return this._object.removeConnectivityListener(callback);
	}
	unregisterForPushNotifications () {
		return this._object.unregisterForPushNotifications();
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
	getAllHTTPCookies () {
		return this._object.getAllHTTPCookies();
	}
	getRemoteDeviceUUID () {
		return this._object.getRemoteDeviceUUID();
	}
	getRemoteNotificationTypes () {
		return this._object.getRemoteNotificationTypes();
	}
	getRemoteNotificationsEnabled () {
		return this._object.getRemoteNotificationsEnabled();
	}
	getNetworkType () {
		return this._object.getNetworkType();
	}
	getNetworkTypeName () {
		return this._object.getNetworkTypeName();
	}
	getOnline () {
		return this._object.getOnline();
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
	static addHTTPCookie (cookie) {
		cookie = normalize(cookie);
		return this._object.addHTTPCookie(cookie);
	}
	static addSystemCookie (cookie) {
		cookie = normalize(cookie);
		return this._object.addSystemCookie(cookie);
	}
	static decodeURIComponent (value) {
		return this._object.decodeURIComponent(value);
	}
	static encodeURIComponent (value) {
		return this._object.encodeURIComponent(value);
	}
	static getHTTPCookies (domain, path, name) {
		return this._object.getHTTPCookies(domain, path, name);
	}
	static getHTTPCookiesForDomain (domain) {
		return this._object.getHTTPCookiesForDomain(domain);
	}
	static getSystemCookies (domain, path, name) {
		return this._object.getSystemCookies(domain, path, name);
	}
	static removeAllHTTPCookies () {
		return this._object.removeAllHTTPCookies();
	}
	static removeAllSystemCookies () {
		return this._object.removeAllSystemCookies();
	}
	static removeHTTPCookie (domain, path, name) {
		return this._object.removeHTTPCookie(domain, path, name);
	}
	static removeHTTPCookiesForDomain (domain) {
		return this._object.removeHTTPCookiesForDomain(domain);
	}
	static removeSystemCookie (domain, path, name) {
		return this._object.removeSystemCookie(domain, path, name);
	}
	static registerForPushNotifications (config) {
		return this._object.registerForPushNotifications(config);
	}
	static unregisterForPushNotifications () {
		return this._object.unregisterForPushNotifications();
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
	static getAllHTTPCookies () {
		return this._object.getAllHTTPCookies();
	}
	static getRemoteDeviceUUID () {
		return this._object.getRemoteDeviceUUID();
	}
	static getRemoteNotificationTypes () {
		return this._object.getRemoteNotificationTypes();
	}
	static getRemoteNotificationsEnabled () {
		return this._object.getRemoteNotificationsEnabled();
	}
	static getNetworkType () {
		return this._object.getNetworkType();
	}
	static getNetworkTypeName () {
		return this._object.getNetworkTypeName();
	}
	static getOnline () {
		return this._object.getOnline();
	}

	// modules
	static get BonjourBrowser () {
		return BonjourBrowser;
	}
	static get BonjourService () {
		return BonjourService;
	}
	static get TCPSocket () {
		return TCPSocket;
	}
	static get Cookie () {
		return Cookie;
	}
	static get HTTPClient () {
		return HTTPClient;
	}
};
Object.freeze(Network);

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