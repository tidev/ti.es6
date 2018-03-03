export default class SystemButton {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.SystemButton')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.SystemButton.apiName;
	}
	static get ACTION () {
		return Titanium.UI.iPhone.SystemButton.ACTION;
	}
	static get ACTIVITY () {
		return Titanium.UI.iPhone.SystemButton.ACTIVITY;
	}
	static get ADD () {
		return Titanium.UI.iPhone.SystemButton.ADD;
	}
	static get BOOKMARKS () {
		return Titanium.UI.iPhone.SystemButton.BOOKMARKS;
	}
	static get CAMERA () {
		return Titanium.UI.iPhone.SystemButton.CAMERA;
	}
	static get CANCEL () {
		return Titanium.UI.iPhone.SystemButton.CANCEL;
	}
	static get COMPOSE () {
		return Titanium.UI.iPhone.SystemButton.COMPOSE;
	}
	static get CONTACT_ADD () {
		return Titanium.UI.iPhone.SystemButton.CONTACT_ADD;
	}
	static get DISCLOSURE () {
		return Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	}
	static get DONE () {
		return Titanium.UI.iPhone.SystemButton.DONE;
	}
	static get EDIT () {
		return Titanium.UI.iPhone.SystemButton.EDIT;
	}
	static get FAST_FORWARD () {
		return Titanium.UI.iPhone.SystemButton.FAST_FORWARD;
	}
	static get FIXED_SPACE () {
		return Titanium.UI.iPhone.SystemButton.FIXED_SPACE;
	}
	static get FLEXIBLE_SPACE () {
		return Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE;
	}
	static get INFO_DARK () {
		return Titanium.UI.iPhone.SystemButton.INFO_DARK;
	}
	static get INFO_LIGHT () {
		return Titanium.UI.iPhone.SystemButton.INFO_LIGHT;
	}
	static get ORGANIZE () {
		return Titanium.UI.iPhone.SystemButton.ORGANIZE;
	}
	static get PAUSE () {
		return Titanium.UI.iPhone.SystemButton.PAUSE;
	}
	static get PLAY () {
		return Titanium.UI.iPhone.SystemButton.PLAY;
	}
	static get REFRESH () {
		return Titanium.UI.iPhone.SystemButton.REFRESH;
	}
	static get REPLY () {
		return Titanium.UI.iPhone.SystemButton.REPLY;
	}
	static get REWIND () {
		return Titanium.UI.iPhone.SystemButton.REWIND;
	}
	static get SAVE () {
		return Titanium.UI.iPhone.SystemButton.SAVE;
	}
	static get SPINNER () {
		return Titanium.UI.iPhone.SystemButton.SPINNER;
	}
	static get STOP () {
		return Titanium.UI.iPhone.SystemButton.STOP;
	}
	static get TRASH () {
		return Titanium.UI.iPhone.SystemButton.TRASH;
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
	get ACTION () {
		return this._object.ACTION;
	}
	get ACTIVITY () {
		return this._object.ACTIVITY;
	}
	get ADD () {
		return this._object.ADD;
	}
	get BOOKMARKS () {
		return this._object.BOOKMARKS;
	}
	get CAMERA () {
		return this._object.CAMERA;
	}
	get CANCEL () {
		return this._object.CANCEL;
	}
	get COMPOSE () {
		return this._object.COMPOSE;
	}
	get CONTACT_ADD () {
		return this._object.CONTACT_ADD;
	}
	get DISCLOSURE () {
		return this._object.DISCLOSURE;
	}
	get DONE () {
		return this._object.DONE;
	}
	get EDIT () {
		return this._object.EDIT;
	}
	get FAST_FORWARD () {
		return this._object.FAST_FORWARD;
	}
	get FIXED_SPACE () {
		return this._object.FIXED_SPACE;
	}
	get FLEXIBLE_SPACE () {
		return this._object.FLEXIBLE_SPACE;
	}
	get INFO_DARK () {
		return this._object.INFO_DARK;
	}
	get INFO_LIGHT () {
		return this._object.INFO_LIGHT;
	}
	get ORGANIZE () {
		return this._object.ORGANIZE;
	}
	get PAUSE () {
		return this._object.PAUSE;
	}
	get PLAY () {
		return this._object.PLAY;
	}
	get REFRESH () {
		return this._object.REFRESH;
	}
	get REPLY () {
		return this._object.REPLY;
	}
	get REWIND () {
		return this._object.REWIND;
	}
	get SAVE () {
		return this._object.SAVE;
	}
	get SPINNER () {
		return this._object.SPINNER;
	}
	get STOP () {
		return this._object.STOP;
	}
	get TRASH () {
		return this._object.TRASH;
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
Object.freeze(SystemButton);

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