export default class ListViewCellSelectionStyle {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPhone.ListViewCellSelectionStyle')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPhone.ListViewCellSelectionStyle.apiName;
	}
	static get BLUE () {
		return Titanium.UI.iPhone.ListViewCellSelectionStyle.BLUE;
	}
	static get GRAY () {
		return Titanium.UI.iPhone.ListViewCellSelectionStyle.GRAY;
	}
	static get NONE () {
		return Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE;
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