import { default as View } from './../View';

export default class PreviewContext {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.PreviewContext')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createPreviewContext(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.PreviewContext.apiName;
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
	get actions () {
		return this._object.actions;
	}
	set actions (value) {
		this._object.actions = value;
	}
	get contentHeight () {
		return this._object.contentHeight;
	}
	set contentHeight (value) {
		this._object.contentHeight = value;
	}
	get preview () {
		return new View(this._object.preview);
	}
	set preview (value) {
		this._object.preview = value;
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
	getActions () {
		return this._object.getActions();
	}
	setActions (actions) {
		return this._object.setActions(actions);
	}
	getContentHeight () {
		return this._object.getContentHeight();
	}
	setContentHeight (contentHeight) {
		return this._object.setContentHeight(contentHeight);
	}
	getPreview () {
		return new View(this._object.getPreview());
	}
	setPreview (preview) {
		preview = normalize(preview);
		return this._object.setPreview(preview);
	}

	// modules
};
Object.freeze(PreviewContext);

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