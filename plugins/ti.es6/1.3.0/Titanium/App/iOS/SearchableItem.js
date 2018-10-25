import { default as SearchableItemAttributeSet } from './SearchableItemAttributeSet';

export default class SearchableItem {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.SearchableItem')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createSearchableItem(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.SearchableItem.apiName;
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
	get attributeSet () {
		return new SearchableItemAttributeSet(this._object.attributeSet);
	}
	set attributeSet (value) {
		this._object.attributeSet = value;
	}
	get domainIdentifier () {
		return this._object.domainIdentifier;
	}
	set domainIdentifier (value) {
		this._object.domainIdentifier = value;
	}
	get expirationDate () {
		return this._object.expirationDate;
	}
	set expirationDate (value) {
		this._object.expirationDate = value;
	}
	get uniqueIdentifier () {
		return this._object.uniqueIdentifier;
	}
	set uniqueIdentifier (value) {
		this._object.uniqueIdentifier = value;
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
	getDomainIdentifier () {
		return this._object.getDomainIdentifier();
	}
	setDomainIdentifier (domainIdentifier) {
		return this._object.setDomainIdentifier(domainIdentifier);
	}
	getExpirationDate () {
		return this._object.getExpirationDate();
	}
	setExpirationDate (expirationDate) {
		return this._object.setExpirationDate(expirationDate);
	}
	getUniqueIdentifier () {
		return this._object.getUniqueIdentifier();
	}
	setUniqueIdentifier (uniqueIdentifier) {
		return this._object.setUniqueIdentifier(uniqueIdentifier);
	}

	// modules
};
Object.freeze(SearchableItem);

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