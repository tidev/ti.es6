import { default as Window } from './UI/Window';
import { default as DisplayCaps } from './Platform/DisplayCaps';

export default class Platform {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Platform')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Platform.apiName;
	}
	static get identifierForVendor () {
		return Titanium.Platform.identifierForVendor;
	}
	static get isAdvertisingTrackingEnabled () {
		return Titanium.Platform.isAdvertisingTrackingEnabled;
	}
	static get address () {
		return Titanium.Platform.address;
	}
	static get architecture () {
		return Titanium.Platform.architecture;
	}
	static get availableMemory () {
		return Titanium.Platform.availableMemory;
	}
	static get batteryLevel () {
		return Titanium.Platform.batteryLevel;
	}
	static get batteryState () {
		return Titanium.Platform.batteryState;
	}
	static get id () {
		return Titanium.Platform.id;
	}
	static get locale () {
		return Titanium.Platform.locale;
	}
	static get macaddress () {
		return Titanium.Platform.macaddress;
	}
	static get manufacturer () {
		return Titanium.Platform.manufacturer;
	}
	static get model () {
		return Titanium.Platform.model;
	}
	static get name () {
		return Titanium.Platform.name;
	}
	static get netmask () {
		return Titanium.Platform.netmask;
	}
	static get osname () {
		return Titanium.Platform.osname;
	}
	static get ostype () {
		return Titanium.Platform.ostype;
	}
	static get processorCount () {
		return Titanium.Platform.processorCount;
	}
	static get runtime () {
		return Titanium.Platform.runtime;
	}
	static get username () {
		return Titanium.Platform.username;
	}
	static get version () {
		return Titanium.Platform.version;
	}
	static get displayCaps () {
		return new DisplayCaps(Titanium.Platform.displayCaps);
	}
	static get BATTERY_STATE_CHARGING () {
		return Titanium.Platform.BATTERY_STATE_CHARGING;
	}
	static get BATTERY_STATE_FULL () {
		return Titanium.Platform.BATTERY_STATE_FULL;
	}
	static get BATTERY_STATE_UNKNOWN () {
		return Titanium.Platform.BATTERY_STATE_UNKNOWN;
	}
	static get BATTERY_STATE_UNPLUGGED () {
		return Titanium.Platform.BATTERY_STATE_UNPLUGGED;
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
	get identifierForVendor () {
		return this._object.identifierForVendor;
	}
	get identifierForAdvertising () {
		return this._object.identifierForAdvertising;
	}
	set identifierForAdvertising (value) {
		this._object.identifierForAdvertising = value;
	}
	get isAdvertisingTrackingEnabled () {
		return this._object.isAdvertisingTrackingEnabled;
	}
	get address () {
		return this._object.address;
	}
	get architecture () {
		return this._object.architecture;
	}
	get availableMemory () {
		return this._object.availableMemory;
	}
	get batteryLevel () {
		return this._object.batteryLevel;
	}
	get batteryMonitoring () {
		return this._object.batteryMonitoring;
	}
	set batteryMonitoring (value) {
		this._object.batteryMonitoring = value;
	}
	get batteryState () {
		return this._object.batteryState;
	}
	get id () {
		return this._object.id;
	}
	get locale () {
		return this._object.locale;
	}
	get macaddress () {
		return this._object.macaddress;
	}
	get manufacturer () {
		return this._object.manufacturer;
	}
	get model () {
		return this._object.model;
	}
	get name () {
		return this._object.name;
	}
	get netmask () {
		return this._object.netmask;
	}
	get osname () {
		return this._object.osname;
	}
	get ostype () {
		return this._object.ostype;
	}
	get processorCount () {
		return this._object.processorCount;
	}
	get runtime () {
		return this._object.runtime;
	}
	get username () {
		return this._object.username;
	}
	get version () {
		return this._object.version;
	}
	get displayCaps () {
		return new DisplayCaps(this._object.displayCaps);
	}
	get BATTERY_STATE_CHARGING () {
		return this._object.BATTERY_STATE_CHARGING;
	}
	get BATTERY_STATE_FULL () {
		return this._object.BATTERY_STATE_FULL;
	}
	get BATTERY_STATE_UNKNOWN () {
		return this._object.BATTERY_STATE_UNKNOWN;
	}
	get BATTERY_STATE_UNPLUGGED () {
		return this._object.BATTERY_STATE_UNPLUGGED;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Platform.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Platform.bubbleParent = value;
	}
	static get identifierForAdvertising () {
		return Titanium.Platform.identifierForAdvertising;
	}
	static set identifierForAdvertising (value) {
		Titanium.Platform.identifierForAdvertising = value;
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
	canOpenURL (url) {
		return this._object.canOpenURL(url);
	}
	openURL (url) {
		return this._object.openURL(url);
	}
	is24HourTimeFormat () {
		return this._object.is24HourTimeFormat();
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
	getIdentifierForVendor () {
		return this._object.getIdentifierForVendor();
	}
	getIdentifierForAdvertising () {
		return this._object.getIdentifierForAdvertising();
	}
	setIdentifierForAdvertising (identifierForAdvertising) {
		return this._object.setIdentifierForAdvertising(identifierForAdvertising);
	}
	getIsAdvertisingTrackingEnabled () {
		return this._object.getIsAdvertisingTrackingEnabled();
	}
	getAddress () {
		return this._object.getAddress();
	}
	getArchitecture () {
		return this._object.getArchitecture();
	}
	getAvailableMemory () {
		return this._object.getAvailableMemory();
	}
	getBatteryLevel () {
		return this._object.getBatteryLevel();
	}
	getBatteryMonitoring () {
		return this._object.getBatteryMonitoring();
	}
	setBatteryMonitoring (batteryMonitoring) {
		return this._object.setBatteryMonitoring(batteryMonitoring);
	}
	getBatteryState () {
		return this._object.getBatteryState();
	}
	getId () {
		return this._object.getId();
	}
	getLocale () {
		return this._object.getLocale();
	}
	getMacaddress () {
		return this._object.getMacaddress();
	}
	getManufacturer () {
		return this._object.getManufacturer();
	}
	getModel () {
		return this._object.getModel();
	}
	getName () {
		return this._object.getName();
	}
	getNetmask () {
		return this._object.getNetmask();
	}
	getOsname () {
		return this._object.getOsname();
	}
	getOstype () {
		return this._object.getOstype();
	}
	getProcessorCount () {
		return this._object.getProcessorCount();
	}
	getRuntime () {
		return this._object.getRuntime();
	}
	getUsername () {
		return this._object.getUsername();
	}
	getVersion () {
		return this._object.getVersion();
	}
	getDisplayCaps () {
		return new DisplayCaps(this._object.getDisplayCaps());
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
	static canOpenURL (url) {
		return this._object.canOpenURL(url);
	}
	static openURL (url) {
		return this._object.openURL(url);
	}
	static is24HourTimeFormat () {
		return this._object.is24HourTimeFormat();
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
	static getIdentifierForVendor () {
		return this._object.getIdentifierForVendor();
	}
	static getIdentifierForAdvertising () {
		return this._object.getIdentifierForAdvertising();
	}
	static setIdentifierForAdvertising (identifierForAdvertising) {
		return this._object.setIdentifierForAdvertising(identifierForAdvertising);
	}
	static getIsAdvertisingTrackingEnabled () {
		return this._object.getIsAdvertisingTrackingEnabled();
	}
	static getAddress () {
		return this._object.getAddress();
	}
	static getArchitecture () {
		return this._object.getArchitecture();
	}
	static getAvailableMemory () {
		return this._object.getAvailableMemory();
	}
	static getBatteryLevel () {
		return this._object.getBatteryLevel();
	}
	static getBatteryMonitoring () {
		return this._object.getBatteryMonitoring();
	}
	static setBatteryMonitoring (batteryMonitoring) {
		return this._object.setBatteryMonitoring(batteryMonitoring);
	}
	static getBatteryState () {
		return this._object.getBatteryState();
	}
	static getId () {
		return this._object.getId();
	}
	static getLocale () {
		return this._object.getLocale();
	}
	static getMacaddress () {
		return this._object.getMacaddress();
	}
	static getManufacturer () {
		return this._object.getManufacturer();
	}
	static getModel () {
		return this._object.getModel();
	}
	static getName () {
		return this._object.getName();
	}
	static getNetmask () {
		return this._object.getNetmask();
	}
	static getOsname () {
		return this._object.getOsname();
	}
	static getOstype () {
		return this._object.getOstype();
	}
	static getProcessorCount () {
		return this._object.getProcessorCount();
	}
	static getRuntime () {
		return this._object.getRuntime();
	}
	static getUsername () {
		return this._object.getUsername();
	}
	static getVersion () {
		return this._object.getVersion();
	}
	static getDisplayCaps () {
		return new DisplayCaps(this._object.getDisplayCaps());
	}

	// modules
};
Object.freeze(Platform);

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