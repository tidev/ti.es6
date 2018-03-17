export default class ListViewCellSelectionStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.ListViewCellSelectionStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.ListViewCellSelectionStyle.apiName;
	}
	static get BLUE () {
		return Titanium.UI.iOS.ListViewCellSelectionStyle.BLUE;
	}
	static get GRAY () {
		return Titanium.UI.iOS.ListViewCellSelectionStyle.GRAY;
	}
	static get NONE () {
		return Titanium.UI.iOS.ListViewCellSelectionStyle.NONE;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get BLUE () {
		return this._object.BLUE;
	}
	get GRAY () {
		return this._object.GRAY;
	}
	get NONE () {
		return this._object.NONE;
	}

	// methods
	getApiName () {
		return this._object.getApiName();
	}

	// static methods
	static getApiName () {
		return this._object.getApiName();
	}
};
Object.freeze(ListViewCellSelectionStyle);

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