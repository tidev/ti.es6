import { default as Window } from './../UI/Window';
import { default as ActionBar } from './ActionBar';
import { default as Intent } from './Intent';
import { default as Toolbar } from './../UI/Toolbar';

export default class Activity {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Activity')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Activity.apiName;
	}
	static get actionBar () {
		return new ActionBar(Titanium.Android.Activity.actionBar);
	}
	static get intent () {
		return new Intent(Titanium.Android.Activity.intent);
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
	get actionBar () {
		return new ActionBar(this._object.actionBar);
	}
	get intent () {
		return new Intent(this._object.intent);
	}
	get onCreate () {
		return this._object.onCreate;
	}
	set onCreate (value) {
		this._object.onCreate = value;
	}
	get onCreateOptionsMenu () {
		return this._object.onCreateOptionsMenu;
	}
	set onCreateOptionsMenu (value) {
		this._object.onCreateOptionsMenu = value;
	}
	get onDestroy () {
		return this._object.onDestroy;
	}
	set onDestroy (value) {
		this._object.onDestroy = value;
	}
	get onPause () {
		return this._object.onPause;
	}
	set onPause (value) {
		this._object.onPause = value;
	}
	get onPrepareOptionsMenu () {
		return this._object.onPrepareOptionsMenu;
	}
	set onPrepareOptionsMenu (value) {
		this._object.onPrepareOptionsMenu = value;
	}
	get onRestart () {
		return this._object.onRestart;
	}
	set onRestart (value) {
		this._object.onRestart = value;
	}
	get onResume () {
		return this._object.onResume;
	}
	set onResume (value) {
		this._object.onResume = value;
	}
	get onStart () {
		return this._object.onStart;
	}
	set onStart (value) {
		this._object.onStart = value;
	}
	get onStop () {
		return this._object.onStop;
	}
	set onStop (value) {
		this._object.onStop = value;
	}
	get requestedOrientation () {
		return this._object.requestedOrientation;
	}
	set requestedOrientation (value) {
		this._object.requestedOrientation = value;
	}
	get supportToolbar () {
		return new Toolbar(this._object.supportToolbar);
	}
	set supportToolbar (value) {
		this._object.supportToolbar = value;
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
	finish () {
		return this._object.finish();
	}
	getString (resourceId, format) {
		format = normalize(format);
		return this._object.getString(resourceId, format);
	}
	invalidateOptionsMenu () {
		return this._object.invalidateOptionsMenu();
	}
	setRequestedOrientation (orientation) {
		return this._object.setRequestedOrientation(orientation);
	}
	setResult (resultCode, intent) {
		intent = normalize(intent);
		return this._object.setResult(resultCode, intent);
	}
	setSupportActionBar (toolbar) {
		toolbar = normalize(toolbar);
		return this._object.setSupportActionBar(toolbar);
	}
	startActivity (intent) {
		intent = normalize(intent);
		return this._object.startActivity(intent);
	}
	startActivityForResult (intent, callback) {
		intent = normalize(intent);
		if (!callback) {
			return new Promise(resolve => this._object.startActivityForResult(intent, resolve));
		}
		return this._object.startActivityForResult(intent, callback);
	}
	openOptionsMenu () {
		return this._object.openOptionsMenu();
	}
	sendBroadcast (intent) {
		intent = normalize(intent);
		return this._object.sendBroadcast(intent);
	}
	sendBroadcastWithPermission (intent, receiverPermission) {
		intent = normalize(intent);
		return this._object.sendBroadcastWithPermission(intent, receiverPermission);
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
	getActionBar () {
		return new ActionBar(this._object.getActionBar());
	}
	getIntent () {
		return new Intent(this._object.getIntent());
	}
	getOnCreate () {
		return this._object.getOnCreate();
	}
	setOnCreate (onCreate) {
		return this._object.setOnCreate(onCreate);
	}
	getOnCreateOptionsMenu () {
		return this._object.getOnCreateOptionsMenu();
	}
	setOnCreateOptionsMenu (onCreateOptionsMenu) {
		return this._object.setOnCreateOptionsMenu(onCreateOptionsMenu);
	}
	getOnDestroy () {
		return this._object.getOnDestroy();
	}
	setOnDestroy (onDestroy) {
		return this._object.setOnDestroy(onDestroy);
	}
	getOnPause () {
		return this._object.getOnPause();
	}
	setOnPause (onPause) {
		return this._object.setOnPause(onPause);
	}
	getOnPrepareOptionsMenu () {
		return this._object.getOnPrepareOptionsMenu();
	}
	setOnPrepareOptionsMenu (onPrepareOptionsMenu) {
		return this._object.setOnPrepareOptionsMenu(onPrepareOptionsMenu);
	}
	getOnRestart () {
		return this._object.getOnRestart();
	}
	setOnRestart (onRestart) {
		return this._object.setOnRestart(onRestart);
	}
	getOnResume () {
		return this._object.getOnResume();
	}
	setOnResume (onResume) {
		return this._object.setOnResume(onResume);
	}
	getOnStart () {
		return this._object.getOnStart();
	}
	setOnStart (onStart) {
		return this._object.setOnStart(onStart);
	}
	getOnStop () {
		return this._object.getOnStop();
	}
	setOnStop (onStop) {
		return this._object.setOnStop(onStop);
	}
	setRequestedOrientation (requestedOrientation) {
		return this._object.setRequestedOrientation(requestedOrientation);
	}
	getSupportToolbar () {
		return new Toolbar(this._object.getSupportToolbar());
	}
	setSupportToolbar (supportToolbar) {
		supportToolbar = normalize(supportToolbar);
		return this._object.setSupportToolbar(supportToolbar);
	}

	// modules
};
Object.freeze(Activity);

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