export default class UserDefaults {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.UserDefaults')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createUserDefaults(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.UserDefaults.apiName;
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
	get suiteName () {
		return this._object.suiteName;
	}
	set suiteName (value) {
		this._object.suiteName = value;
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
	getBool (property, def) {
		return this._object.getBool(property, def);
	}
	getDouble (property, def) {
		return this._object.getDouble(property, def);
	}
	getInt (property, def) {
		return this._object.getInt(property, def);
	}
	getList (property, def) {
		return this._object.getList(property, def);
	}
	getObject (property, def) {
		def = normalize(def);
		return this._object.getObject(property, def);
	}
	getString (property, def) {
		return this._object.getString(property, def);
	}
	hasProperty (property) {
		return this._object.hasProperty(property);
	}
	listProperties () {
		return this._object.listProperties();
	}
	removeAllProperties () {
		return this._object.removeAllProperties();
	}
	removeProperty (property) {
		return this._object.removeProperty(property);
	}
	setBool (property, value) {
		return this._object.setBool(property, value);
	}
	setDouble (property, value) {
		return this._object.setDouble(property, value);
	}
	setInt (property, value) {
		return this._object.setInt(property, value);
	}
	setList (property, value) {
		return this._object.setList(property, value);
	}
	setObject (property, value) {
		value = normalize(value);
		return this._object.setObject(property, value);
	}
	setString (property, value) {
		return this._object.setString(property, value);
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
	getSuiteName () {
		return this._object.getSuiteName();
	}
	setSuiteName (suiteName) {
		return this._object.setSuiteName(suiteName);
	}
};
Object.freeze(UserDefaults);

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