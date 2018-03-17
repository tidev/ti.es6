import { default as Window } from './../UI/Window';
import { default as Intent } from './Intent';

export default class PendingIntent {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.PendingIntent')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createPendingIntent(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.PendingIntent.apiName;
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
	get flags () {
		return this._object.flags;
	}
	set flags (value) {
		this._object.flags = value;
	}
	get intent () {
		return new Intent(this._object.intent);
	}
	set intent (value) {
		this._object.intent = value;
	}
	get updateCurrentIntent () {
		return this._object.updateCurrentIntent;
	}
	set updateCurrentIntent (value) {
		this._object.updateCurrentIntent = value;
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
	getFlags () {
		return this._object.getFlags();
	}
	setFlags (flags) {
		return this._object.setFlags(flags);
	}
	getIntent () {
		return new Intent(this._object.getIntent());
	}
	setIntent (intent) {
		intent = normalize(intent);
		return this._object.setIntent(intent);
	}
	getUpdateCurrentIntent () {
		return this._object.getUpdateCurrentIntent();
	}
	setUpdateCurrentIntent (updateCurrentIntent) {
		return this._object.setUpdateCurrentIntent(updateCurrentIntent);
	}

	// modules
};
Object.freeze(PendingIntent);

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