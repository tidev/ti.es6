export default class MenuPopup {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.MenuPopup')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createMenuPopup(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.MenuPopup.apiName;
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
	get items () {
		return this._object.items;
	}
	set items (value) {
		this._object.items = value;
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
	show (params) {
		return this._object.show(params);
	}
	hide (params) {
		return this._object.hide(params);
	}
	isVisible () {
		return this._object.isVisible();
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
	getItems () {
		return this._object.getItems();
	}
	setItems (items) {
		return this._object.setItems(items);
	}
};
Object.freeze(MenuPopup);

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