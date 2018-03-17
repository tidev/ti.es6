import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as _2DMatrix } from './_2DMatrix';
import { default as AttributedString } from './AttributedString';
import { default as Blob } from './../Blob';
import { default as View } from './View';

export default class TextArea {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.TextArea')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createTextArea(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.TextArea.apiName;
	}
	static get animatedCenter () {
		return Titanium.UI.TextArea.animatedCenter;
	}
	static get rect () {
		return Titanium.UI.TextArea.rect;
	}
	static get size () {
		return Titanium.UI.TextArea.size;
	}
	static get children () {
		return Titanium.UI.TextArea.children;
	}
	static get selection () {
		return Titanium.UI.TextArea.selection;
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
	get accessibilityHidden () {
		return this._object.accessibilityHidden;
	}
	set accessibilityHidden (value) {
		this._object.accessibilityHidden = value;
	}
	get accessibilityHint () {
		return this._object.accessibilityHint;
	}
	set accessibilityHint (value) {
		this._object.accessibilityHint = value;
	}
	get accessibilityLabel () {
		return this._object.accessibilityLabel;
	}
	set accessibilityLabel (value) {
		this._object.accessibilityLabel = value;
	}
	get accessibilityValue () {
		return this._object.accessibilityValue;
	}
	set accessibilityValue (value) {
		this._object.accessibilityValue = value;
	}
	get anchorPoint () {
		return this._object.anchorPoint;
	}
	set anchorPoint (value) {
		this._object.anchorPoint = value;
	}
	get animatedCenter () {
		return this._object.animatedCenter;
	}
	get backgroundRepeat () {
		return this._object.backgroundRepeat;
	}
	set backgroundRepeat (value) {
		this._object.backgroundRepeat = value;
	}
	get backgroundLeftCap () {
		return this._object.backgroundLeftCap;
	}
	set backgroundLeftCap (value) {
		this._object.backgroundLeftCap = value;
	}
	get backgroundTopCap () {
		return this._object.backgroundTopCap;
	}
	set backgroundTopCap (value) {
		this._object.backgroundTopCap = value;
	}
	get borderColor () {
		return this._object.borderColor;
	}
	set borderColor (value) {
		this._object.borderColor = value;
	}
	get clipMode () {
		return this._object.clipMode;
	}
	set clipMode (value) {
		this._object.clipMode = value;
	}
	get elevation () {
		return this._object.elevation;
	}
	set elevation (value) {
		this._object.elevation = value;
	}
	get focusable () {
		return this._object.focusable;
	}
	set focusable (value) {
		this._object.focusable = value;
	}
	get hiddenBehavior () {
		return this._object.hiddenBehavior;
	}
	set hiddenBehavior (value) {
		this._object.hiddenBehavior = value;
	}
	get overrideCurrentAnimation () {
		return this._object.overrideCurrentAnimation;
	}
	set overrideCurrentAnimation (value) {
		this._object.overrideCurrentAnimation = value;
	}
	get pullBackgroundColor () {
		return this._object.pullBackgroundColor;
	}
	set pullBackgroundColor (value) {
		this._object.pullBackgroundColor = value;
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
	get softKeyboardOnFocus () {
		return this._object.softKeyboardOnFocus;
	}
	set softKeyboardOnFocus (value) {
		this._object.softKeyboardOnFocus = value;
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
	get transform () {
		return new _2DMatrix(this._object.transform);
	}
	set transform (value) {
		this._object.transform = value;
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
	get viewShadowRadius () {
		return this._object.viewShadowRadius;
	}
	set viewShadowRadius (value) {
		this._object.viewShadowRadius = value;
	}
	get viewShadowColor () {
		return this._object.viewShadowColor;
	}
	set viewShadowColor (value) {
		this._object.viewShadowColor = value;
	}
	get viewShadowOffset () {
		return this._object.viewShadowOffset;
	}
	set viewShadowOffset (value) {
		this._object.viewShadowOffset = value;
	}
	get horizontalWrap () {
		return this._object.horizontalWrap;
	}
	set horizontalWrap (value) {
		this._object.horizontalWrap = value;
	}
	get keepScreenOn () {
		return this._object.keepScreenOn;
	}
	set keepScreenOn (value) {
		this._object.keepScreenOn = value;
	}
	get backgroundDisabledColor () {
		return this._object.backgroundDisabledColor;
	}
	set backgroundDisabledColor (value) {
		this._object.backgroundDisabledColor = value;
	}
	get backgroundDisabledImage () {
		return this._object.backgroundDisabledImage;
	}
	set backgroundDisabledImage (value) {
		this._object.backgroundDisabledImage = value;
	}
	get backgroundFocusedColor () {
		return this._object.backgroundFocusedColor;
	}
	set backgroundFocusedColor (value) {
		this._object.backgroundFocusedColor = value;
	}
	get backgroundFocusedImage () {
		return this._object.backgroundFocusedImage;
	}
	set backgroundFocusedImage (value) {
		this._object.backgroundFocusedImage = value;
	}
	get backgroundGradient () {
		return this._object.backgroundGradient;
	}
	set backgroundGradient (value) {
		this._object.backgroundGradient = value;
	}
	get backgroundImage () {
		return this._object.backgroundImage;
	}
	set backgroundImage (value) {
		this._object.backgroundImage = value;
	}
	get backgroundSelectedColor () {
		return this._object.backgroundSelectedColor;
	}
	set backgroundSelectedColor (value) {
		this._object.backgroundSelectedColor = value;
	}
	get backgroundSelectedImage () {
		return this._object.backgroundSelectedImage;
	}
	set backgroundSelectedImage (value) {
		this._object.backgroundSelectedImage = value;
	}
	get borderRadius () {
		return this._object.borderRadius;
	}
	set borderRadius (value) {
		this._object.borderRadius = value;
	}
	get borderWidth () {
		return this._object.borderWidth;
	}
	set borderWidth (value) {
		this._object.borderWidth = value;
	}
	get opacity () {
		return this._object.opacity;
	}
	set opacity (value) {
		this._object.opacity = value;
	}
	get rect () {
		return this._object.rect;
	}
	get size () {
		return this._object.size;
	}
	get touchEnabled () {
		return this._object.touchEnabled;
	}
	set touchEnabled (value) {
		this._object.touchEnabled = value;
	}
	get visible () {
		return this._object.visible;
	}
	set visible (value) {
		this._object.visible = value;
	}
	get zIndex () {
		return this._object.zIndex;
	}
	set zIndex (value) {
		this._object.zIndex = value;
	}
	get backgroundColor () {
		return this._object.backgroundColor;
	}
	set backgroundColor (value) {
		this._object.backgroundColor = value;
	}
	get top () {
		return this._object.top;
	}
	set top (value) {
		this._object.top = value;
	}
	get left () {
		return this._object.left;
	}
	set left (value) {
		this._object.left = value;
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
	get right () {
		return this._object.right;
	}
	set right (value) {
		this._object.right = value;
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
	get layout () {
		return this._object.layout;
	}
	set layout (value) {
		this._object.layout = value;
	}
	get children () {
		return this._object.children;
	}
	get appearance () {
		return this._object.appearance;
	}
	set appearance (value) {
		this._object.appearance = value;
	}
	get keyboardAppearance () {
		return this._object.keyboardAppearance;
	}
	set keyboardAppearance (value) {
		this._object.keyboardAppearance = value;
	}
	get attributedHintText () {
		return new AttributedString(this._object.attributedHintText);
	}
	set attributedHintText (value) {
		this._object.attributedHintText = value;
	}
	get attributedString () {
		return new AttributedString(this._object.attributedString);
	}
	set attributedString (value) {
		this._object.attributedString = value;
	}
	get autocapitalization () {
		return this._object.autocapitalization;
	}
	set autocapitalization (value) {
		this._object.autocapitalization = value;
	}
	get autofillType () {
		return this._object.autofillType;
	}
	set autofillType (value) {
		this._object.autofillType = value;
	}
	get autoLink () {
		return this._object.autoLink;
	}
	set autoLink (value) {
		this._object.autoLink = value;
	}
	get clearOnEdit () {
		return this._object.clearOnEdit;
	}
	set clearOnEdit (value) {
		this._object.clearOnEdit = value;
	}
	get ellipsize () {
		return this._object.ellipsize;
	}
	set ellipsize (value) {
		this._object.ellipsize = value;
	}
	get enableReturnKey () {
		return this._object.enableReturnKey;
	}
	set enableReturnKey (value) {
		this._object.enableReturnKey = value;
	}
	get fullscreen () {
		return this._object.fullscreen;
	}
	set fullscreen (value) {
		this._object.fullscreen = value;
	}
	get hintTextColor () {
		return this._object.hintTextColor;
	}
	set hintTextColor (value) {
		this._object.hintTextColor = value;
	}
	get hintType () {
		return this._object.hintType;
	}
	set hintType (value) {
		this._object.hintType = value;
	}
	get handleLinks () {
		return this._object.handleLinks;
	}
	set handleLinks (value) {
		this._object.handleLinks = value;
	}
	get keyboardToolbar () {
		return this._object.keyboardToolbar;
	}
	set keyboardToolbar (value) {
		this._object.keyboardToolbar = value;
	}
	get keyboardToolbarColor () {
		return this._object.keyboardToolbarColor;
	}
	set keyboardToolbarColor (value) {
		this._object.keyboardToolbarColor = value;
	}
	get keyboardToolbarHeight () {
		return this._object.keyboardToolbarHeight;
	}
	set keyboardToolbarHeight (value) {
		this._object.keyboardToolbarHeight = value;
	}
	get padding () {
		return this._object.padding;
	}
	set padding (value) {
		this._object.padding = value;
	}
	get returnKeyType () {
		return this._object.returnKeyType;
	}
	set returnKeyType (value) {
		this._object.returnKeyType = value;
	}
	get scrollsToTop () {
		return this._object.scrollsToTop;
	}
	set scrollsToTop (value) {
		this._object.scrollsToTop = value;
	}
	get showUndoRedoActions () {
		return this._object.showUndoRedoActions;
	}
	set showUndoRedoActions (value) {
		this._object.showUndoRedoActions = value;
	}
	get suppressReturn () {
		return this._object.suppressReturn;
	}
	set suppressReturn (value) {
		this._object.suppressReturn = value;
	}
	get scrollable () {
		return this._object.scrollable;
	}
	set scrollable (value) {
		this._object.scrollable = value;
	}
	get autocorrect () {
		return this._object.autocorrect;
	}
	set autocorrect (value) {
		this._object.autocorrect = value;
	}
	get color () {
		return this._object.color;
	}
	set color (value) {
		this._object.color = value;
	}
	get editable () {
		return this._object.editable;
	}
	set editable (value) {
		this._object.editable = value;
	}
	get font () {
		return this._object.font;
	}
	set font (value) {
		this._object.font = value;
	}
	get hintText () {
		return this._object.hintText;
	}
	set hintText (value) {
		this._object.hintText = value;
	}
	get keyboardType () {
		return this._object.keyboardType;
	}
	set keyboardType (value) {
		this._object.keyboardType = value;
	}
	get maxLength () {
		return this._object.maxLength;
	}
	set maxLength (value) {
		this._object.maxLength = value;
	}
	get selection () {
		return this._object.selection;
	}
	get textAlign () {
		return this._object.textAlign;
	}
	set textAlign (value) {
		this._object.textAlign = value;
	}
	get value () {
		return this._object.value;
	}
	set value (value) {
		this._object.value = value;
	}
	get verticalAlign () {
		return this._object.verticalAlign;
	}
	set verticalAlign (value) {
		this._object.verticalAlign = value;
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
	animate (animation, callback) {
		animation = normalize(animation);
		if (!callback) {
			return new Promise(resolve => this._object.animate(animation, resolve));
		}
		return this._object.animate(animation, callback);
	}
	remove (view) {
		view = normalize(view);
		return this._object.remove(view);
	}
	removeAllChildren () {
		return this._object.removeAllChildren();
	}
	toImage (callback, honorScaleFactor) {
		if (!callback) {
			return new Promise(resolve => new Blob(this._object.toImage(resolve, honorScaleFactor)));
		}
		return new Blob(this._object.toImage(callback, honorScaleFactor));
	}
	convertPointToView (point, destinationView) {
		destinationView = normalize(destinationView);
		return this._object.convertPointToView(point, destinationView);
	}
	add (view) {
		view = normalize(view);
		return this._object.add(view);
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
	blur () {
		return this._object.blur();
	}
	hasText () {
		return this._object.hasText();
	}
	setSelection (start, end) {
		return this._object.setSelection(start, end);
	}
	focus () {
		return this._object.focus();
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
	getAccessibilityHidden () {
		return this._object.getAccessibilityHidden();
	}
	setAccessibilityHidden (accessibilityHidden) {
		return this._object.setAccessibilityHidden(accessibilityHidden);
	}
	getAccessibilityHint () {
		return this._object.getAccessibilityHint();
	}
	setAccessibilityHint (accessibilityHint) {
		return this._object.setAccessibilityHint(accessibilityHint);
	}
	getAccessibilityLabel () {
		return this._object.getAccessibilityLabel();
	}
	setAccessibilityLabel (accessibilityLabel) {
		return this._object.setAccessibilityLabel(accessibilityLabel);
	}
	getAccessibilityValue () {
		return this._object.getAccessibilityValue();
	}
	setAccessibilityValue (accessibilityValue) {
		return this._object.setAccessibilityValue(accessibilityValue);
	}
	getAnchorPoint () {
		return this._object.getAnchorPoint();
	}
	setAnchorPoint (anchorPoint) {
		return this._object.setAnchorPoint(anchorPoint);
	}
	getAnimatedCenter () {
		return this._object.getAnimatedCenter();
	}
	getBackgroundRepeat () {
		return this._object.getBackgroundRepeat();
	}
	setBackgroundRepeat (backgroundRepeat) {
		return this._object.setBackgroundRepeat(backgroundRepeat);
	}
	getBackgroundLeftCap () {
		return this._object.getBackgroundLeftCap();
	}
	setBackgroundLeftCap (backgroundLeftCap) {
		return this._object.setBackgroundLeftCap(backgroundLeftCap);
	}
	getBackgroundTopCap () {
		return this._object.getBackgroundTopCap();
	}
	setBackgroundTopCap (backgroundTopCap) {
		return this._object.setBackgroundTopCap(backgroundTopCap);
	}
	getBorderColor () {
		return this._object.getBorderColor();
	}
	setBorderColor (borderColor) {
		return this._object.setBorderColor(borderColor);
	}
	getClipMode () {
		return this._object.getClipMode();
	}
	setClipMode (clipMode) {
		return this._object.setClipMode(clipMode);
	}
	getElevation () {
		return this._object.getElevation();
	}
	setElevation (elevation) {
		return this._object.setElevation(elevation);
	}
	getFocusable () {
		return this._object.getFocusable();
	}
	setFocusable (focusable) {
		return this._object.setFocusable(focusable);
	}
	getHiddenBehavior () {
		return this._object.getHiddenBehavior();
	}
	setHiddenBehavior (hiddenBehavior) {
		return this._object.setHiddenBehavior(hiddenBehavior);
	}
	getOverrideCurrentAnimation () {
		return this._object.getOverrideCurrentAnimation();
	}
	setOverrideCurrentAnimation (overrideCurrentAnimation) {
		return this._object.setOverrideCurrentAnimation(overrideCurrentAnimation);
	}
	getPullBackgroundColor () {
		return this._object.getPullBackgroundColor();
	}
	setPullBackgroundColor (pullBackgroundColor) {
		return this._object.setPullBackgroundColor(pullBackgroundColor);
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
	getSoftKeyboardOnFocus () {
		return this._object.getSoftKeyboardOnFocus();
	}
	setSoftKeyboardOnFocus (softKeyboardOnFocus) {
		return this._object.setSoftKeyboardOnFocus(softKeyboardOnFocus);
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
	getTransform () {
		return new _2DMatrix(this._object.getTransform());
	}
	setTransform (transform) {
		transform = normalize(transform);
		return this._object.setTransform(transform);
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
	getViewShadowRadius () {
		return this._object.getViewShadowRadius();
	}
	setViewShadowRadius (viewShadowRadius) {
		return this._object.setViewShadowRadius(viewShadowRadius);
	}
	getViewShadowColor () {
		return this._object.getViewShadowColor();
	}
	setViewShadowColor (viewShadowColor) {
		return this._object.setViewShadowColor(viewShadowColor);
	}
	getViewShadowOffset () {
		return this._object.getViewShadowOffset();
	}
	setViewShadowOffset (viewShadowOffset) {
		return this._object.setViewShadowOffset(viewShadowOffset);
	}
	getHorizontalWrap () {
		return this._object.getHorizontalWrap();
	}
	setHorizontalWrap (horizontalWrap) {
		return this._object.setHorizontalWrap(horizontalWrap);
	}
	getKeepScreenOn () {
		return this._object.getKeepScreenOn();
	}
	setKeepScreenOn (keepScreenOn) {
		return this._object.setKeepScreenOn(keepScreenOn);
	}
	getBackgroundDisabledColor () {
		return this._object.getBackgroundDisabledColor();
	}
	setBackgroundDisabledColor (backgroundDisabledColor) {
		return this._object.setBackgroundDisabledColor(backgroundDisabledColor);
	}
	getBackgroundDisabledImage () {
		return this._object.getBackgroundDisabledImage();
	}
	setBackgroundDisabledImage (backgroundDisabledImage) {
		return this._object.setBackgroundDisabledImage(backgroundDisabledImage);
	}
	getBackgroundFocusedColor () {
		return this._object.getBackgroundFocusedColor();
	}
	setBackgroundFocusedColor (backgroundFocusedColor) {
		return this._object.setBackgroundFocusedColor(backgroundFocusedColor);
	}
	getBackgroundFocusedImage () {
		return this._object.getBackgroundFocusedImage();
	}
	setBackgroundFocusedImage (backgroundFocusedImage) {
		return this._object.setBackgroundFocusedImage(backgroundFocusedImage);
	}
	getBackgroundGradient () {
		return this._object.getBackgroundGradient();
	}
	setBackgroundGradient (backgroundGradient) {
		return this._object.setBackgroundGradient(backgroundGradient);
	}
	getBackgroundImage () {
		return this._object.getBackgroundImage();
	}
	setBackgroundImage (backgroundImage) {
		return this._object.setBackgroundImage(backgroundImage);
	}
	getBackgroundSelectedColor () {
		return this._object.getBackgroundSelectedColor();
	}
	setBackgroundSelectedColor (backgroundSelectedColor) {
		return this._object.setBackgroundSelectedColor(backgroundSelectedColor);
	}
	getBackgroundSelectedImage () {
		return this._object.getBackgroundSelectedImage();
	}
	setBackgroundSelectedImage (backgroundSelectedImage) {
		return this._object.setBackgroundSelectedImage(backgroundSelectedImage);
	}
	getBorderRadius () {
		return this._object.getBorderRadius();
	}
	setBorderRadius (borderRadius) {
		return this._object.setBorderRadius(borderRadius);
	}
	getBorderWidth () {
		return this._object.getBorderWidth();
	}
	setBorderWidth (borderWidth) {
		return this._object.setBorderWidth(borderWidth);
	}
	getOpacity () {
		return this._object.getOpacity();
	}
	setOpacity (opacity) {
		return this._object.setOpacity(opacity);
	}
	getRect () {
		return this._object.getRect();
	}
	getSize () {
		return this._object.getSize();
	}
	getTouchEnabled () {
		return this._object.getTouchEnabled();
	}
	setTouchEnabled (touchEnabled) {
		return this._object.setTouchEnabled(touchEnabled);
	}
	getVisible () {
		return this._object.getVisible();
	}
	setVisible (visible) {
		return this._object.setVisible(visible);
	}
	getZIndex () {
		return this._object.getZIndex();
	}
	setZIndex (zIndex) {
		return this._object.setZIndex(zIndex);
	}
	getBackgroundColor () {
		return this._object.getBackgroundColor();
	}
	setBackgroundColor (backgroundColor) {
		return this._object.setBackgroundColor(backgroundColor);
	}
	getTop () {
		return this._object.getTop();
	}
	setTop (top) {
		return this._object.setTop(top);
	}
	getLeft () {
		return this._object.getLeft();
	}
	setLeft (left) {
		return this._object.setLeft(left);
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
		return this._object.setCenter(center);
	}
	getRight () {
		return this._object.getRight();
	}
	setRight (right) {
		return this._object.setRight(right);
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
	getLayout () {
		return this._object.getLayout();
	}
	setLayout (layout) {
		return this._object.setLayout(layout);
	}
	getChildren () {
		return this._object.getChildren();
	}
	getAppearance () {
		return this._object.getAppearance();
	}
	setAppearance (appearance) {
		return this._object.setAppearance(appearance);
	}
	getKeyboardAppearance () {
		return this._object.getKeyboardAppearance();
	}
	setKeyboardAppearance (keyboardAppearance) {
		return this._object.setKeyboardAppearance(keyboardAppearance);
	}
	getAttributedHintText () {
		return new AttributedString(this._object.getAttributedHintText());
	}
	setAttributedHintText (attributedHintText) {
		attributedHintText = normalize(attributedHintText);
		return this._object.setAttributedHintText(attributedHintText);
	}
	getAttributedString () {
		return new AttributedString(this._object.getAttributedString());
	}
	setAttributedString (attributedString) {
		attributedString = normalize(attributedString);
		return this._object.setAttributedString(attributedString);
	}
	getAutocapitalization () {
		return this._object.getAutocapitalization();
	}
	setAutocapitalization (autocapitalization) {
		return this._object.setAutocapitalization(autocapitalization);
	}
	getAutofillType () {
		return this._object.getAutofillType();
	}
	setAutofillType (autofillType) {
		return this._object.setAutofillType(autofillType);
	}
	getAutoLink () {
		return this._object.getAutoLink();
	}
	setAutoLink (autoLink) {
		return this._object.setAutoLink(autoLink);
	}
	getClearOnEdit () {
		return this._object.getClearOnEdit();
	}
	setClearOnEdit (clearOnEdit) {
		return this._object.setClearOnEdit(clearOnEdit);
	}
	getEllipsize () {
		return this._object.getEllipsize();
	}
	setEllipsize (ellipsize) {
		return this._object.setEllipsize(ellipsize);
	}
	getEnableReturnKey () {
		return this._object.getEnableReturnKey();
	}
	setEnableReturnKey (enableReturnKey) {
		return this._object.setEnableReturnKey(enableReturnKey);
	}
	getFullscreen () {
		return this._object.getFullscreen();
	}
	setFullscreen (fullscreen) {
		return this._object.setFullscreen(fullscreen);
	}
	getHintTextColor () {
		return this._object.getHintTextColor();
	}
	setHintTextColor (hintTextColor) {
		return this._object.setHintTextColor(hintTextColor);
	}
	getHintType () {
		return this._object.getHintType();
	}
	setHintType (hintType) {
		return this._object.setHintType(hintType);
	}
	getHandleLinks () {
		return this._object.getHandleLinks();
	}
	setHandleLinks (handleLinks) {
		return this._object.setHandleLinks(handleLinks);
	}
	getKeyboardToolbar () {
		return this._object.getKeyboardToolbar();
	}
	setKeyboardToolbar (keyboardToolbar) {
		return this._object.setKeyboardToolbar(keyboardToolbar);
	}
	getKeyboardToolbarColor () {
		return this._object.getKeyboardToolbarColor();
	}
	setKeyboardToolbarColor (keyboardToolbarColor) {
		return this._object.setKeyboardToolbarColor(keyboardToolbarColor);
	}
	getKeyboardToolbarHeight () {
		return this._object.getKeyboardToolbarHeight();
	}
	setKeyboardToolbarHeight (keyboardToolbarHeight) {
		return this._object.setKeyboardToolbarHeight(keyboardToolbarHeight);
	}
	getPadding () {
		return this._object.getPadding();
	}
	setPadding (padding) {
		return this._object.setPadding(padding);
	}
	getReturnKeyType () {
		return this._object.getReturnKeyType();
	}
	setReturnKeyType (returnKeyType) {
		return this._object.setReturnKeyType(returnKeyType);
	}
	getScrollsToTop () {
		return this._object.getScrollsToTop();
	}
	setScrollsToTop (scrollsToTop) {
		return this._object.setScrollsToTop(scrollsToTop);
	}
	getShowUndoRedoActions () {
		return this._object.getShowUndoRedoActions();
	}
	setShowUndoRedoActions (showUndoRedoActions) {
		return this._object.setShowUndoRedoActions(showUndoRedoActions);
	}
	getSuppressReturn () {
		return this._object.getSuppressReturn();
	}
	setSuppressReturn (suppressReturn) {
		return this._object.setSuppressReturn(suppressReturn);
	}
	getScrollable () {
		return this._object.getScrollable();
	}
	setScrollable (scrollable) {
		return this._object.setScrollable(scrollable);
	}
	getAutocorrect () {
		return this._object.getAutocorrect();
	}
	setAutocorrect (autocorrect) {
		return this._object.setAutocorrect(autocorrect);
	}
	getColor () {
		return this._object.getColor();
	}
	setColor (color) {
		return this._object.setColor(color);
	}
	getEditable () {
		return this._object.getEditable();
	}
	setEditable (editable) {
		return this._object.setEditable(editable);
	}
	getFont () {
		return this._object.getFont();
	}
	setFont (font) {
		return this._object.setFont(font);
	}
	getHintText () {
		return this._object.getHintText();
	}
	setHintText (hintText) {
		return this._object.setHintText(hintText);
	}
	getKeyboardType () {
		return this._object.getKeyboardType();
	}
	setKeyboardType (keyboardType) {
		return this._object.setKeyboardType(keyboardType);
	}
	getMaxLength () {
		return this._object.getMaxLength();
	}
	setMaxLength (maxLength) {
		return this._object.setMaxLength(maxLength);
	}
	getSelection () {
		return this._object.getSelection();
	}
	getTextAlign () {
		return this._object.getTextAlign();
	}
	setTextAlign (textAlign) {
		return this._object.setTextAlign(textAlign);
	}
	getValue () {
		return this._object.getValue();
	}
	setValue (value) {
		return this._object.setValue(value);
	}
	getVerticalAlign () {
		return this._object.getVerticalAlign();
	}
	setVerticalAlign (verticalAlign) {
		return this._object.setVerticalAlign(verticalAlign);
	}

	// modules
};
Object.freeze(TextArea);

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