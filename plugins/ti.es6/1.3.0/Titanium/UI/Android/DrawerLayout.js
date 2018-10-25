import { default as Window } from './../Window';
import { default as _2DMatrix } from './../_2DMatrix';
import { default as View } from './../View';
import { default as Toolbar } from './../Toolbar';
import { default as Blob } from './../../Blob';

export default class DrawerLayout {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.Android.DrawerLayout')) {
			this._object = object;
		} else {
			this._object = Titanium.Android.createDrawerLayout(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.Android.DrawerLayout.apiName;
	}
	static get rect () {
		return Titanium.UI.Android.DrawerLayout.rect;
	}
	static get size () {
		return Titanium.UI.Android.DrawerLayout.size;
	}
	static get children () {
		return Titanium.UI.Android.DrawerLayout.children;
	}
	static get LOCK_MODE_LOCKED_CLOSED () {
		return Titanium.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_CLOSED;
	}
	static get LOCK_MODE_LOCKED_OPEN () {
		return Titanium.UI.Android.DrawerLayout.LOCK_MODE_LOCKED_OPEN;
	}
	static get LOCK_MODE_UNDEFINED () {
		return Titanium.UI.Android.DrawerLayout.LOCK_MODE_UNDEFINED;
	}
	static get LOCK_MODE_UNLOCKED () {
		return Titanium.UI.Android.DrawerLayout.LOCK_MODE_UNLOCKED;
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
	get backgroundRepeat () {
		return this._object.backgroundRepeat;
	}
	set backgroundRepeat (value) {
		this._object.backgroundRepeat = value;
	}
	get borderColor () {
		return this._object.borderColor;
	}
	set borderColor (value) {
		this._object.borderColor = value;
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
	get LOCK_MODE_LOCKED_CLOSED () {
		return this._object.LOCK_MODE_LOCKED_CLOSED;
	}
	get LOCK_MODE_LOCKED_OPEN () {
		return this._object.LOCK_MODE_LOCKED_OPEN;
	}
	get LOCK_MODE_UNDEFINED () {
		return this._object.LOCK_MODE_UNDEFINED;
	}
	get LOCK_MODE_UNLOCKED () {
		return this._object.LOCK_MODE_UNLOCKED;
	}
	get isLeftOpen () {
		return this._object.isLeftOpen;
	}
	set isLeftOpen (value) {
		this._object.isLeftOpen = value;
	}
	get isRightOpen () {
		return this._object.isRightOpen;
	}
	set isRightOpen (value) {
		this._object.isRightOpen = value;
	}
	get isLeftVisible () {
		return this._object.isLeftVisible;
	}
	set isLeftVisible (value) {
		this._object.isLeftVisible = value;
	}
	get isRightVisible () {
		return this._object.isRightVisible;
	}
	set isRightVisible (value) {
		this._object.isRightVisible = value;
	}
	get leftWidth () {
		return this._object.leftWidth;
	}
	set leftWidth (value) {
		this._object.leftWidth = value;
	}
	get rightWidth () {
		return this._object.rightWidth;
	}
	set rightWidth (value) {
		this._object.rightWidth = value;
	}
	get leftView () {
		return new View(this._object.leftView);
	}
	set leftView (value) {
		this._object.leftView = value;
	}
	get rightView () {
		return new View(this._object.rightView);
	}
	set rightView (value) {
		this._object.rightView = value;
	}
	get centerView () {
		return new View(this._object.centerView);
	}
	set centerView (value) {
		this._object.centerView = value;
	}
	get drawerIndicatorEnabled () {
		return this._object.drawerIndicatorEnabled;
	}
	set drawerIndicatorEnabled (value) {
		this._object.drawerIndicatorEnabled = value;
	}
	get drawerLockMode () {
		return this._object.drawerLockMode;
	}
	set drawerLockMode (value) {
		this._object.drawerLockMode = value;
	}
	get toolbarEnabled () {
		return this._object.toolbarEnabled;
	}
	set toolbarEnabled (value) {
		this._object.toolbarEnabled = value;
	}
	get toolbar () {
		return new Toolbar(this._object.toolbar);
	}
	set toolbar (value) {
		this._object.toolbar = value;
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
	toggleLeft () {
		return this._object.toggleLeft();
	}
	openLeft () {
		return this._object.openLeft();
	}
	closeLeft () {
		return this._object.closeLeft();
	}
	toggleRight () {
		return this._object.toggleRight();
	}
	openRight () {
		return this._object.openRight();
	}
	closeRight () {
		return this._object.closeRight();
	}
	interceptTouchEvent (view, disallowIntercept) {
		view = normalize(view);
		return this._object.interceptTouchEvent(view, disallowIntercept);
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
	getBackgroundRepeat () {
		return this._object.getBackgroundRepeat();
	}
	setBackgroundRepeat (backgroundRepeat) {
		return this._object.setBackgroundRepeat(backgroundRepeat);
	}
	getBorderColor () {
		return this._object.getBorderColor();
	}
	setBorderColor (borderColor) {
		return this._object.setBorderColor(borderColor);
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
	getIsLeftOpen () {
		return this._object.getIsLeftOpen();
	}
	setIsLeftOpen (isLeftOpen) {
		return this._object.setIsLeftOpen(isLeftOpen);
	}
	getIsRightOpen () {
		return this._object.getIsRightOpen();
	}
	setIsRightOpen (isRightOpen) {
		return this._object.setIsRightOpen(isRightOpen);
	}
	getIsLeftVisible () {
		return this._object.getIsLeftVisible();
	}
	setIsLeftVisible (isLeftVisible) {
		return this._object.setIsLeftVisible(isLeftVisible);
	}
	getIsRightVisible () {
		return this._object.getIsRightVisible();
	}
	setIsRightVisible (isRightVisible) {
		return this._object.setIsRightVisible(isRightVisible);
	}
	getLeftWidth () {
		return this._object.getLeftWidth();
	}
	setLeftWidth (leftWidth) {
		return this._object.setLeftWidth(leftWidth);
	}
	getRightWidth () {
		return this._object.getRightWidth();
	}
	setRightWidth (rightWidth) {
		return this._object.setRightWidth(rightWidth);
	}
	getLeftView () {
		return new View(this._object.getLeftView());
	}
	setLeftView (leftView) {
		leftView = normalize(leftView);
		return this._object.setLeftView(leftView);
	}
	getRightView () {
		return new View(this._object.getRightView());
	}
	setRightView (rightView) {
		rightView = normalize(rightView);
		return this._object.setRightView(rightView);
	}
	getCenterView () {
		return new View(this._object.getCenterView());
	}
	setCenterView (centerView) {
		centerView = normalize(centerView);
		return this._object.setCenterView(centerView);
	}
	getDrawerIndicatorEnabled () {
		return this._object.getDrawerIndicatorEnabled();
	}
	setDrawerIndicatorEnabled (drawerIndicatorEnabled) {
		return this._object.setDrawerIndicatorEnabled(drawerIndicatorEnabled);
	}
	getDrawerLockMode () {
		return this._object.getDrawerLockMode();
	}
	setDrawerLockMode (drawerLockMode) {
		return this._object.setDrawerLockMode(drawerLockMode);
	}
	getToolbarEnabled () {
		return this._object.getToolbarEnabled();
	}
	setToolbarEnabled (toolbarEnabled) {
		return this._object.setToolbarEnabled(toolbarEnabled);
	}
	getToolbar () {
		return new Toolbar(this._object.getToolbar());
	}
	setToolbar (toolbar) {
		toolbar = normalize(toolbar);
		return this._object.setToolbar(toolbar);
	}

	// modules
};
Object.freeze(DrawerLayout);

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