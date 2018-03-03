export default class ListViewScrollPosition {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.ListViewScrollPosition')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.ListViewScrollPosition.apiName;
	}
	static get BOTTOM () {
		return Titanium.UI.iPhone.ListViewScrollPosition.BOTTOM;
	}
	static get MIDDLE () {
		return Titanium.UI.iPhone.ListViewScrollPosition.MIDDLE;
	}
	static get NONE () {
		return Titanium.UI.iPhone.ListViewScrollPosition.NONE;
	}
	static get TOP () {
		return Titanium.UI.iPhone.ListViewScrollPosition.TOP;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get BOTTOM () {
		return this._object.BOTTOM;
	}
	get MIDDLE () {
		return this._object.MIDDLE;
	}
	get NONE () {
		return this._object.NONE;
	}
	get TOP () {
		return this._object.TOP;
	}

	// methods
	getApiName () {
		return this._object.getApiName();
	}
};
Object.freeze(ListViewScrollPosition);

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