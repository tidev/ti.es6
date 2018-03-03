export default class SearchableIndex {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.SearchableIndex')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createSearchableIndex(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.SearchableIndex.apiName;
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
	isSupported () {
		return this._object.isSupported();
	}
	addToDefaultSearchableIndex (Array, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addToDefaultSearchableIndex(Array, resolve));
		}
		return this._object.addToDefaultSearchableIndex(Array, callback);
	}
	deleteAllSearchableItems (callback) {
		if (!callback) {
			return new Promise(resolve => this._object.deleteAllSearchableItems(resolve));
		}
		return this._object.deleteAllSearchableItems(callback);
	}
	deleteAllSearchableItemByDomainIdenifiers (Array, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.deleteAllSearchableItemByDomainIdenifiers(Array, resolve));
		}
		return this._object.deleteAllSearchableItemByDomainIdenifiers(Array, callback);
	}
	deleteSearchableItemsByIdentifiers (Array, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.deleteSearchableItemsByIdentifiers(Array, resolve));
		}
		return this._object.deleteSearchableItemsByIdentifiers(Array, callback);
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
Object.freeze(SearchableIndex);

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