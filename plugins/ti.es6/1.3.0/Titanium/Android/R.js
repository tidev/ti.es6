import { default as Window } from './../UI/Window';

export default class R {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.R')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.R.apiName;
	}
	static get anim () {
		return Titanium.Android.R.anim;
	}
	static get array () {
		return Titanium.Android.R.array;
	}
	static get attr () {
		return Titanium.Android.R.attr;
	}
	static get color () {
		return Titanium.Android.R.color;
	}
	static get dimen () {
		return Titanium.Android.R.dimen;
	}
	static get drawable () {
		return Titanium.Android.R.drawable;
	}
	static get id () {
		return Titanium.Android.R.id;
	}
	static get integer () {
		return Titanium.Android.R.integer;
	}
	static get layout () {
		return Titanium.Android.R.layout;
	}
	static get string () {
		return Titanium.Android.R.string;
	}
	static get style () {
		return Titanium.Android.R.style;
	}
	static get styleable () {
		return Titanium.Android.R.styleable;
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
	get anim () {
		return this._object.anim;
	}
	get array () {
		return this._object.array;
	}
	get attr () {
		return this._object.attr;
	}
	get color () {
		return this._object.color;
	}
	get dimen () {
		return this._object.dimen;
	}
	get drawable () {
		return this._object.drawable;
	}
	get id () {
		return this._object.id;
	}
	get integer () {
		return this._object.integer;
	}
	get layout () {
		return this._object.layout;
	}
	get string () {
		return this._object.string;
	}
	get style () {
		return this._object.style;
	}
	get styleable () {
		return this._object.styleable;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Android.R.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Android.R.bubbleParent = value;
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

	// static methods
	static addEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.addEventListener(name, resolve));
		}
		return this._object.addEventListener(name, callback);
	}
	static applyProperties (props) {
		props = normalize(props);
		return this._object.applyProperties(props);
	}
	static fireEvent (name, event) {
		event = normalize(event);
		return this._object.fireEvent(name, event);
	}
	static removeEventListener (name, callback) {
		if (!callback) {
			return new Promise(resolve => this._object.removeEventListener(name, resolve));
		}
		return this._object.removeEventListener(name, callback);
	}
	static getApiName () {
		return this._object.getApiName();
	}
	static getBubbleParent () {
		return this._object.getBubbleParent();
	}
	static setBubbleParent (bubbleParent) {
		return this._object.setBubbleParent(bubbleParent);
	}

	// modules
};
Object.freeze(R);

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