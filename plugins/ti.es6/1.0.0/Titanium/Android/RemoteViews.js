import { default as Window } from './../UI/Window';

export default class RemoteViews {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.RemoteViews')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createRemoteViews(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.RemoteViews.apiName;
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
	get layoutId () {
		return this._object.layoutId;
	}
	set layoutId (value) {
		this._object.layoutId = value;
	}
	get packageName () {
		return this._object.packageName;
	}
	set packageName (value) {
		this._object.packageName = value;
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
	setBoolean (viewId, methodName, value) {
		return this._object.setBoolean(viewId, methodName, value);
	}
	setChronometer (viewId, base, format, started) {
		return this._object.setChronometer(viewId, base, format, started);
	}
	setDouble (viewId, methodName, value) {
		return this._object.setDouble(viewId, methodName, value);
	}
	setImageViewResource (viewId, srcId) {
		return this._object.setImageViewResource(viewId, srcId);
	}
	setImageViewUri (viewId, uri) {
		return this._object.setImageViewUri(viewId, uri);
	}
	setInt (viewId, methodName, value) {
		return this._object.setInt(viewId, methodName, value);
	}
	setOnClickPendingIntent (viewId, pendingIntent) {
		pendingIntent = normalize(pendingIntent);
		return this._object.setOnClickPendingIntent(viewId, pendingIntent);
	}
	setProgressBar (viewId, max, progress, indeterminate) {
		return this._object.setProgressBar(viewId, max, progress, indeterminate);
	}
	setString (viewId, methodName, value) {
		return this._object.setString(viewId, methodName, value);
	}
	setTextColor (viewId, color) {
		return this._object.setTextColor(viewId, color);
	}
	setTextViewText (viewId, text) {
		return this._object.setTextViewText(viewId, text);
	}
	setUri (viewId, methodName, value) {
		return this._object.setUri(viewId, methodName, value);
	}
	setViewVisibility (viewId, visibility) {
		return this._object.setViewVisibility(viewId, visibility);
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
	getLayoutId () {
		return this._object.getLayoutId();
	}
	setLayoutId (layoutId) {
		return this._object.setLayoutId(layoutId);
	}
	getPackageName () {
		return this._object.getPackageName();
	}
	setPackageName (packageName) {
		return this._object.setPackageName(packageName);
	}

	// modules
};
Object.freeze(RemoteViews);

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