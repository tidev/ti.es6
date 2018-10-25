export default class ApplicationShortcuts {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.ApplicationShortcuts')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createApplicationShortcuts(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.ApplicationShortcuts.apiName;
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
	listDynamicShortcuts () {
		return this._object.listDynamicShortcuts();
	}
	listStaticShortcuts () {
		return this._object.listStaticShortcuts();
	}
	removeAllDynamicShortcuts () {
		return this._object.removeAllDynamicShortcuts();
	}
	dynamicShortcutExists (itemtype) {
		return this._object.dynamicShortcutExists(itemtype);
	}
	addDynamicShortcut (params) {
		return this._object.addDynamicShortcut(params);
	}
	removeDynamicShortcut (itemtype) {
		return this._object.removeDynamicShortcut(itemtype);
	}
	getDynamicShortcut (itemtype) {
		return this._object.getDynamicShortcut(itemtype);
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
Object.freeze(ApplicationShortcuts);

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