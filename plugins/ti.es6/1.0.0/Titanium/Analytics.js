import { default as Window } from './UI/Window';

export default class Analytics {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Analytics')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Analytics.apiName;
	}
	static get lastEvent () {
		return Titanium.Analytics.lastEvent;
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
	get lastEvent () {
		return this._object.lastEvent;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Analytics.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Analytics.bubbleParent = value;
	}

	// methods
	addEvent (type, name, data) {
		data = normalize(data);
		return this._object.addEvent(type, name, data);
	}
	filterEvents (events) {
		return this._object.filterEvents(events);
	}
	settingsEvent (name, data) {
		data = normalize(data);
		return this._object.settingsEvent(name, data);
	}
	timedEvent (name, start, stop, duration, data) {
		data = normalize(data);
		return this._object.timedEvent(name, start, stop, duration, data);
	}
	userEvent (name, data) {
		data = normalize(data);
		return this._object.userEvent(name, data);
	}
	featureEvent (name, data) {
		data = normalize(data);
		return this._object.featureEvent(name, data);
	}
	navEvent (from, to, name, data) {
		data = normalize(data);
		return this._object.navEvent(from, to, name, data);
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
	getLastEvent () {
		return this._object.getLastEvent();
	}

	// static methods
	static filterEvents (events) {
		return this._object.filterEvents(events);
	}
	static featureEvent (name, data) {
		data = normalize(data);
		return this._object.featureEvent(name, data);
	}
	static navEvent (from, to, name, data) {
		data = normalize(data);
		return this._object.navEvent(from, to, name, data);
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
	static getLastEvent () {
		return this._object.getLastEvent();
	}

	// modules
};
Object.freeze(Analytics);

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