import { default as Window } from './../UI/Window';
import { default as FileStream } from './FileStream';
import { default as Blob } from './../Blob';

export default class File {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Filesystem.File')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Filesystem.File.apiName;
	}
	static get executable () {
		return Titanium.Filesystem.File.executable;
	}
	static get symbolicLink () {
		return Titanium.Filesystem.File.symbolicLink;
	}
	static get writeable () {
		return Titanium.Filesystem.File.writeable;
	}
	static get name () {
		return Titanium.Filesystem.File.name;
	}
	static get nativePath () {
		return Titanium.Filesystem.File.nativePath;
	}
	static get parent () {
		return new File(Titanium.Filesystem.File.parent);
	}
	static get readonly () {
		return Titanium.Filesystem.File.readonly;
	}
	static get size () {
		return Titanium.Filesystem.File.size;
	}
	static get writable () {
		return Titanium.Filesystem.File.writable;
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
	get executable () {
		return this._object.executable;
	}
	get remoteBackup () {
		return this._object.remoteBackup;
	}
	set remoteBackup (value) {
		this._object.remoteBackup = value;
	}
	get symbolicLink () {
		return this._object.symbolicLink;
	}
	get writeable () {
		return this._object.writeable;
	}
	get hidden () {
		return this._object.hidden;
	}
	set hidden (value) {
		this._object.hidden = value;
	}
	get name () {
		return this._object.name;
	}
	get nativePath () {
		return this._object.nativePath;
	}
	get parent () {
		return new File(this._object.parent);
	}
	get readonly () {
		return this._object.readonly;
	}
	get size () {
		return this._object.size;
	}
	get writable () {
		return this._object.writable;
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
	getProtectionKey () {
		return this._object.getProtectionKey();
	}
	setProtectionKey (fileProtectionType) {
		return this._object.setProtectionKey(fileProtectionType);
	}
	getParent () {
		return this._object.getParent();
	}
	append (data) {
		return this._object.append(data);
	}
	copy (destinationPath) {
		return this._object.copy(destinationPath);
	}
	createDirectory () {
		return this._object.createDirectory();
	}
	createFile () {
		return this._object.createFile();
	}
	createTimestamp () {
		return this._object.createTimestamp();
	}
	deleteDirectory (recursive) {
		return this._object.deleteDirectory(recursive);
	}
	deleteFile () {
		return this._object.deleteFile();
	}
	exists () {
		return this._object.exists();
	}
	extension () {
		return this._object.extension();
	}
	getDirectoryListing () {
		return this._object.getDirectoryListing();
	}
	isDirectory () {
		return this._object.isDirectory();
	}
	isFile () {
		return this._object.isFile();
	}
	modificationTimestamp () {
		return this._object.modificationTimestamp();
	}
	move (newpath) {
		return this._object.move(newpath);
	}
	open (mode) {
		return new FileStream(this._object.open(mode));
	}
	read () {
		return new Blob(this._object.read());
	}
	rename (newname) {
		return this._object.rename(newname);
	}
	resolve () {
		return this._object.resolve();
	}
	spaceAvailable () {
		return this._object.spaceAvailable();
	}
	write (data, append) {
		return this._object.write(data, append);
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
	getExecutable () {
		return this._object.getExecutable();
	}
	getRemoteBackup () {
		return this._object.getRemoteBackup();
	}
	setRemoteBackup (remoteBackup) {
		return this._object.setRemoteBackup(remoteBackup);
	}
	getSymbolicLink () {
		return this._object.getSymbolicLink();
	}
	getWriteable () {
		return this._object.getWriteable();
	}
	getHidden () {
		return this._object.getHidden();
	}
	setHidden (hidden) {
		return this._object.setHidden(hidden);
	}
	getName () {
		return this._object.getName();
	}
	getNativePath () {
		return this._object.getNativePath();
	}
	getParent () {
		return new File(this._object.getParent());
	}
	getReadonly () {
		return this._object.getReadonly();
	}
	getSize () {
		return this._object.getSize();
	}
	getWritable () {
		return this._object.getWritable();
	}

	// modules
};
Object.freeze(File);

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