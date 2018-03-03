import { default as Window } from './UI/Window';
export { default as Annotation } from './Map/Annotation';
import { default as Annotation } from './Map/Annotation';
export { default as View } from './Map/View';
import { default as View } from './Map/View';

export default class Map {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Map')) {
			this._object = object;
		} else {
			this._object = undefined;
		}
	}

	// constants
	static get apiName () {
		return Titanium.Map.apiName;
	}
	static get ANNOTATION_DRAG_STATE_NONE () {
		return Titanium.Map.ANNOTATION_DRAG_STATE_NONE;
	}
	static get ANNOTATION_DRAG_STATE_DRAG () {
		return Titanium.Map.ANNOTATION_DRAG_STATE_DRAG;
	}
	static get ANNOTATION_DRAG_STATE_CANCEL () {
		return Titanium.Map.ANNOTATION_DRAG_STATE_CANCEL;
	}
	static get STANDARD_TYPE () {
		return Titanium.Map.STANDARD_TYPE;
	}
	static get HYBRID_TYPE () {
		return Titanium.Map.HYBRID_TYPE;
	}
	static get SATELLITE_TYPE () {
		return Titanium.Map.SATELLITE_TYPE;
	}
	static get ANNOTATION_DRAG_STATE_END () {
		return Titanium.Map.ANNOTATION_DRAG_STATE_END;
	}
	static get ANNOTATION_DRAG_STATE_START () {
		return Titanium.Map.ANNOTATION_DRAG_STATE_START;
	}
	static get ANNOTATION_GREEN () {
		return Titanium.Map.ANNOTATION_GREEN;
	}
	static get ANNOTATION_PURPLE () {
		return Titanium.Map.ANNOTATION_PURPLE;
	}
	static get ANNOTATION_RED () {
		return Titanium.Map.ANNOTATION_RED;
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
	get ANNOTATION_DRAG_STATE_NONE () {
		return this._object.ANNOTATION_DRAG_STATE_NONE;
	}
	get ANNOTATION_DRAG_STATE_DRAG () {
		return this._object.ANNOTATION_DRAG_STATE_DRAG;
	}
	get ANNOTATION_DRAG_STATE_CANCEL () {
		return this._object.ANNOTATION_DRAG_STATE_CANCEL;
	}
	get STANDARD_TYPE () {
		return this._object.STANDARD_TYPE;
	}
	get HYBRID_TYPE () {
		return this._object.HYBRID_TYPE;
	}
	get SATELLITE_TYPE () {
		return this._object.SATELLITE_TYPE;
	}
	get ANNOTATION_DRAG_STATE_END () {
		return this._object.ANNOTATION_DRAG_STATE_END;
	}
	get ANNOTATION_DRAG_STATE_START () {
		return this._object.ANNOTATION_DRAG_STATE_START;
	}
	get ANNOTATION_GREEN () {
		return this._object.ANNOTATION_GREEN;
	}
	get ANNOTATION_PURPLE () {
		return this._object.ANNOTATION_PURPLE;
	}
	get ANNOTATION_RED () {
		return this._object.ANNOTATION_RED;
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
	createAnnotation (parameters) {
		parameters = normalize(parameters);
		return new Annotation(this._object.createAnnotation(parameters));
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
	createView (parameters) {
		parameters = normalize(parameters);
		return new View(this._object.createView(parameters));
	}

	// modules
	static get Annotation () {
		return Annotation;
	}
	static get View () {
		return View;
	}
};
Object.freeze(Map);

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