import { default as Window } from './../../UI/Window';

export default class LocationProvider {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Geolocation.Android.LocationProvider')) {
			this._object = object;
		} else {
			this._object = Titanium.Geolocation.Android.createLocationProvider(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Geolocation.Android.LocationProvider.apiName;
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
	get name () {
		return this._object.name;
	}
	set name (value) {
		this._object.name = value;
	}
	get minUpdateTime () {
		return this._object.minUpdateTime;
	}
	set minUpdateTime (value) {
		this._object.minUpdateTime = value;
	}
	get minUpdateDistance () {
		return this._object.minUpdateDistance;
	}
	set minUpdateDistance (value) {
		this._object.minUpdateDistance = value;
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
	getName () {
		return this._object.getName();
	}
	setName (name) {
		return this._object.setName(name);
	}
	getMinUpdateTime () {
		return this._object.getMinUpdateTime();
	}
	setMinUpdateTime (minUpdateTime) {
		return this._object.setMinUpdateTime(minUpdateTime);
	}
	getMinUpdateDistance () {
		return this._object.getMinUpdateDistance();
	}
	setMinUpdateDistance (minUpdateDistance) {
		return this._object.setMinUpdateDistance(minUpdateDistance);
	}

	// modules
};
Object.freeze(LocationProvider);

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