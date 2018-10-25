import { default as Window } from './Window';
import { default as _2DMatrix } from './_2DMatrix';
import { default as View } from './View';

export default class Animation {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.Animation')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createAnimation(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.Animation.apiName;
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
	get anchorPoint () {
		return this._object.anchorPoint;
	}
	set anchorPoint (value) {
		this._object.anchorPoint = value;
	}
	get autoreverse () {
		return this._object.autoreverse;
	}
	set autoreverse (value) {
		this._object.autoreverse = value;
	}
	get backgroundColor () {
		return this._object.backgroundColor;
	}
	set backgroundColor (value) {
		this._object.backgroundColor = value;
	}
	get bottom () {
		return this._object.bottom;
	}
	set bottom (value) {
		this._object.bottom = value;
	}
	get center () {
		return this._object.center;
	}
	set center (value) {
		this._object.center = value;
	}
	get color () {
		return this._object.color;
	}
	set color (value) {
		this._object.color = value;
	}
	get curve () {
		return this._object.curve;
	}
	set curve (value) {
		this._object.curve = value;
	}
	get delay () {
		return this._object.delay;
	}
	set delay (value) {
		this._object.delay = value;
	}
	get duration () {
		return this._object.duration;
	}
	set duration (value) {
		this._object.duration = value;
	}
	get height () {
		return this._object.height;
	}
	set height (value) {
		this._object.height = value;
	}
	get left () {
		return this._object.left;
	}
	set left (value) {
		this._object.left = value;
	}
	get opacity () {
		return this._object.opacity;
	}
	set opacity (value) {
		this._object.opacity = value;
	}
	get opaque () {
		return this._object.opaque;
	}
	set opaque (value) {
		this._object.opaque = value;
	}
	get repeat () {
		return this._object.repeat;
	}
	set repeat (value) {
		this._object.repeat = value;
	}
	get right () {
		return this._object.right;
	}
	set right (value) {
		this._object.right = value;
	}
	get top () {
		return this._object.top;
	}
	set top (value) {
		this._object.top = value;
	}
	get transform () {
		return new _2DMatrix(this._object.transform);
	}
	set transform (value) {
		this._object.transform = value;
	}
	get transition () {
		return this._object.transition;
	}
	set transition (value) {
		this._object.transition = value;
	}
	get view () {
		return new View(this._object.view);
	}
	set view (value) {
		this._object.view = value;
	}
	get visible () {
		return this._object.visible;
	}
	set visible (value) {
		this._object.visible = value;
	}
	get width () {
		return this._object.width;
	}
	set width (value) {
		this._object.width = value;
	}
	get zIndex () {
		return this._object.zIndex;
	}
	set zIndex (value) {
		this._object.zIndex = value;
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
	getAnchorPoint () {
		return this._object.getAnchorPoint();
	}
	setAnchorPoint (anchorPoint) {
		return this._object.setAnchorPoint(anchorPoint);
	}
	getAutoreverse () {
		return this._object.getAutoreverse();
	}
	setAutoreverse (autoreverse) {
		return this._object.setAutoreverse(autoreverse);
	}
	getBackgroundColor () {
		return this._object.getBackgroundColor();
	}
	setBackgroundColor (backgroundColor) {
		return this._object.setBackgroundColor(backgroundColor);
	}
	getBottom () {
		return this._object.getBottom();
	}
	setBottom (bottom) {
		return this._object.setBottom(bottom);
	}
	getCenter () {
		return this._object.getCenter();
	}
	setCenter (center) {
		center = normalize(center);
		return this._object.setCenter(center);
	}
	getColor () {
		return this._object.getColor();
	}
	setColor (color) {
		return this._object.setColor(color);
	}
	getCurve () {
		return this._object.getCurve();
	}
	setCurve (curve) {
		return this._object.setCurve(curve);
	}
	getDelay () {
		return this._object.getDelay();
	}
	setDelay (delay) {
		return this._object.setDelay(delay);
	}
	getDuration () {
		return this._object.getDuration();
	}
	setDuration (duration) {
		return this._object.setDuration(duration);
	}
	getHeight () {
		return this._object.getHeight();
	}
	setHeight (height) {
		return this._object.setHeight(height);
	}
	getLeft () {
		return this._object.getLeft();
	}
	setLeft (left) {
		return this._object.setLeft(left);
	}
	getOpacity () {
		return this._object.getOpacity();
	}
	setOpacity (opacity) {
		return this._object.setOpacity(opacity);
	}
	getOpaque () {
		return this._object.getOpaque();
	}
	setOpaque (opaque) {
		return this._object.setOpaque(opaque);
	}
	getRepeat () {
		return this._object.getRepeat();
	}
	setRepeat (repeat) {
		return this._object.setRepeat(repeat);
	}
	getRight () {
		return this._object.getRight();
	}
	setRight (right) {
		return this._object.setRight(right);
	}
	getTop () {
		return this._object.getTop();
	}
	setTop (top) {
		return this._object.setTop(top);
	}
	getTransform () {
		return new _2DMatrix(this._object.getTransform());
	}
	setTransform (transform) {
		transform = normalize(transform);
		return this._object.setTransform(transform);
	}
	getTransition () {
		return this._object.getTransition();
	}
	setTransition (transition) {
		return this._object.setTransition(transition);
	}
	getView () {
		return new View(this._object.getView());
	}
	setView (view) {
		view = normalize(view);
		return this._object.setView(view);
	}
	getVisible () {
		return this._object.getVisible();
	}
	setVisible (visible) {
		return this._object.setVisible(visible);
	}
	getWidth () {
		return this._object.getWidth();
	}
	setWidth (width) {
		return this._object.setWidth(width);
	}
	getZIndex () {
		return this._object.getZIndex();
	}
	setZIndex (zIndex) {
		return this._object.setZIndex(zIndex);
	}

	// modules
};
Object.freeze(Animation);

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