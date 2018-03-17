export default class UserNotificationAction {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.App.iOS.UserNotificationAction')) {
			this._object = object;
		} else {
			this._object = Titanium.App.iOS.createUserNotificationAction(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.App.iOS.UserNotificationAction.apiName;
	}

	// properties
	get apiName () {
		return this._object.apiName;
	}
	get activationMode () {
		return this._object.activationMode;
	}
	set activationMode (value) {
		this._object.activationMode = value;
	}
	get behavior () {
		return this._object.behavior;
	}
	set behavior (value) {
		this._object.behavior = value;
	}
	get authenticationRequired () {
		return this._object.authenticationRequired;
	}
	set authenticationRequired (value) {
		this._object.authenticationRequired = value;
	}
	get destructive () {
		return this._object.destructive;
	}
	set destructive (value) {
		this._object.destructive = value;
	}
	get identifier () {
		return this._object.identifier;
	}
	set identifier (value) {
		this._object.identifier = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}

	// methods
	getApiName () {
		return this._object.getApiName();
	}
	getActivationMode () {
		return this._object.getActivationMode();
	}
	setActivationMode (activationMode) {
		return this._object.setActivationMode(activationMode);
	}
	getBehavior () {
		return this._object.getBehavior();
	}
	setBehavior (behavior) {
		return this._object.setBehavior(behavior);
	}
};
Object.freeze(UserNotificationAction);

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