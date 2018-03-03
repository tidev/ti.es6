export { default as DocumentViewer } from './iPad/DocumentViewer';
import { default as DocumentViewer } from './iPad/DocumentViewer';
export { default as Popover } from './iPad/Popover';
import { default as Popover } from './iPad/Popover';
export { default as SplitWindow } from './iPad/SplitWindow';
import { default as SplitWindow } from './iPad/SplitWindow';

export default class iPad {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPad')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPad.apiName;
	}
	static get POPOVER_ARROW_DIRECTION_ANY () {
		return Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_ANY;
	}
	static get POPOVER_ARROW_DIRECTION_DOWN () {
		return Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_DOWN;
	}
	static get POPOVER_ARROW_DIRECTION_LEFT () {
		return Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_LEFT;
	}
	static get POPOVER_ARROW_DIRECTION_RIGHT () {
		return Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_RIGHT;
	}
	static get POPOVER_ARROW_DIRECTION_UNKNOWN () {
		return Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UNKNOWN;
	}
	static get POPOVER_ARROW_DIRECTION_UP () {
		return Titanium.UI.iPad.POPOVER_ARROW_DIRECTION_UP;
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
	get POPOVER_ARROW_DIRECTION_ANY () {
		return this._object.POPOVER_ARROW_DIRECTION_ANY;
	}
	get POPOVER_ARROW_DIRECTION_DOWN () {
		return this._object.POPOVER_ARROW_DIRECTION_DOWN;
	}
	get POPOVER_ARROW_DIRECTION_LEFT () {
		return this._object.POPOVER_ARROW_DIRECTION_LEFT;
	}
	get POPOVER_ARROW_DIRECTION_RIGHT () {
		return this._object.POPOVER_ARROW_DIRECTION_RIGHT;
	}
	get POPOVER_ARROW_DIRECTION_UNKNOWN () {
		return this._object.POPOVER_ARROW_DIRECTION_UNKNOWN;
	}
	get POPOVER_ARROW_DIRECTION_UP () {
		return this._object.POPOVER_ARROW_DIRECTION_UP;
	}

	// static properties
	static get bubbleParent () {
		return Titanium.UI.iPad.bubbleParent;
	}
	static set bubbleParent (value) {
		Titanium.UI.iPad.bubbleParent = value;
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
	createDocumentViewer (parameters) {
		parameters = normalize(parameters);
		return new DocumentViewer(this._object.createDocumentViewer(parameters));
	}
	createSplitWindow (parameters) {
		parameters = normalize(parameters);
		return new SplitWindow(this._object.createSplitWindow(parameters));
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
	static get DocumentViewer () {
		return DocumentViewer;
	}
	static get Popover () {
		return Popover;
	}
	static get SplitWindow () {
		return SplitWindow;
	}
};
Object.freeze(iPad);

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