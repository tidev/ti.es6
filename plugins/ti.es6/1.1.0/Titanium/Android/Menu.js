import { default as Window } from './../UI/Window';
import { default as MenuItem } from './MenuItem';

export default class Menu {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.Menu')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.Menu.apiName;
	}
	static get items () {
		return Titanium.Android.Menu.items;
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
	get items () {
		return this._object.items;
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
	add (options) {
		options = normalize(options);
		return new MenuItem(this._object.add(options));
	}
	clear () {
		return this._object.clear();
	}
	close () {
		return this._object.close();
	}
	findItem (item) {
		return new MenuItem(this._object.findItem(item));
	}
	getItem (index) {
		return new MenuItem(this._object.getItem(index));
	}
	hasVisibleItems () {
		return this._object.hasVisibleItems();
	}
	removeGroup (groupId) {
		return this._object.removeGroup(groupId);
	}
	removeItem (itemId) {
		return this._object.removeItem(itemId);
	}
	setGroupEnabled (groupId, enabled) {
		return this._object.setGroupEnabled(groupId, enabled);
	}
	setGroupVisible (groupId, visible) {
		return this._object.setGroupVisible(groupId, visible);
	}
	size () {
		return this._object.size();
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
	getItems () {
		return this._object.getItems();
	}

	// modules
};
Object.freeze(Menu);

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