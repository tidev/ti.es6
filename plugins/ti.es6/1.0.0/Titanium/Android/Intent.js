import { default as Window } from './../UI/Window';
import { default as Blob } from './../Blob';

export default class Intent {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Intent')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createIntent(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Intent.apiName;
	}
	static get data () {
		return Titanium.Android.Intent.data;
	}
	static get type () {
		return Titanium.Android.Intent.type;
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
	get action () {
		return this._object.action;
	}
	set action (value) {
		this._object.action = value;
	}
	get className () {
		return this._object.className;
	}
	set className (value) {
		this._object.className = value;
	}
	get data () {
		return this._object.data;
	}
	get flags () {
		return this._object.flags;
	}
	set flags (value) {
		this._object.flags = value;
	}
	get packageName () {
		return this._object.packageName;
	}
	set packageName (value) {
		this._object.packageName = value;
	}
	get type () {
		return this._object.type;
	}
	get url () {
		return this._object.url;
	}
	set url (value) {
		this._object.url = value;
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
	addCategory (name) {
		return this._object.addCategory(name);
	}
	addFlags (flags) {
		return this._object.addFlags(flags);
	}
	getBlobExtra (name) {
		return new Blob(this._object.getBlobExtra(name));
	}
	getBooleanExtra (name) {
		return this._object.getBooleanExtra(name);
	}
	getData () {
		return this._object.getData();
	}
	getDoubleExtra (name) {
		return this._object.getDoubleExtra(name);
	}
	getIntExtra (name) {
		return this._object.getIntExtra(name);
	}
	getLongExtra (name) {
		return this._object.getLongExtra(name);
	}
	getStringExtra (name) {
		return this._object.getStringExtra(name);
	}
	hasExtra (name) {
		return this._object.hasExtra(name);
	}
	putExtra (name, value) {
		value = normalize(value);
		return this._object.putExtra(name, value);
	}
	putExtraUri (name, value) {
		value = normalize(value);
		return this._object.putExtraUri(name, value);
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
	getAction () {
		return this._object.getAction();
	}
	setAction (action) {
		return this._object.setAction(action);
	}
	getClassName () {
		return this._object.getClassName();
	}
	setClassName (className) {
		return this._object.setClassName(className);
	}
	getData () {
		return this._object.getData();
	}
	getFlags () {
		return this._object.getFlags();
	}
	setFlags (flags) {
		return this._object.setFlags(flags);
	}
	getPackageName () {
		return this._object.getPackageName();
	}
	setPackageName (packageName) {
		return this._object.setPackageName(packageName);
	}
	getType () {
		return this._object.getType();
	}
	getUrl () {
		return this._object.getUrl();
	}
	setUrl (url) {
		return this._object.setUrl(url);
	}

	// modules
};
Object.freeze(Intent);

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