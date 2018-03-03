import { default as Window } from './../UI/Window';

export default class BigTextStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.BigTextStyle')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createBigTextStyle(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.BigTextStyle.apiName;
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
	get bigText () {
		return this._object.bigText;
	}
	set bigText (value) {
		this._object.bigText = value;
	}
	get bigContentTitle () {
		return this._object.bigContentTitle;
	}
	set bigContentTitle (value) {
		this._object.bigContentTitle = value;
	}
	get summaryText () {
		return this._object.summaryText;
	}
	set summaryText (value) {
		this._object.summaryText = value;
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
	getBigText () {
		return this._object.getBigText();
	}
	setBigText (bigText) {
		return this._object.setBigText(bigText);
	}
	getBigContentTitle () {
		return this._object.getBigContentTitle();
	}
	setBigContentTitle (bigContentTitle) {
		return this._object.setBigContentTitle(bigContentTitle);
	}
	getSummaryText () {
		return this._object.getSummaryText();
	}
	setSummaryText (summaryText) {
		return this._object.setSummaryText(summaryText);
	}

	// modules
};
Object.freeze(BigTextStyle);

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