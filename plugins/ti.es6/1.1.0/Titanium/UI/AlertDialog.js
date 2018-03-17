import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as View } from './View';

export default class AlertDialog {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.AlertDialog')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createAlertDialog(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.AlertDialog.apiName;
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
	get canceledOnTouchOutside () {
		return this._object.canceledOnTouchOutside;
	}
	set canceledOnTouchOutside (value) {
		this._object.canceledOnTouchOutside = value;
	}
	get destructive () {
		return this._object.destructive;
	}
	set destructive (value) {
		this._object.destructive = value;
	}
	get hintText () {
		return this._object.hintText;
	}
	set hintText (value) {
		this._object.hintText = value;
	}
	get hinttextid () {
		return this._object.hinttextid;
	}
	set hinttextid (value) {
		this._object.hinttextid = value;
	}
	get keyboardType () {
		return this._object.keyboardType;
	}
	set keyboardType (value) {
		this._object.keyboardType = value;
	}
	get keyboardAppearance () {
		return this._object.keyboardAppearance;
	}
	set keyboardAppearance (value) {
		this._object.keyboardAppearance = value;
	}
	get loginPlaceholder () {
		return this._object.loginPlaceholder;
	}
	set loginPlaceholder (value) {
		this._object.loginPlaceholder = value;
	}
	get loginHintText () {
		return this._object.loginHintText;
	}
	set loginHintText (value) {
		this._object.loginHintText = value;
	}
	get loginhinttextid () {
		return this._object.loginhinttextid;
	}
	set loginhinttextid (value) {
		this._object.loginhinttextid = value;
	}
	get loginReturnKeyType () {
		return this._object.loginReturnKeyType;
	}
	set loginReturnKeyType (value) {
		this._object.loginReturnKeyType = value;
	}
	get loginValue () {
		return this._object.loginValue;
	}
	set loginValue (value) {
		this._object.loginValue = value;
	}
	get loginKeyboardType () {
		return this._object.loginKeyboardType;
	}
	set loginKeyboardType (value) {
		this._object.loginKeyboardType = value;
	}
	get messageid () {
		return this._object.messageid;
	}
	set messageid (value) {
		this._object.messageid = value;
	}
	get ok () {
		return this._object.ok;
	}
	set ok (value) {
		this._object.ok = value;
	}
	get okid () {
		return this._object.okid;
	}
	set okid (value) {
		this._object.okid = value;
	}
	get passwordPlaceholder () {
		return this._object.passwordPlaceholder;
	}
	set passwordPlaceholder (value) {
		this._object.passwordPlaceholder = value;
	}
	get passwordHintText () {
		return this._object.passwordHintText;
	}
	set passwordHintText (value) {
		this._object.passwordHintText = value;
	}
	get passwordhinttextid () {
		return this._object.passwordhinttextid;
	}
	set passwordhinttextid (value) {
		this._object.passwordhinttextid = value;
	}
	get passwordReturnKeyType () {
		return this._object.passwordReturnKeyType;
	}
	set passwordReturnKeyType (value) {
		this._object.passwordReturnKeyType = value;
	}
	get passwordValue () {
		return this._object.passwordValue;
	}
	set passwordValue (value) {
		this._object.passwordValue = value;
	}
	get passwordKeyboardType () {
		return this._object.passwordKeyboardType;
	}
	set passwordKeyboardType (value) {
		this._object.passwordKeyboardType = value;
	}
	get placeholder () {
		return this._object.placeholder;
	}
	set placeholder (value) {
		this._object.placeholder = value;
	}
	get persistent () {
		return this._object.persistent;
	}
	set persistent (value) {
		this._object.persistent = value;
	}
	get preferred () {
		return this._object.preferred;
	}
	set preferred (value) {
		this._object.preferred = value;
	}
	get returnKeyType () {
		return this._object.returnKeyType;
	}
	set returnKeyType (value) {
		this._object.returnKeyType = value;
	}
	get style () {
		return this._object.style;
	}
	set style (value) {
		this._object.style = value;
	}
	get value () {
		return this._object.value;
	}
	set value (value) {
		this._object.value = value;
	}
	get buttonNames () {
		return this._object.buttonNames;
	}
	set buttonNames (value) {
		this._object.buttonNames = value;
	}
	get cancel () {
		return this._object.cancel;
	}
	set cancel (value) {
		this._object.cancel = value;
	}
	get message () {
		return this._object.message;
	}
	set message (value) {
		this._object.message = value;
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
	getCanceledOnTouchOutside () {
		return this._object.getCanceledOnTouchOutside();
	}
	setCanceledOnTouchOutside (canceledOnTouchOutside) {
		return this._object.setCanceledOnTouchOutside(canceledOnTouchOutside);
	}
	getDestructive () {
		return this._object.getDestructive();
	}
	setDestructive (destructive) {
		return this._object.setDestructive(destructive);
	}
	getHintText () {
		return this._object.getHintText();
	}
	setHintText (hintText) {
		return this._object.setHintText(hintText);
	}
	getHinttextid () {
		return this._object.getHinttextid();
	}
	setHinttextid (hinttextid) {
		return this._object.setHinttextid(hinttextid);
	}
	getKeyboardType () {
		return this._object.getKeyboardType();
	}
	setKeyboardType (keyboardType) {
		return this._object.setKeyboardType(keyboardType);
	}
	getKeyboardAppearance () {
		return this._object.getKeyboardAppearance();
	}
	setKeyboardAppearance (keyboardAppearance) {
		return this._object.setKeyboardAppearance(keyboardAppearance);
	}
	getLoginPlaceholder () {
		return this._object.getLoginPlaceholder();
	}
	setLoginPlaceholder (loginPlaceholder) {
		return this._object.setLoginPlaceholder(loginPlaceholder);
	}
	getLoginHintText () {
		return this._object.getLoginHintText();
	}
	setLoginHintText (loginHintText) {
		return this._object.setLoginHintText(loginHintText);
	}
	getLoginhinttextid () {
		return this._object.getLoginhinttextid();
	}
	setLoginhinttextid (loginhinttextid) {
		return this._object.setLoginhinttextid(loginhinttextid);
	}
	getLoginReturnKeyType () {
		return this._object.getLoginReturnKeyType();
	}
	setLoginReturnKeyType (loginReturnKeyType) {
		return this._object.setLoginReturnKeyType(loginReturnKeyType);
	}
	getLoginValue () {
		return this._object.getLoginValue();
	}
	setLoginValue (loginValue) {
		return this._object.setLoginValue(loginValue);
	}
	getLoginKeyboardType () {
		return this._object.getLoginKeyboardType();
	}
	setLoginKeyboardType (loginKeyboardType) {
		return this._object.setLoginKeyboardType(loginKeyboardType);
	}
	getMessageid () {
		return this._object.getMessageid();
	}
	setMessageid (messageid) {
		return this._object.setMessageid(messageid);
	}
	getOk () {
		return this._object.getOk();
	}
	setOk (ok) {
		return this._object.setOk(ok);
	}
	getOkid () {
		return this._object.getOkid();
	}
	setOkid (okid) {
		return this._object.setOkid(okid);
	}
	getPasswordPlaceholder () {
		return this._object.getPasswordPlaceholder();
	}
	setPasswordPlaceholder (passwordPlaceholder) {
		return this._object.setPasswordPlaceholder(passwordPlaceholder);
	}
	getPasswordHintText () {
		return this._object.getPasswordHintText();
	}
	setPasswordHintText (passwordHintText) {
		return this._object.setPasswordHintText(passwordHintText);
	}
	getPasswordhinttextid () {
		return this._object.getPasswordhinttextid();
	}
	setPasswordhinttextid (passwordhinttextid) {
		return this._object.setPasswordhinttextid(passwordhinttextid);
	}
	getPasswordReturnKeyType () {
		return this._object.getPasswordReturnKeyType();
	}
	setPasswordReturnKeyType (passwordReturnKeyType) {
		return this._object.setPasswordReturnKeyType(passwordReturnKeyType);
	}
	getPasswordValue () {
		return this._object.getPasswordValue();
	}
	setPasswordValue (passwordValue) {
		return this._object.setPasswordValue(passwordValue);
	}
	getPasswordKeyboardType () {
		return this._object.getPasswordKeyboardType();
	}
	setPasswordKeyboardType (passwordKeyboardType) {
		return this._object.setPasswordKeyboardType(passwordKeyboardType);
	}
	getPlaceholder () {
		return this._object.getPlaceholder();
	}
	setPlaceholder (placeholder) {
		return this._object.setPlaceholder(placeholder);
	}
	getPersistent () {
		return this._object.getPersistent();
	}
	setPersistent (persistent) {
		return this._object.setPersistent(persistent);
	}
	getPreferred () {
		return this._object.getPreferred();
	}
	setPreferred (preferred) {
		return this._object.setPreferred(preferred);
	}
	getReturnKeyType () {
		return this._object.getReturnKeyType();
	}
	setReturnKeyType (returnKeyType) {
		return this._object.setReturnKeyType(returnKeyType);
	}
	getStyle () {
		return this._object.getStyle();
	}
	setStyle (style) {
		return this._object.setStyle(style);
	}
	getValue () {
		return this._object.getValue();
	}
	setValue (value) {
		return this._object.setValue(value);
	}
	getButtonNames () {
		return this._object.getButtonNames();
	}
	setButtonNames (buttonNames) {
		return this._object.setButtonNames(buttonNames);
	}
	getCancel () {
		return this._object.getCancel();
	}
	setCancel (cancel) {
		return this._object.setCancel(cancel);
	}
	getMessage () {
		return this._object.getMessage();
	}
	setMessage (message) {
		return this._object.setMessage(message);
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
Object.freeze(AlertDialog);

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