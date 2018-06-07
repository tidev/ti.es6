import { default as Window } from './../UI/Window';
import { default as View } from './../UI/View';

export default class MenuItem {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.MenuItem')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.MenuItem.apiName;
	}
	static get actionViewExpanded () {
		return Titanium.Android.MenuItem.actionViewExpanded;
	}
	static get groupId () {
		return Titanium.Android.MenuItem.groupId;
	}
	static get itemId () {
		return Titanium.Android.MenuItem.itemId;
	}
	static get order () {
		return Titanium.Android.MenuItem.order;
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
	get actionView () {
		return new View(this._object.actionView);
	}
	set actionView (value) {
		this._object.actionView = value;
	}
	get actionViewExpanded () {
		return this._object.actionViewExpanded;
	}
	get checkable () {
		return this._object.checkable;
	}
	set checkable (value) {
		this._object.checkable = value;
	}
	get checked () {
		return this._object.checked;
	}
	set checked (value) {
		this._object.checked = value;
	}
	get enabled () {
		return this._object.enabled;
	}
	set enabled (value) {
		this._object.enabled = value;
	}
	get groupId () {
		return this._object.groupId;
	}
	get icon () {
		return this._object.icon;
	}
	set icon (value) {
		this._object.icon = value;
	}
	get itemId () {
		return this._object.itemId;
	}
	get order () {
		return this._object.order;
	}
	get showAsAction () {
		return this._object.showAsAction;
	}
	set showAsAction (value) {
		this._object.showAsAction = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get titleCondensed () {
		return this._object.titleCondensed;
	}
	set titleCondensed (value) {
		this._object.titleCondensed = value;
	}
	get visible () {
		return this._object.visible;
	}
	set visible (value) {
		this._object.visible = value;
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
	collapseActionView () {
		return this._object.collapseActionView();
	}
	expandActionView () {
		return this._object.expandActionView();
	}
	isActionViewExpanded () {
		return this._object.isActionViewExpanded();
	}
	isCheckable () {
		return this._object.isCheckable();
	}
	isChecked () {
		return this._object.isChecked();
	}
	isEnabled () {
		return this._object.isEnabled();
	}
	isVisible () {
		return this._object.isVisible();
	}
	setCheckable (checkable) {
		return this._object.setCheckable(checkable);
	}
	setChecked (enabled) {
		return this._object.setChecked(enabled);
	}
	setEnabled (enabled) {
		return this._object.setEnabled(enabled);
	}
	setVisible (visible) {
		return this._object.setVisible(visible);
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
	getActionView () {
		return new View(this._object.getActionView());
	}
	setActionView (actionView) {
		actionView = normalize(actionView);
		return this._object.setActionView(actionView);
	}
	getGroupId () {
		return this._object.getGroupId();
	}
	setIcon (icon) {
		return this._object.setIcon(icon);
	}
	getItemId () {
		return this._object.getItemId();
	}
	getOrder () {
		return this._object.getOrder();
	}
	setShowAsAction (showAsAction) {
		return this._object.setShowAsAction(showAsAction);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getTitleCondensed () {
		return this._object.getTitleCondensed();
	}
	setTitleCondensed (titleCondensed) {
		return this._object.setTitleCondensed(titleCondensed);
	}

	// modules
};
Object.freeze(MenuItem);

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