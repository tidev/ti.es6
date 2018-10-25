import { default as Window } from './UI/Window';

export default class Locale {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Locale')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Locale.apiName;
	}
	static get currentCountry () {
		return Titanium.Locale.currentCountry;
	}
	static get currentLanguage () {
		return Titanium.Locale.currentLanguage;
	}
	static get currentLocale () {
		return Titanium.Locale.currentLocale;
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
	get currentCountry () {
		return this._object.currentCountry;
	}
	get currentLanguage () {
		return this._object.currentLanguage;
	}
	get currentLocale () {
		return this._object.currentLocale;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.Locale.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.Locale.bubbleParent = value;
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
	formatTelephoneNumber (number) {
		return this._object.formatTelephoneNumber(number);
	}
	getCurrencyCode (locale) {
		return this._object.getCurrencyCode(locale);
	}
	getCurrencySymbol (currencyCode) {
		return this._object.getCurrencySymbol(currencyCode);
	}
	getLocaleCurrencySymbol (locale) {
		return this._object.getLocaleCurrencySymbol(locale);
	}
	getString (key, hint) {
		return this._object.getString(key, hint);
	}
	setLanguage (language) {
		return this._object.setLanguage(language);
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
	getCurrentCountry () {
		return this._object.getCurrentCountry();
	}
	getCurrentLanguage () {
		return this._object.getCurrentLanguage();
	}
	getCurrentLocale () {
		return this._object.getCurrentLocale();
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
	static formatTelephoneNumber (number) {
		return this._object.formatTelephoneNumber(number);
	}
	static getCurrencyCode (locale) {
		return this._object.getCurrencyCode(locale);
	}
	static getCurrencySymbol (currencyCode) {
		return this._object.getCurrencySymbol(currencyCode);
	}
	static getLocaleCurrencySymbol (locale) {
		return this._object.getLocaleCurrencySymbol(locale);
	}
	static getString (key, hint) {
		return this._object.getString(key, hint);
	}
	static setLanguage (language) {
		return this._object.setLanguage(language);
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
	static getLifecycleContainer () {
		return new Window(this._object.getLifecycleContainer());
	}
	static setLifecycleContainer (lifecycleContainer) {
		lifecycleContainer = normalize(lifecycleContainer);
		return this._object.setLifecycleContainer(lifecycleContainer);
	}
	static getCurrentCountry () {
		return this._object.getCurrentCountry();
	}
	static getCurrentLanguage () {
		return this._object.getCurrentLanguage();
	}
	static getCurrentLocale () {
		return this._object.getCurrentLocale();
	}

	// modules
};
Object.freeze(Locale);

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