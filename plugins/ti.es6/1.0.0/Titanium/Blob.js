import { default as Window } from './UI/Window';
import { default as File } from './Filesystem/File';

export default class Blob {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Blob')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Blob.apiName;
	}
	static get file () {
		return new File(Titanium.Blob.file);
	}
	static get height () {
		return Titanium.Blob.height;
	}
	static get length () {
		return Titanium.Blob.length;
	}
	static get mimeType () {
		return Titanium.Blob.mimeType;
	}
	static get nativePath () {
		return Titanium.Blob.nativePath;
	}
	static get size () {
		return Titanium.Blob.size;
	}
	static get text () {
		return Titanium.Blob.text;
	}
	static get width () {
		return Titanium.Blob.width;
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
	get file () {
		return new File(this._object.file);
	}
	get height () {
		return this._object.height;
	}
	get length () {
		return this._object.length;
	}
	get mimeType () {
		return this._object.mimeType;
	}
	get nativePath () {
		return this._object.nativePath;
	}
	get size () {
		return this._object.size;
	}
	get text () {
		return this._object.text;
	}
	get width () {
		return this._object.width;
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
	imageAsCompressed (quality) {
		return new Blob(this._object.imageAsCompressed(quality));
	}
	imageWithAlpha () {
		return new Blob(this._object.imageWithAlpha());
	}
	imageWithRoundedCorner (cornerSize, borderSize) {
		return new Blob(this._object.imageWithRoundedCorner(cornerSize, borderSize));
	}
	imageWithTransparentBorder (size) {
		return new Blob(this._object.imageWithTransparentBorder(size));
	}
	append (blob) {
		blob = normalize(blob);
		return this._object.append(blob);
	}
	toString () {
		return this._object.toString();
	}
	imageAsCropped (options) {
		return new Blob(this._object.imageAsCropped(options));
	}
	imageAsResized (width, height) {
		return new Blob(this._object.imageAsResized(width, height));
	}
	imageAsThumbnail (size, borderSize, cornerRadius) {
		return new Blob(this._object.imageAsThumbnail(size, borderSize, cornerRadius));
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
	getFile () {
		return new File(this._object.getFile());
	}
	getHeight () {
		return this._object.getHeight();
	}
	getLength () {
		return this._object.getLength();
	}
	getMimeType () {
		return this._object.getMimeType();
	}
	getNativePath () {
		return this._object.getNativePath();
	}
	getSize () {
		return this._object.getSize();
	}
	getText () {
		return this._object.getText();
	}
	getWidth () {
		return this._object.getWidth();
	}

	// modules
};
Object.freeze(Blob);

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