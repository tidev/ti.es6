import { default as View } from './../View';

export default class Popover {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iPad.Popover')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iPad.createPopover(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iPad.Popover.apiName;
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
	get backgroundColor () {
		return this._object.backgroundColor;
	}
	set backgroundColor (value) {
		this._object.backgroundColor = value;
	}
	get width () {
		return this._object.width;
	}
	set width (value) {
		this._object.width = value;
	}
	get height () {
		return this._object.height;
	}
	set height (value) {
		this._object.height = value;
	}
	get arrowDirection () {
		return this._object.arrowDirection;
	}
	set arrowDirection (value) {
		this._object.arrowDirection = value;
	}
	get contentView () {
		return new View(this._object.contentView);
	}
	set contentView (value) {
		this._object.contentView = value;
	}
	get leftNavButton () {
		return this._object.leftNavButton;
	}
	set leftNavButton (value) {
		this._object.leftNavButton = value;
	}
	get passthroughViews () {
		return this._object.passthroughViews;
	}
	set passthroughViews (value) {
		this._object.passthroughViews = value;
	}
	get rightNavButton () {
		return this._object.rightNavButton;
	}
	set rightNavButton (value) {
		this._object.rightNavButton = value;
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
	finishLayout () {
		return this._object.finishLayout();
	}
	startLayout () {
		return this._object.startLayout();
	}
	updateLayout (params) {
		params = normalize(params);
		return this._object.updateLayout(params);
	}
	remove (view) {
		view = normalize(view);
		return this._object.remove(view);
	}
	add (view) {
		view = normalize(view);
		return this._object.add(view);
	}
	hide (options) {
		return this._object.hide(options);
	}
	show (params) {
		return this._object.show(params);
	}
	getViewById (id) {
		return new View(this._object.getViewById(id));
	}
	insertAt (params) {
		params = normalize(params);
		return this._object.insertAt(params);
	}
	replaceAt (params) {
		params = normalize(params);
		return this._object.replaceAt(params);
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
	getBackgroundColor () {
		return this._object.getBackgroundColor();
	}
	setBackgroundColor (backgroundColor) {
		return this._object.setBackgroundColor(backgroundColor);
	}
	getWidth () {
		return this._object.getWidth();
	}
	setWidth (width) {
		return this._object.setWidth(width);
	}
	getHeight () {
		return this._object.getHeight();
	}
	setHeight (height) {
		return this._object.setHeight(height);
	}
	getArrowDirection () {
		return this._object.getArrowDirection();
	}
	setArrowDirection (arrowDirection) {
		return this._object.setArrowDirection(arrowDirection);
	}
	getContentView () {
		return new View(this._object.getContentView());
	}
	setContentView (contentView) {
		contentView = normalize(contentView);
		return this._object.setContentView(contentView);
	}
	getLeftNavButton () {
		return this._object.getLeftNavButton();
	}
	setLeftNavButton (leftNavButton) {
		leftNavButton = normalize(leftNavButton);
		return this._object.setLeftNavButton(leftNavButton);
	}
	getPassthroughViews () {
		return this._object.getPassthroughViews();
	}
	setPassthroughViews (passthroughViews) {
		return this._object.setPassthroughViews(passthroughViews);
	}
	getRightNavButton () {
		return this._object.getRightNavButton();
	}
	setRightNavButton (rightNavButton) {
		rightNavButton = normalize(rightNavButton);
		return this._object.setRightNavButton(rightNavButton);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}

	// modules
};
Object.freeze(Popover);

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