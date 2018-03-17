export default class PreviewAction {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.PreviewAction')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createPreviewAction(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.PreviewAction.apiName;
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
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get style () {
		return this._object.style;
	}
	set style (value) {
		this._object.style = value;
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
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getStyle () {
		return this._object.getStyle();
	}
	setStyle (style) {
		return this._object.setStyle(style);
	}
};
Object.freeze(PreviewAction);

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