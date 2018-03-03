import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as View } from './View';

export default class OptionDialog {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.OptionDialog')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createOptionDialog(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.OptionDialog.apiName;
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
	get tintColor () {
		return this._object.tintColor;
	}
	set tintColor (value) {
		this._object.tintColor = value;
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
	get androidView () {
		return new View(this._object.androidView);
	}
	set androidView (value) {
		this._object.androidView = value;
	}
	get buttonNames () {
		return this._object.buttonNames;
	}
	set buttonNames (value) {
		this._object.buttonNames = value;
	}
	get opaquebackground () {
		return this._object.opaquebackground;
	}
	set opaquebackground (value) {
		this._object.opaquebackground = value;
	}
	get persistent () {
		return this._object.persistent;
	}
	set persistent (value) {
		this._object.persistent = value;
	}
	get titleid () {
		return this._object.titleid;
	}
	set titleid (value) {
		this._object.titleid = value;
	}
	get cancel () {
		return this._object.cancel;
	}
	set cancel (value) {
		this._object.cancel = value;
	}
	get destructive () {
		return this._object.destructive;
	}
	set destructive (value) {
		this._object.destructive = value;
	}
	get options () {
		return this._object.options;
	}
	set options (value) {
		this._object.options = value;
	}
	get selectedIndex () {
		return this._object.selectedIndex;
	}
	set selectedIndex (value) {
		this._object.selectedIndex = value;
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
	hide (params) {
		return this._object.hide(params);
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
	getTintColor () {
		return this._object.getTintColor();
	}
	setTintColor (tintColor) {
		return this._object.setTintColor(tintColor);
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
	getAndroidView () {
		return new View(this._object.getAndroidView());
	}
	setAndroidView (androidView) {
		androidView = normalize(androidView);
		return this._object.setAndroidView(androidView);
	}
	getButtonNames () {
		return this._object.getButtonNames();
	}
	setButtonNames (buttonNames) {
		return this._object.setButtonNames(buttonNames);
	}
	getOpaquebackground () {
		return this._object.getOpaquebackground();
	}
	setOpaquebackground (opaquebackground) {
		return this._object.setOpaquebackground(opaquebackground);
	}
	getPersistent () {
		return this._object.getPersistent();
	}
	setPersistent (persistent) {
		return this._object.setPersistent(persistent);
	}
	getTitleid () {
		return this._object.getTitleid();
	}
	setTitleid (titleid) {
		return this._object.setTitleid(titleid);
	}
	getCancel () {
		return this._object.getCancel();
	}
	setCancel (cancel) {
		return this._object.setCancel(cancel);
	}
	getDestructive () {
		return this._object.getDestructive();
	}
	setDestructive (destructive) {
		return this._object.setDestructive(destructive);
	}
	getOptions () {
		return this._object.getOptions();
	}
	setOptions (options) {
		return this._object.setOptions(options);
	}
	getSelectedIndex () {
		return this._object.getSelectedIndex();
	}
	setSelectedIndex (selectedIndex) {
		return this._object.setSelectedIndex(selectedIndex);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}

	// modules
};
Object.freeze(OptionDialog);

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