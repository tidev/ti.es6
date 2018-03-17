import { default as Window } from './../UI/Window';

export default class ResultSet {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Database.ResultSet')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Database.ResultSet.apiName;
	}
	static get fieldCount () {
		return Titanium.Database.ResultSet.fieldCount;
	}
	static get rowCount () {
		return Titanium.Database.ResultSet.rowCount;
	}
	static get validRow () {
		return Titanium.Database.ResultSet.validRow;
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
	get lifecycleContainer () {
		return new Window(this._object.lifecycleContainer);
	}
	set lifecycleContainer (value) {
		this._object.lifecycleContainer = value;
	}
	get fieldCount () {
		return this._object.fieldCount;
	}
	get rowCount () {
		return this._object.rowCount;
	}
	get validRow () {
		return this._object.validRow;
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
	fieldCount () {
		return this._object.fieldCount();
	}
	close () {
		return this._object.close();
	}
	field (index, type) {
		return this._object.field(index, type);
	}
	fieldByName (name, type) {
		return this._object.fieldByName(name, type);
	}
	fieldName (index) {
		return this._object.fieldName(index);
	}
	getFieldName (index) {
		return this._object.getFieldName(index);
	}
	isValidRow () {
		return this._object.isValidRow();
	}
	next () {
		return this._object.next();
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
	getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	getFieldCount () {
		return this._object.getFieldCount();
	}
	getRowCount () {
		return this._object.getRowCount();
	}
	getValidRow () {
		return this._object.getValidRow();
	}

	// modules
};
Object.freeze(ResultSet);

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