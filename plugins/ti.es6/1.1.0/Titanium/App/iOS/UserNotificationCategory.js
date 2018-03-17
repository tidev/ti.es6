export default class UserNotificationCategory {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.UserNotificationCategory')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createUserNotificationCategory(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.UserNotificationCategory.apiName;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get actionsForDefaultContext () {
		return this._object.actionsForDefaultContext;
	}
	set actionsForDefaultContext (value) {
		this._object.actionsForDefaultContext = value;
	}
	get actionsForMinimalContext () {
		return this._object.actionsForMinimalContext;
	}
	set actionsForMinimalContext (value) {
		this._object.actionsForMinimalContext = value;
	}
	get identifier () {
		return this._object.identifier;
	}
	set identifier (value) {
		this._object.identifier = value;
	}

	// methods
	getApiName () {
		return this._object.getApiName();
	}
};
Object.freeze(UserNotificationCategory);

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