import { default as Window } from './../UI/Window';

export default class DisplayCaps {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Platform.DisplayCaps')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Platform.DisplayCaps.apiName;
	}
	static get density () {
		return Titanium.Platform.DisplayCaps.density;
	}
	static get dpi () {
		return Titanium.Platform.DisplayCaps.dpi;
	}
	static get logicalDensityFactor () {
		return Titanium.Platform.DisplayCaps.logicalDensityFactor;
	}
	static get platformHeight () {
		return Titanium.Platform.DisplayCaps.platformHeight;
	}
	static get platformWidth () {
		return Titanium.Platform.DisplayCaps.platformWidth;
	}
	static get xdpi () {
		return Titanium.Platform.DisplayCaps.xdpi;
	}
	static get ydpi () {
		return Titanium.Platform.DisplayCaps.ydpi;
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
	get density () {
		return this._object.density;
	}
	get dpi () {
		return this._object.dpi;
	}
	get logicalDensityFactor () {
		return this._object.logicalDensityFactor;
	}
	get platformHeight () {
		return this._object.platformHeight;
	}
	get platformWidth () {
		return this._object.platformWidth;
	}
	get xdpi () {
		return this._object.xdpi;
	}
	get ydpi () {
		return this._object.ydpi;
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
	getDensity () {
		return this._object.getDensity();
	}
	getDpi () {
		return this._object.getDpi();
	}
	getLogicalDensityFactor () {
		return this._object.getLogicalDensityFactor();
	}
	getPlatformHeight () {
		return this._object.getPlatformHeight();
	}
	getPlatformWidth () {
		return this._object.getPlatformWidth();
	}
	getXdpi () {
		return this._object.getXdpi();
	}
	getYdpi () {
		return this._object.getYdpi();
	}

	// modules
};
Object.freeze(DisplayCaps);

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