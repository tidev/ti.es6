import { default as Window } from './UI/Window';
import { default as Blob } from './Blob';
import { default as FileStream } from './Filesystem/FileStream';
export { default as File } from './Filesystem/File';
import { default as File } from './Filesystem/File';

export default class Filesystem {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Filesystem')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Filesystem.apiName;
	}
	static get IOS_FILE_PROTECTION_NONE () {
		return Titanium.Filesystem.IOS_FILE_PROTECTION_NONE;
	}
	static get IOS_FILE_PROTECTION_COMPLETE () {
		return Titanium.Filesystem.IOS_FILE_PROTECTION_COMPLETE;
	}
	static get IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN () {
		return Titanium.Filesystem.IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN;
	}
	static get IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION () {
		return Titanium.Filesystem.IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION;
	}
	static get resRawDirectory () {
		return Titanium.Filesystem.resRawDirectory;
	}
	static get MODE_READ () {
		return Titanium.Filesystem.MODE_READ;
	}
	static get MODE_WRITE () {
		return Titanium.Filesystem.MODE_WRITE;
	}
	static get MODE_APPEND () {
		return Titanium.Filesystem.MODE_APPEND;
	}
	static get separator () {
		return Titanium.Filesystem.separator;
	}
	static get lineEnding () {
		return Titanium.Filesystem.lineEnding;
	}
	static get applicationCacheDirectory () {
		return Titanium.Filesystem.applicationCacheDirectory;
	}
	static get applicationDataDirectory () {
		return Titanium.Filesystem.applicationDataDirectory;
	}
	static get applicationDirectory () {
		return Titanium.Filesystem.applicationDirectory;
	}
	static get applicationSupportDirectory () {
		return Titanium.Filesystem.applicationSupportDirectory;
	}
	static get externalStorageDirectory () {
		return Titanium.Filesystem.externalStorageDirectory;
	}
	static get resourcesDirectory () {
		return Titanium.Filesystem.resourcesDirectory;
	}
	static get tempDirectory () {
		return Titanium.Filesystem.tempDirectory;
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
	get IOS_FILE_PROTECTION_NONE () {
		return this._object.IOS_FILE_PROTECTION_NONE;
	}
	get IOS_FILE_PROTECTION_COMPLETE () {
		return this._object.IOS_FILE_PROTECTION_COMPLETE;
	}
	get IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN () {
		return this._object.IOS_FILE_PROTECTION_COMPLETE_UNLESS_OPEN;
	}
	get IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION () {
		return this._object.IOS_FILE_PROTECTION_COMPLETE_UNTIL_FIRST_USER_AUTHENTICATION;
	}
	get resRawDirectory () {
		return this._object.resRawDirectory;
	}
	get MODE_READ () {
		return this._object.MODE_READ;
	}
	get MODE_WRITE () {
		return this._object.MODE_WRITE;
	}
	get MODE_APPEND () {
		return this._object.MODE_APPEND;
	}
	get separator () {
		return this._object.separator;
	}
	get lineEnding () {
		return this._object.lineEnding;
	}
	get applicationCacheDirectory () {
		return this._object.applicationCacheDirectory;
	}
	get applicationDataDirectory () {
		return this._object.applicationDataDirectory;
	}
	get applicationDirectory () {
		return this._object.applicationDirectory;
	}
	get applicationSupportDirectory () {
		return this._object.applicationSupportDirectory;
	}
	get externalStorageDirectory () {
		return this._object.externalStorageDirectory;
	}
	get resourcesDirectory () {
		return this._object.resourcesDirectory;
	}
	get tempDirectory () {
		return this._object.tempDirectory;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Filesystem.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Filesystem.bubbleParent = value;
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
	getAsset (path) {
		return new Blob(this._object.getAsset(path));
	}
	hasStoragePermissions () {
		return this._object.hasStoragePermissions();
	}
	requestStoragePermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestStoragePermissions(resolve));
		}
		return this._object.requestStoragePermissions(callback);
	}
	openStream (mode, path) {
		return new FileStream(this._object.openStream(mode, path));
	}
	directoryForSuite (suiteName) {
		return this._object.directoryForSuite(suiteName);
	}
	getFile (path) {
		return new File(this._object.getFile(path));
	}
	isExternalStoragePresent () {
		return this._object.isExternalStoragePresent();
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
	getResRawDirectory () {
		return this._object.getResRawDirectory();
	}
	getSeparator () {
		return this._object.getSeparator();
	}
	getLineEnding () {
		return this._object.getLineEnding();
	}
	getApplicationCacheDirectory () {
		return this._object.getApplicationCacheDirectory();
	}
	getApplicationDataDirectory () {
		return this._object.getApplicationDataDirectory();
	}
	getApplicationDirectory () {
		return this._object.getApplicationDirectory();
	}
	getApplicationSupportDirectory () {
		return this._object.getApplicationSupportDirectory();
	}
	getExternalStorageDirectory () {
		return this._object.getExternalStorageDirectory();
	}
	getResourcesDirectory () {
		return this._object.getResourcesDirectory();
	}
	getTempDirectory () {
		return this._object.getTempDirectory();
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
	static getAsset (path) {
		return new Blob(this._object.getAsset(path));
	}
	static hasStoragePermissions () {
		return this._object.hasStoragePermissions();
	}
	static requestStoragePermissions (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.requestStoragePermissions(resolve));
		}
		return this._object.requestStoragePermissions(callback);
	}
	static openStream (mode, path) {
		return new FileStream(this._object.openStream(mode, path));
	}
	static directoryForSuite (suiteName) {
		return this._object.directoryForSuite(suiteName);
	}
	static getFile (path) {
		return new File(this._object.getFile(path));
	}
	static isExternalStoragePresent () {
		return this._object.isExternalStoragePresent();
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
	static getResRawDirectory () {
		return this._object.getResRawDirectory();
	}
	static getSeparator () {
		return this._object.getSeparator();
	}
	static getLineEnding () {
		return this._object.getLineEnding();
	}
	static getApplicationCacheDirectory () {
		return this._object.getApplicationCacheDirectory();
	}
	static getApplicationDataDirectory () {
		return this._object.getApplicationDataDirectory();
	}
	static getApplicationDirectory () {
		return this._object.getApplicationDirectory();
	}
	static getApplicationSupportDirectory () {
		return this._object.getApplicationSupportDirectory();
	}
	static getExternalStorageDirectory () {
		return this._object.getExternalStorageDirectory();
	}
	static getResourcesDirectory () {
		return this._object.getResourcesDirectory();
	}
	static getTempDirectory () {
		return this._object.getTempDirectory();
	}

	// modules
	static get File () {
		return File;
	}
};
Object.freeze(Filesystem);

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