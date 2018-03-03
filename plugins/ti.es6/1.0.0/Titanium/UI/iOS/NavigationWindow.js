import { default as PreviewContext } from './PreviewContext';
import { default as _2DMatrix } from './../_2DMatrix';
import { default as Window } from './../Window';
import { default as Blob } from './../../Blob';
import { default as View } from './../View';

export default class NavigationWindow {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.iOS.NavigationWindow')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.iOS.createNavigationWindow(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.iOS.NavigationWindow.apiName;
	}
	static get animatedCenter () {
		return Titanium.UI.iOS.NavigationWindow.animatedCenter;
	}
	static get rect () {
		return Titanium.UI.iOS.NavigationWindow.rect;
	}
	static get size () {
		return Titanium.UI.iOS.NavigationWindow.size;
	}
	static get children () {
		return Titanium.UI.iOS.NavigationWindow.children;
	}
	static get orientation () {
		return Titanium.UI.iOS.NavigationWindow.orientation;
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
	get tintColor () {
		return this._object.tintColor;
	}
	set tintColor (value) {
		this._object.tintColor = value;
	}
	get transform () {
		return new _2DMatrix(this._object.transform);
	}
	set transform (value) {
		this._object.transform = value;
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
	get extendEdges () {
		return this._object.extendEdges;
	}
	set extendEdges (value) {
		this._object.extendEdges = value;
	}
	get includeOpaqueBars () {
		return this._object.includeOpaqueBars;
	}
	set includeOpaqueBars (value) {
		this._object.includeOpaqueBars = value;
	}
	get autoAdjustScrollViewInsets () {
		return this._object.autoAdjustScrollViewInsets;
	}
	set autoAdjustScrollViewInsets (value) {
		this._object.autoAdjustScrollViewInsets = value;
	}
	get extendSafeArea () {
		return this._object.extendSafeArea;
	}
	set extendSafeArea (value) {
		this._object.extendSafeArea = value;
	}
	get hidesBarsOnSwipe () {
		return this._object.hidesBarsOnSwipe;
	}
	set hidesBarsOnSwipe (value) {
		this._object.hidesBarsOnSwipe = value;
	}
	get hidesBarsOnTap () {
		return this._object.hidesBarsOnTap;
	}
	set hidesBarsOnTap (value) {
		this._object.hidesBarsOnTap = value;
	}
	get hidesBarsWhenKeyboardAppears () {
		return this._object.hidesBarsWhenKeyboardAppears;
	}
	set hidesBarsWhenKeyboardAppears (value) {
		this._object.hidesBarsWhenKeyboardAppears = value;
	}
	get largeTitleEnabled () {
		return this._object.largeTitleEnabled;
	}
	set largeTitleEnabled (value) {
		this._object.largeTitleEnabled = value;
	}
	get largeTitleDisplayMode () {
		return this._object.largeTitleDisplayMode;
	}
	set largeTitleDisplayMode (value) {
		this._object.largeTitleDisplayMode = value;
	}
	get leftNavButtons () {
		return this._object.leftNavButtons;
	}
	set leftNavButtons (value) {
		this._object.leftNavButtons = value;
	}
	get modal () {
		return this._object.modal;
	}
	set modal (value) {
		this._object.modal = value;
	}
	get orientationModes () {
		return this._object.orientationModes;
	}
	set orientationModes (value) {
		this._object.orientationModes = value;
	}
	get orientation () {
		return this._object.orientation;
	}
	get rightNavButtons () {
		return this._object.rightNavButtons;
	}
	set rightNavButtons (value) {
		this._object.rightNavButtons = value;
	}
	get statusBarStyle () {
		return this._object.statusBarStyle;
	}
	set statusBarStyle (value) {
		this._object.statusBarStyle = value;
	}
	get titleAttributes () {
		return this._object.titleAttributes;
	}
	set titleAttributes (value) {
		this._object.titleAttributes = value;
	}
	get fullscreen () {
		return this._object.fullscreen;
	}
	set fullscreen (value) {
		this._object.fullscreen = value;
	}
	get window () {
		return new Window(this._object.window);
	}
	set window (value) {
		this._object.window = value;
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
	hideNavBar (options) {
		options = normalize(options);
		return this._object.hideNavBar(options);
	}
	showNavBar (options) {
		options = normalize(options);
		return this._object.showNavBar(options);
	}
	showToolbar (options) {
		options = normalize(options);
		return this._object.showToolbar(options);
	}
	hideToolbar (options) {
		options = normalize(options);
		return this._object.hideToolbar(options);
	}
	close (params) {
		params = normalize(params);
		return this._object.close(params);
	}
	open (params) {
		return this._object.open(params);
	}
	closeWindow (window, options) {
		window = normalize(window);
		options = normalize(options);
		return this._object.closeWindow(window, options);
	}
	openWindow (window, options) {
		window = normalize(window);
		options = normalize(options);
		return this._object.openWindow(window, options);
	}
	popToRootWindow (options) {
		options = normalize(options);
		return this._object.popToRootWindow(options);
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
	getTintColor () {
		return this._object.getTintColor();
	}
	setTintColor (tintColor) {
		return this._object.setTintColor(tintColor);
	}
	getTransform () {
		return new _2DMatrix(this._object.getTransform());
	}
	setTransform (transform) {
		transform = normalize(transform);
		return this._object.setTransform(transform);
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
	getExtendEdges () {
		return this._object.getExtendEdges();
	}
	setExtendEdges (extendEdges) {
		return this._object.setExtendEdges(extendEdges);
	}
	getIncludeOpaqueBars () {
		return this._object.getIncludeOpaqueBars();
	}
	setIncludeOpaqueBars (includeOpaqueBars) {
		return this._object.setIncludeOpaqueBars(includeOpaqueBars);
	}
	getAutoAdjustScrollViewInsets () {
		return this._object.getAutoAdjustScrollViewInsets();
	}
	setAutoAdjustScrollViewInsets (autoAdjustScrollViewInsets) {
		return this._object.setAutoAdjustScrollViewInsets(autoAdjustScrollViewInsets);
	}
	getExtendSafeArea () {
		return this._object.getExtendSafeArea();
	}
	setExtendSafeArea (extendSafeArea) {
		return this._object.setExtendSafeArea(extendSafeArea);
	}
	getHidesBarsOnSwipe () {
		return this._object.getHidesBarsOnSwipe();
	}
	setHidesBarsOnSwipe (hidesBarsOnSwipe) {
		return this._object.setHidesBarsOnSwipe(hidesBarsOnSwipe);
	}
	getHidesBarsOnTap () {
		return this._object.getHidesBarsOnTap();
	}
	setHidesBarsOnTap (hidesBarsOnTap) {
		return this._object.setHidesBarsOnTap(hidesBarsOnTap);
	}
	getHidesBarsWhenKeyboardAppears () {
		return this._object.getHidesBarsWhenKeyboardAppears();
	}
	setHidesBarsWhenKeyboardAppears (hidesBarsWhenKeyboardAppears) {
		return this._object.setHidesBarsWhenKeyboardAppears(hidesBarsWhenKeyboardAppears);
	}
	getLargeTitleEnabled () {
		return this._object.getLargeTitleEnabled();
	}
	setLargeTitleEnabled (largeTitleEnabled) {
		return this._object.setLargeTitleEnabled(largeTitleEnabled);
	}
	getLargeTitleDisplayMode () {
		return this._object.getLargeTitleDisplayMode();
	}
	setLargeTitleDisplayMode (largeTitleDisplayMode) {
		return this._object.setLargeTitleDisplayMode(largeTitleDisplayMode);
	}
	getLeftNavButtons () {
		return this._object.getLeftNavButtons();
	}
	setLeftNavButtons (leftNavButtons) {
		return this._object.setLeftNavButtons(leftNavButtons);
	}
	getModal () {
		return this._object.getModal();
	}
	setModal (modal) {
		return this._object.setModal(modal);
	}
	getOrientationModes () {
		return this._object.getOrientationModes();
	}
	setOrientationModes (orientationModes) {
		return this._object.setOrientationModes(orientationModes);
	}
	getOrientation () {
		return this._object.getOrientation();
	}
	getRightNavButtons () {
		return this._object.getRightNavButtons();
	}
	setRightNavButtons (rightNavButtons) {
		return this._object.setRightNavButtons(rightNavButtons);
	}
	getStatusBarStyle () {
		return this._object.getStatusBarStyle();
	}
	setStatusBarStyle (statusBarStyle) {
		return this._object.setStatusBarStyle(statusBarStyle);
	}
	getTitleAttributes () {
		return this._object.getTitleAttributes();
	}
	setTitleAttributes (titleAttributes) {
		return this._object.setTitleAttributes(titleAttributes);
	}
	getFullscreen () {
		return this._object.getFullscreen();
	}
	setFullscreen (fullscreen) {
		return this._object.setFullscreen(fullscreen);
	}
	getWindow () {
		return new Window(this._object.getWindow());
	}
	setWindow (window) {
		window = normalize(window);
		return this._object.setWindow(window);
	}

	// modules
};
Object.freeze(NavigationWindow);

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