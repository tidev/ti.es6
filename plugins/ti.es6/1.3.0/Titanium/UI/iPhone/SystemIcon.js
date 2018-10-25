export default class SystemIcon {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.SystemIcon')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.SystemIcon.apiName;
	}
	static get BOOKMARKS () {
		return Titanium.UI.iPhone.SystemIcon.BOOKMARKS;
	}
	static get CONTACTS () {
		return Titanium.UI.iPhone.SystemIcon.CONTACTS;
	}
	static get DOWNLOADS () {
		return Titanium.UI.iPhone.SystemIcon.DOWNLOADS;
	}
	static get FAVORITES () {
		return Titanium.UI.iPhone.SystemIcon.FAVORITES;
	}
	static get FEATURED () {
		return Titanium.UI.iPhone.SystemIcon.FEATURED;
	}
	static get HISTORY () {
		return Titanium.UI.iPhone.SystemIcon.HISTORY;
	}
	static get MORE () {
		return Titanium.UI.iPhone.SystemIcon.MORE;
	}
	static get MOST_RECENT () {
		return Titanium.UI.iPhone.SystemIcon.MOST_RECENT;
	}
	static get MOST_VIEWED () {
		return Titanium.UI.iPhone.SystemIcon.MOST_VIEWED;
	}
	static get RECENTS () {
		return Titanium.UI.iPhone.SystemIcon.RECENTS;
	}
	static get SEARCH () {
		return Titanium.UI.iPhone.SystemIcon.SEARCH;
	}
	static get TOP_RATED () {
		return Titanium.UI.iPhone.SystemIcon.TOP_RATED;
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
	get BOOKMARKS () {
		return this._object.BOOKMARKS;
	}
	get CONTACTS () {
		return this._object.CONTACTS;
	}
	get DOWNLOADS () {
		return this._object.DOWNLOADS;
	}
	get FAVORITES () {
		return this._object.FAVORITES;
	}
	get FEATURED () {
		return this._object.FEATURED;
	}
	get HISTORY () {
		return this._object.HISTORY;
	}
	get MORE () {
		return this._object.MORE;
	}
	get MOST_RECENT () {
		return this._object.MOST_RECENT;
	}
	get MOST_VIEWED () {
		return this._object.MOST_VIEWED;
	}
	get RECENTS () {
		return this._object.RECENTS;
	}
	get SEARCH () {
		return this._object.SEARCH;
	}
	get TOP_RATED () {
		return this._object.TOP_RATED;
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
};
Object.freeze(SystemIcon);

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