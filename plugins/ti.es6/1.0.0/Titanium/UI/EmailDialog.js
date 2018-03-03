import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as View } from './View';

export default class EmailDialog {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.EmailDialog')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createEmailDialog(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.EmailDialog.apiName;
	}
	static get CANCELLED () {
		return Titanium.UI.EmailDialog.CANCELLED;
	}
	static get FAILED () {
		return Titanium.UI.EmailDialog.FAILED;
	}
	static get SAVED () {
		return Titanium.UI.EmailDialog.SAVED;
	}
	static get SENT () {
		return Titanium.UI.EmailDialog.SENT;
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
	get elevation () {
		return this._object.elevation;
	}
	set elevation (value) {
		this._object.elevation = value;
	}
	get hiddenBehavior () {
		return this._object.hiddenBehavior;
	}
	set hiddenBehavior (value) {
		this._object.hiddenBehavior = value;
	}
	get previewContext () {
		return new PreviewContext(this._object.previewContext);
	}
	set previewContext (value) {
		this._object.previewContext = value;
	}
	get rotation () {
		return this._object.rotation;
	}
	set rotation (value) {
		this._object.rotation = value;
	}
	get rotationX () {
		return this._object.rotationX;
	}
	set rotationX (value) {
		this._object.rotationX = value;
	}
	get rotationY () {
		return this._object.rotationY;
	}
	set rotationY (value) {
		this._object.rotationY = value;
	}
	get scaleX () {
		return this._object.scaleX;
	}
	set scaleX (value) {
		this._object.scaleX = value;
	}
	get scaleY () {
		return this._object.scaleY;
	}
	set scaleY (value) {
		this._object.scaleY = value;
	}
	get touchFeedback () {
		return this._object.touchFeedback;
	}
	set touchFeedback (value) {
		this._object.touchFeedback = value;
	}
	get touchFeedbackColor () {
		return this._object.touchFeedbackColor;
	}
	set touchFeedbackColor (value) {
		this._object.touchFeedbackColor = value;
	}
	get translationX () {
		return this._object.translationX;
	}
	set translationX (value) {
		this._object.translationX = value;
	}
	get translationY () {
		return this._object.translationY;
	}
	set translationY (value) {
		this._object.translationY = value;
	}
	get translationZ () {
		return this._object.translationZ;
	}
	set translationZ (value) {
		this._object.translationZ = value;
	}
	get transitionName () {
		return this._object.transitionName;
	}
	set transitionName (value) {
		this._object.transitionName = value;
	}
	get barColor () {
		return this._object.barColor;
	}
	set barColor (value) {
		this._object.barColor = value;
	}
	get CANCELLED () {
		return this._object.CANCELLED;
	}
	get FAILED () {
		return this._object.FAILED;
	}
	get SAVED () {
		return this._object.SAVED;
	}
	get SENT () {
		return this._object.SENT;
	}
	get bccRecipients () {
		return this._object.bccRecipients;
	}
	set bccRecipients (value) {
		this._object.bccRecipients = value;
	}
	get ccRecipients () {
		return this._object.ccRecipients;
	}
	set ccRecipients (value) {
		this._object.ccRecipients = value;
	}
	get html () {
		return this._object.html;
	}
	set html (value) {
		this._object.html = value;
	}
	get messageBody () {
		return this._object.messageBody;
	}
	set messageBody (value) {
		this._object.messageBody = value;
	}
	get subject () {
		return this._object.subject;
	}
	set subject (value) {
		this._object.subject = value;
	}
	get toRecipients () {
		return this._object.toRecipients;
	}
	set toRecipients (value) {
		this._object.toRecipients = value;
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
	hide (options) {
		return this._object.hide(options);
	}
	show (options) {
		return this._object.show(options);
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
	addAttachment (attachment) {
		attachment = normalize(attachment);
		return this._object.addAttachment(attachment);
	}
	isSupported () {
		return this._object.isSupported();
	}
	open (properties) {
		properties = normalize(properties);
		return this._object.open(properties);
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
	getElevation () {
		return this._object.getElevation();
	}
	setElevation (elevation) {
		return this._object.setElevation(elevation);
	}
	getHiddenBehavior () {
		return this._object.getHiddenBehavior();
	}
	setHiddenBehavior (hiddenBehavior) {
		return this._object.setHiddenBehavior(hiddenBehavior);
	}
	getPreviewContext () {
		return new PreviewContext(this._object.getPreviewContext());
	}
	setPreviewContext (previewContext) {
		previewContext = normalize(previewContext);
		return this._object.setPreviewContext(previewContext);
	}
	getRotation () {
		return this._object.getRotation();
	}
	setRotation (rotation) {
		return this._object.setRotation(rotation);
	}
	getRotationX () {
		return this._object.getRotationX();
	}
	setRotationX (rotationX) {
		return this._object.setRotationX(rotationX);
	}
	getRotationY () {
		return this._object.getRotationY();
	}
	setRotationY (rotationY) {
		return this._object.setRotationY(rotationY);
	}
	getScaleX () {
		return this._object.getScaleX();
	}
	setScaleX (scaleX) {
		return this._object.setScaleX(scaleX);
	}
	getScaleY () {
		return this._object.getScaleY();
	}
	setScaleY (scaleY) {
		return this._object.setScaleY(scaleY);
	}
	getTouchFeedback () {
		return this._object.getTouchFeedback();
	}
	setTouchFeedback (touchFeedback) {
		return this._object.setTouchFeedback(touchFeedback);
	}
	getTouchFeedbackColor () {
		return this._object.getTouchFeedbackColor();
	}
	setTouchFeedbackColor (touchFeedbackColor) {
		return this._object.setTouchFeedbackColor(touchFeedbackColor);
	}
	getTranslationX () {
		return this._object.getTranslationX();
	}
	setTranslationX (translationX) {
		return this._object.setTranslationX(translationX);
	}
	getTranslationY () {
		return this._object.getTranslationY();
	}
	setTranslationY (translationY) {
		return this._object.setTranslationY(translationY);
	}
	getTranslationZ () {
		return this._object.getTranslationZ();
	}
	setTranslationZ (translationZ) {
		return this._object.setTranslationZ(translationZ);
	}
	getTransitionName () {
		return this._object.getTransitionName();
	}
	setTransitionName (transitionName) {
		return this._object.setTransitionName(transitionName);
	}
	getBarColor () {
		return this._object.getBarColor();
	}
	setBarColor (barColor) {
		return this._object.setBarColor(barColor);
	}
	getBccRecipients () {
		return this._object.getBccRecipients();
	}
	setBccRecipients (bccRecipients) {
		return this._object.setBccRecipients(bccRecipients);
	}
	getCcRecipients () {
		return this._object.getCcRecipients();
	}
	setCcRecipients (ccRecipients) {
		return this._object.setCcRecipients(ccRecipients);
	}
	getHtml () {
		return this._object.getHtml();
	}
	setHtml (html) {
		return this._object.setHtml(html);
	}
	getMessageBody () {
		return this._object.getMessageBody();
	}
	setMessageBody (messageBody) {
		return this._object.setMessageBody(messageBody);
	}
	getSubject () {
		return this._object.getSubject();
	}
	setSubject (subject) {
		return this._object.setSubject(subject);
	}
	getToRecipients () {
		return this._object.getToRecipients();
	}
	setToRecipients (toRecipients) {
		return this._object.setToRecipients(toRecipients);
	}

	// modules
};
Object.freeze(EmailDialog);

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