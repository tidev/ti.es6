import { default as Window } from './../UI/Window';

export default class Android {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Platform.Android')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Platform.Android.apiName;
	}
	static get API_LEVEL () {
		return Titanium.Platform.Android.API_LEVEL;
	}
	static get PHYSICAL_SIZE_CATEGORY_LARGE () {
		return Titanium.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE;
	}
	static get PHYSICAL_SIZE_CATEGORY_NORMAL () {
		return Titanium.Platform.Android.PHYSICAL_SIZE_CATEGORY_NORMAL;
	}
	static get PHYSICAL_SIZE_CATEGORY_SMALL () {
		return Titanium.Platform.Android.PHYSICAL_SIZE_CATEGORY_SMALL;
	}
	static get PHYSICAL_SIZE_CATEGORY_UNDEFINED () {
		return Titanium.Platform.Android.PHYSICAL_SIZE_CATEGORY_UNDEFINED;
	}
	static get PHYSICAL_SIZE_CATEGORY_XLARGE () {
		return Titanium.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE;
	}
	static get physicalSizeCategory () {
		return Titanium.Platform.Android.physicalSizeCategory;
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
	get API_LEVEL () {
		return this._object.API_LEVEL;
	}
	get PHYSICAL_SIZE_CATEGORY_LARGE () {
		return this._object.PHYSICAL_SIZE_CATEGORY_LARGE;
	}
	get PHYSICAL_SIZE_CATEGORY_NORMAL () {
		return this._object.PHYSICAL_SIZE_CATEGORY_NORMAL;
	}
	get PHYSICAL_SIZE_CATEGORY_SMALL () {
		return this._object.PHYSICAL_SIZE_CATEGORY_SMALL;
	}
	get PHYSICAL_SIZE_CATEGORY_UNDEFINED () {
		return this._object.PHYSICAL_SIZE_CATEGORY_UNDEFINED;
	}
	get PHYSICAL_SIZE_CATEGORY_XLARGE () {
		return this._object.PHYSICAL_SIZE_CATEGORY_XLARGE;
	}
	get physicalSizeCategory () {
		return this._object.physicalSizeCategory;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Platform.Android.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Platform.Android.bubbleParent = value;
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
	getPhysicalSizeCategory () {
		return this._object.getPhysicalSizeCategory();
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
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}
	static getPhysicalSizeCategory () {
		return this._object.getPhysicalSizeCategory();
	}

	// modules
};
Object.freeze(Android);

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