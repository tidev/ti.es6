import { default as Window } from './../UI/Window';

export default class ActionBar {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Android.ActionBar')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Android.ActionBar.apiName;
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
	get backgroundImage () {
		return this._object.backgroundImage;
	}
	set backgroundImage (value) {
		this._object.backgroundImage = value;
	}
	get displayHomeAsUp () {
		return this._object.displayHomeAsUp;
	}
	set displayHomeAsUp (value) {
		this._object.displayHomeAsUp = value;
	}
	get homeButtonEnabled () {
		return this._object.homeButtonEnabled;
	}
	set homeButtonEnabled (value) {
		this._object.homeButtonEnabled = value;
	}
	get icon () {
		return this._object.icon;
	}
	set icon (value) {
		this._object.icon = value;
	}
	get logo () {
		return this._object.logo;
	}
	set logo (value) {
		this._object.logo = value;
	}
	get navigationMode () {
		return this._object.navigationMode;
	}
	set navigationMode (value) {
		this._object.navigationMode = value;
	}
	get onHomeIconItemSelected () {
		return this._object.onHomeIconItemSelected;
	}
	set onHomeIconItemSelected (value) {
		this._object.onHomeIconItemSelected = value;
	}
	get subtitle () {
		return this._object.subtitle;
	}
	set subtitle (value) {
		this._object.subtitle = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
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
	hide () {
		return this._object.hide();
	}
	setDisplayShowHomeEnabled (show) {
		return this._object.setDisplayShowHomeEnabled(show);
	}
	setDisplayShowTitleEnabled (show) {
		return this._object.setDisplayShowTitleEnabled(show);
	}
	show () {
		return this._object.show();
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
	setBackgroundImage (backgroundImage) {
		return this._object.setBackgroundImage(backgroundImage);
	}
	setDisplayHomeAsUp (displayHomeAsUp) {
		return this._object.setDisplayHomeAsUp(displayHomeAsUp);
	}
	setHomeButtonEnabled (homeButtonEnabled) {
		return this._object.setHomeButtonEnabled(homeButtonEnabled);
	}
	setIcon (icon) {
		return this._object.setIcon(icon);
	}
	setLogo (logo) {
		return this._object.setLogo(logo);
	}
	getNavigationMode () {
		return this._object.getNavigationMode();
	}
	setNavigationMode (navigationMode) {
		return this._object.setNavigationMode(navigationMode);
	}
	setOnHomeIconItemSelected (onHomeIconItemSelected) {
		return this._object.setOnHomeIconItemSelected(onHomeIconItemSelected);
	}
	getSubtitle () {
		return this._object.getSubtitle();
	}
	setSubtitle (subtitle) {
		return this._object.setSubtitle(subtitle);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}

	// modules
};
Object.freeze(ActionBar);

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