export default class iPhone {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.apiName;
	}
	static get MODAL_PRESENTATION_CURRENT_CONTEXT () {
		return Titanium.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT;
	}
	static get MODAL_PRESENTATION_FORMSHEET () {
		return Titanium.UI.iPhone.MODAL_PRESENTATION_FORMSHEET;
	}
	static get MODAL_PRESENTATION_FULLSCREEN () {
		return Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN;
	}
	static get MODAL_PRESENTATION_PAGESHEET () {
		return Titanium.UI.iPhone.MODAL_PRESENTATION_PAGESHEET;
	}
	static get MODAL_TRANSITION_STYLE_COVER_VERTICAL () {
		return Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
	}
	static get MODAL_TRANSITION_STYLE_CROSS_DISSOLVE () {
		return Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE;
	}
	static get MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL () {
		return Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL;
	}
	static get MODAL_TRANSITION_STYLE_PARTIAL_CURL () {
		return Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
	}
	static get statusBarHidden () {
		return Titanium.UI.iPhone.statusBarHidden;
	}
	static get statusBarStyle () {
		return Titanium.UI.iPhone.statusBarStyle;
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
	get MODAL_PRESENTATION_CURRENT_CONTEXT () {
		return this._object.MODAL_PRESENTATION_CURRENT_CONTEXT;
	}
	get MODAL_PRESENTATION_FORMSHEET () {
		return this._object.MODAL_PRESENTATION_FORMSHEET;
	}
	get MODAL_PRESENTATION_FULLSCREEN () {
		return this._object.MODAL_PRESENTATION_FULLSCREEN;
	}
	get MODAL_PRESENTATION_PAGESHEET () {
		return this._object.MODAL_PRESENTATION_PAGESHEET;
	}
	get MODAL_TRANSITION_STYLE_COVER_VERTICAL () {
		return this._object.MODAL_TRANSITION_STYLE_COVER_VERTICAL;
	}
	get MODAL_TRANSITION_STYLE_CROSS_DISSOLVE () {
		return this._object.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE;
	}
	get MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL () {
		return this._object.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL;
	}
	get MODAL_TRANSITION_STYLE_PARTIAL_CURL () {
		return this._object.MODAL_TRANSITION_STYLE_PARTIAL_CURL;
	}
	get appBadge () {
		return this._object.appBadge;
	}
	set appBadge (value) {
		this._object.appBadge = value;
	}
	get appSupportsShakeToEdit () {
		return this._object.appSupportsShakeToEdit;
	}
	set appSupportsShakeToEdit (value) {
		this._object.appSupportsShakeToEdit = value;
	}
	get statusBarHidden () {
		return this._object.statusBarHidden;
	}
	get statusBarStyle () {
		return this._object.statusBarStyle;
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
	hideStatusBar (params) {
		return this._object.hideStatusBar(params);
	}
	showStatusBar (params) {
		return this._object.showStatusBar(params);
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
	getAppBadge () {
		return this._object.getAppBadge();
	}
	setAppBadge (appBadge) {
		return this._object.setAppBadge(appBadge);
	}
	getAppSupportsShakeToEdit () {
		return this._object.getAppSupportsShakeToEdit();
	}
	setAppSupportsShakeToEdit (appSupportsShakeToEdit) {
		return this._object.setAppSupportsShakeToEdit(appSupportsShakeToEdit);
	}
	getStatusBarHidden () {
		return this._object.getStatusBarHidden();
	}
	getStatusBarStyle () {
		return this._object.getStatusBarStyle();
	}
};
Object.freeze(iPhone);

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