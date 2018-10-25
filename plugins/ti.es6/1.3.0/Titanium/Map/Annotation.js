import { default as Window } from './../UI/Window';
import { default as View } from './../UI/View';

export default class Annotation {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.Map.Annotation')) {
			this._object = object;
		} else {
			this._object = Titanium.Map.createAnnotation(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.Map.Annotation.apiName;
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
	get animate () {
		return this._object.animate;
	}
	set animate (value) {
		this._object.animate = value;
	}
	get pinImage () {
		return this._object.pinImage;
	}
	set pinImage (value) {
		this._object.pinImage = value;
	}
	get canShowCallout () {
		return this._object.canShowCallout;
	}
	set canShowCallout (value) {
		this._object.canShowCallout = value;
	}
	get centerOffset () {
		return this._object.centerOffset;
	}
	set centerOffset (value) {
		this._object.centerOffset = value;
	}
	get customView () {
		return new View(this._object.customView);
	}
	set customView (value) {
		this._object.customView = value;
	}
	get draggable () {
		return this._object.draggable;
	}
	set draggable (value) {
		this._object.draggable = value;
	}
	get image () {
		return this._object.image;
	}
	set image (value) {
		this._object.image = value;
	}
	get latitude () {
		return this._object.latitude;
	}
	set latitude (value) {
		this._object.latitude = value;
	}
	get leftButton () {
		return this._object.leftButton;
	}
	set leftButton (value) {
		this._object.leftButton = value;
	}
	get leftView () {
		return new View(this._object.leftView);
	}
	set leftView (value) {
		this._object.leftView = value;
	}
	get longitude () {
		return this._object.longitude;
	}
	set longitude (value) {
		this._object.longitude = value;
	}
	get pincolor () {
		return this._object.pincolor;
	}
	set pincolor (value) {
		this._object.pincolor = value;
	}
	get rightButton () {
		return this._object.rightButton;
	}
	set rightButton (value) {
		this._object.rightButton = value;
	}
	get rightView () {
		return new View(this._object.rightView);
	}
	set rightView (value) {
		this._object.rightView = value;
	}
	get subtitle () {
		return this._object.subtitle;
	}
	set subtitle (value) {
		this._object.subtitle = value;
	}
	get subtitleid () {
		return this._object.subtitleid;
	}
	set subtitleid (value) {
		this._object.subtitleid = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get titleid () {
		return this._object.titleid;
	}
	set titleid (value) {
		this._object.titleid = value;
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
	getAnimate () {
		return this._object.getAnimate();
	}
	setAnimate (animate) {
		return this._object.setAnimate(animate);
	}
	getPinImage () {
		return this._object.getPinImage();
	}
	setPinImage (pinImage) {
		return this._object.setPinImage(pinImage);
	}
	getCanShowCallout () {
		return this._object.getCanShowCallout();
	}
	setCanShowCallout (canShowCallout) {
		return this._object.setCanShowCallout(canShowCallout);
	}
	getCenterOffset () {
		return this._object.getCenterOffset();
	}
	setCenterOffset (centerOffset) {
		return this._object.setCenterOffset(centerOffset);
	}
	getCustomView () {
		return new View(this._object.getCustomView());
	}
	setCustomView (customView) {
		customView = normalize(customView);
		return this._object.setCustomView(customView);
	}
	getDraggable () {
		return this._object.getDraggable();
	}
	setDraggable (draggable) {
		return this._object.setDraggable(draggable);
	}
	getImage () {
		return this._object.getImage();
	}
	setImage (image) {
		return this._object.setImage(image);
	}
	getLatitude () {
		return this._object.getLatitude();
	}
	setLatitude (latitude) {
		return this._object.setLatitude(latitude);
	}
	getLeftButton () {
		return this._object.getLeftButton();
	}
	setLeftButton (leftButton) {
		return this._object.setLeftButton(leftButton);
	}
	getLeftView () {
		return new View(this._object.getLeftView());
	}
	setLeftView (leftView) {
		leftView = normalize(leftView);
		return this._object.setLeftView(leftView);
	}
	getLongitude () {
		return this._object.getLongitude();
	}
	setLongitude (longitude) {
		return this._object.setLongitude(longitude);
	}
	getPincolor () {
		return this._object.getPincolor();
	}
	setPincolor (pincolor) {
		return this._object.setPincolor(pincolor);
	}
	getRightButton () {
		return this._object.getRightButton();
	}
	setRightButton (rightButton) {
		return this._object.setRightButton(rightButton);
	}
	getRightView () {
		return new View(this._object.getRightView());
	}
	setRightView (rightView) {
		rightView = normalize(rightView);
		return this._object.setRightView(rightView);
	}
	getSubtitle () {
		return this._object.getSubtitle();
	}
	setSubtitle (subtitle) {
		return this._object.setSubtitle(subtitle);
	}
	getSubtitleid () {
		return this._object.getSubtitleid();
	}
	setSubtitleid (subtitleid) {
		return this._object.setSubtitleid(subtitleid);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getTitleid () {
		return this._object.getTitleid();
	}
	setTitleid (titleid) {
		return this._object.setTitleid(titleid);
	}

	// modules
};
Object.freeze(Annotation);

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