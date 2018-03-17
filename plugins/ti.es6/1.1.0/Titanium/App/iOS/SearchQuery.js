export default class SearchQuery {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.SearchQuery')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createSearchQuery(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.SearchQuery.apiName;
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
	get queryString () {
		return this._object.queryString;
	}
	set queryString (value) {
		this._object.queryString = value;
	}
	get attributes () {
		return this._object.attributes;
	}
	set attributes (value) {
		this._object.attributes = value;
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
	start () {
		return this._object.start();
	}
	cancel () {
		return this._object.cancel();
	}
	isCancelled () {
		return this._object.isCancelled();
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
Object.freeze(SearchQuery);

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