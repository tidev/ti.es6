import { default as View } from './../View';

export default class Animator {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.Animator')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createAnimator(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.Animator.apiName;
	}
	static get running () {
		return Titanium.UI.iOS.Animator.running;
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
	get behaviors () {
		return this._object.behaviors;
	}
	set behaviors (value) {
		this._object.behaviors = value;
	}
	get referenceView () {
		return new View(this._object.referenceView);
	}
	set referenceView (value) {
		this._object.referenceView = value;
	}
	get running () {
		return this._object.running;
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
	addBehavior (behavior) {
		behavior = normalize(behavior);
		return this._object.addBehavior(behavior);
	}
	removeAllBehaviors () {
		return this._object.removeAllBehaviors();
	}
	removeBehavior (behavior) {
		behavior = normalize(behavior);
		return this._object.removeBehavior(behavior);
	}
	startAnimator () {
		return this._object.startAnimator();
	}
	stopAnimator () {
		return this._object.stopAnimator();
	}
	updateItemUsingCurrentState (item) {
		item = normalize(item);
		return this._object.updateItemUsingCurrentState(item);
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
	getBehaviors () {
		return this._object.getBehaviors();
	}
	setBehaviors (behaviors) {
		return this._object.setBehaviors(behaviors);
	}
	getReferenceView () {
		return new View(this._object.getReferenceView());
	}
	setReferenceView (referenceView) {
		referenceView = normalize(referenceView);
		return this._object.setReferenceView(referenceView);
	}
	getRunning () {
		return this._object.getRunning();
	}

	// modules
};
Object.freeze(Animator);

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