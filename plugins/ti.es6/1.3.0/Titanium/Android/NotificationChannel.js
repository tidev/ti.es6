import { default as Window } from './../UI/Window';

export default class NotificationChannel {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.NotificationChannel')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createNotificationChannel(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.NotificationChannel.apiName;
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
	get bypassDnd () {
		return this._object.bypassDnd;
	}
	set bypassDnd (value) {
		this._object.bypassDnd = value;
	}
	get description () {
		return this._object.description;
	}
	set description (value) {
		this._object.description = value;
	}
	get enableLights () {
		return this._object.enableLights;
	}
	set enableLights (value) {
		this._object.enableLights = value;
	}
	get enableVibration () {
		return this._object.enableVibration;
	}
	set enableVibration (value) {
		this._object.enableVibration = value;
	}
	get groupId () {
		return this._object.groupId;
	}
	set groupId (value) {
		this._object.groupId = value;
	}
	get importance () {
		return this._object.importance;
	}
	set importance (value) {
		this._object.importance = value;
	}
	get id () {
		return this._object.id;
	}
	set id (value) {
		this._object.id = value;
	}
	get lightColor () {
		return this._object.lightColor;
	}
	set lightColor (value) {
		this._object.lightColor = value;
	}
	get lockscreenVisibility () {
		return this._object.lockscreenVisibility;
	}
	set lockscreenVisibility (value) {
		this._object.lockscreenVisibility = value;
	}
	get showBadge () {
		return this._object.showBadge;
	}
	set showBadge (value) {
		this._object.showBadge = value;
	}
	get vibratePattern () {
		return this._object.vibratePattern;
	}
	set vibratePattern (value) {
		this._object.vibratePattern = value;
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
	getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	getBypassDnd () {
		return this._object.getBypassDnd();
	}
	setBypassDnd (bypassDnd) {
		return this._object.setBypassDnd(bypassDnd);
	}
	getDescription () {
		return this._object.getDescription();
	}
	setDescription (description) {
		return this._object.setDescription(description);
	}
	getEnableLights () {
		return this._object.getEnableLights();
	}
	setEnableLights (enableLights) {
		return this._object.setEnableLights(enableLights);
	}
	getEnableVibration () {
		return this._object.getEnableVibration();
	}
	setEnableVibration (enableVibration) {
		return this._object.setEnableVibration(enableVibration);
	}
	getGroupId () {
		return this._object.getGroupId();
	}
	setGroupId (groupId) {
		return this._object.setGroupId(groupId);
	}
	getImportance () {
		return this._object.getImportance();
	}
	setImportance (importance) {
		return this._object.setImportance(importance);
	}
	getId () {
		return this._object.getId();
	}
	setId (id) {
		return this._object.setId(id);
	}
	getLightColor () {
		return this._object.getLightColor();
	}
	setLightColor (lightColor) {
		return this._object.setLightColor(lightColor);
	}
	getLockscreenVisibility () {
		return this._object.getLockscreenVisibility();
	}
	setLockscreenVisibility (lockscreenVisibility) {
		return this._object.setLockscreenVisibility(lockscreenVisibility);
	}
	getShowBadge () {
		return this._object.getShowBadge();
	}
	setShowBadge (showBadge) {
		return this._object.setShowBadge(showBadge);
	}
	getVibratePattern () {
		return this._object.getVibratePattern();
	}
	setVibratePattern (vibratePattern) {
		return this._object.setVibratePattern(vibratePattern);
	}

	// modules
};
Object.freeze(NotificationChannel);

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