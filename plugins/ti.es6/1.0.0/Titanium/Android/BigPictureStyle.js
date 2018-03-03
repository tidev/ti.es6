import { default as Window } from './../UI/Window';

export default class BigPictureStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.BigPictureStyle')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createBigPictureStyle(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.BigPictureStyle.apiName;
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
	get bigLargeIcon () {
		return this._object.bigLargeIcon;
	}
	set bigLargeIcon (value) {
		this._object.bigLargeIcon = value;
	}
	get bigPicture () {
		return this._object.bigPicture;
	}
	set bigPicture (value) {
		this._object.bigPicture = value;
	}
	get bigContentTitle () {
		return this._object.bigContentTitle;
	}
	set bigContentTitle (value) {
		this._object.bigContentTitle = value;
	}
	get decodeRetries () {
		return this._object.decodeRetries;
	}
	set decodeRetries (value) {
		this._object.decodeRetries = value;
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
	getBigLargeIcon () {
		return this._object.getBigLargeIcon();
	}
	setBigLargeIcon (bigLargeIcon) {
		return this._object.setBigLargeIcon(bigLargeIcon);
	}
	getBigPicture () {
		return this._object.getBigPicture();
	}
	setBigPicture (bigPicture) {
		return this._object.setBigPicture(bigPicture);
	}
	getBigContentTitle () {
		return this._object.getBigContentTitle();
	}
	setBigContentTitle (bigContentTitle) {
		return this._object.setBigContentTitle(bigContentTitle);
	}
	getDecodeRetries () {
		return this._object.getDecodeRetries();
	}
	setDecodeRetries (decodeRetries) {
		return this._object.setDecodeRetries(decodeRetries);
	}
	getSummaryText () {
		return this._object.getSummaryText();
	}
	setSummaryText (summaryText) {
		return this._object.setSummaryText(summaryText);
	}

	// modules
};
Object.freeze(BigPictureStyle);

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