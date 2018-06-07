import { default as PreviewContext } from './iOS/PreviewContext';
import { default as _2DMatrix } from './_2DMatrix';
import { default as Activity } from './../Android/Activity';
import { default as View } from './View';
import { default as Proxy } from './../Proxy';
import { default as Blob } from './../Blob';

export default class Window {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.Window')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createWindow(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.Window.apiName;
	}
	static get animatedCenter () {
		return Titanium.UI.Window.animatedCenter;
	}
	static get rect () {
		return Titanium.UI.Window.rect;
	}
	static get size () {
		return Titanium.UI.Window.size;
	}
	static get children () {
		return Titanium.UI.Window.children;
	}
	static get activity () {
		return new Activity(Titanium.UI.Window.activity);
	}
	static get orientation () {
		return Titanium.UI.Window.orientation;
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
	get activity () {
		return new Activity(this._object.activity);
	}
	get backButtonTitle () {
		return this._object.backButtonTitle;
	}
	set backButtonTitle (value) {
		this._object.backButtonTitle = value;
	}
	get backButtonTitleImage () {
		return this._object.backButtonTitleImage;
	}
	set backButtonTitleImage (value) {
		this._object.backButtonTitleImage = value;
	}
	get barColor () {
		return this._object.barColor;
	}
	set barColor (value) {
		this._object.barColor = value;
	}
	get barImage () {
		return this._object.barImage;
	}
	set barImage (value) {
		this._object.barImage = value;
	}
	get extendEdges () {
		return this._object.extendEdges;
	}
	set extendEdges (value) {
		this._object.extendEdges = value;
	}
	get flagSecure () {
		return this._object.flagSecure;
	}
	set flagSecure (value) {
		this._object.flagSecure = value;
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
	get hideShadow () {
		return this._object.hideShadow;
	}
	set hideShadow (value) {
		this._object.hideShadow = value;
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
	get leftNavButton () {
		return new View(this._object.leftNavButton);
	}
	set leftNavButton (value) {
		this._object.leftNavButton = value;
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
	get navBarHidden () {
		return this._object.navBarHidden;
	}
	set navBarHidden (value) {
		this._object.navBarHidden = value;
	}
	get navTintColor () {
		return this._object.navTintColor;
	}
	set navTintColor (value) {
		this._object.navTintColor = value;
	}
	get onBack () {
		return this._object.onBack;
	}
	set onBack (value) {
		this._object.onBack = value;
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
	get rightNavButton () {
		return new View(this._object.rightNavButton);
	}
	set rightNavButton (value) {
		this._object.rightNavButton = value;
	}
	get rightNavButtons () {
		return this._object.rightNavButtons;
	}
	set rightNavButtons (value) {
		this._object.rightNavButtons = value;
	}
	get shadowImage () {
		return this._object.shadowImage;
	}
	set shadowImage (value) {
		this._object.shadowImage = value;
	}
	get splitActionBar () {
		return this._object.splitActionBar;
	}
	set splitActionBar (value) {
		this._object.splitActionBar = value;
	}
	get statusBarStyle () {
		return this._object.statusBarStyle;
	}
	set statusBarStyle (value) {
		this._object.statusBarStyle = value;
	}
	get sustainedPerformanceMode () {
		return this._object.sustainedPerformanceMode;
	}
	set sustainedPerformanceMode (value) {
		this._object.sustainedPerformanceMode = value;
	}
	get swipeToClose () {
		return this._object.swipeToClose;
	}
	set swipeToClose (value) {
		this._object.swipeToClose = value;
	}
	get tabBarHidden () {
		return this._object.tabBarHidden;
	}
	set tabBarHidden (value) {
		this._object.tabBarHidden = value;
	}
	get theme () {
		return this._object.theme;
	}
	set theme (value) {
		this._object.theme = value;
	}
	get titleAttributes () {
		return this._object.titleAttributes;
	}
	set titleAttributes (value) {
		this._object.titleAttributes = value;
	}
	get titleControl () {
		return new View(this._object.titleControl);
	}
	set titleControl (value) {
		this._object.titleControl = value;
	}
	get titleImage () {
		return this._object.titleImage;
	}
	set titleImage (value) {
		this._object.titleImage = value;
	}
	get titlePrompt () {
		return this._object.titlePrompt;
	}
	set titlePrompt (value) {
		this._object.titlePrompt = value;
	}
	get titlepromptid () {
		return this._object.titlepromptid;
	}
	set titlepromptid (value) {
		this._object.titlepromptid = value;
	}
	get toolbar () {
		return this._object.toolbar;
	}
	set toolbar (value) {
		this._object.toolbar = value;
	}
	get transitionAnimation () {
		return new Proxy(this._object.transitionAnimation);
	}
	set transitionAnimation (value) {
		this._object.transitionAnimation = value;
	}
	get translucent () {
		return this._object.translucent;
	}
	set translucent (value) {
		this._object.translucent = value;
	}
	get url () {
		return this._object.url;
	}
	set url (value) {
		this._object.url = value;
	}
	get windowFlags () {
		return this._object.windowFlags;
	}
	set windowFlags (value) {
		this._object.windowFlags = value;
	}
	get windowSoftInputMode () {
		return this._object.windowSoftInputMode;
	}
	set windowSoftInputMode (value) {
		this._object.windowSoftInputMode = value;
	}
	get windowPixelFormat () {
		return this._object.windowPixelFormat;
	}
	set windowPixelFormat (value) {
		this._object.windowPixelFormat = value;
	}
	get activityExitTransition () {
		return this._object.activityExitTransition;
	}
	set activityExitTransition (value) {
		this._object.activityExitTransition = value;
	}
	get activityEnterTransition () {
		return this._object.activityEnterTransition;
	}
	set activityEnterTransition (value) {
		this._object.activityEnterTransition = value;
	}
	get activityReturnTransition () {
		return this._object.activityReturnTransition;
	}
	set activityReturnTransition (value) {
		this._object.activityReturnTransition = value;
	}
	get activityReenterTransition () {
		return this._object.activityReenterTransition;
	}
	set activityReenterTransition (value) {
		this._object.activityReenterTransition = value;
	}
	get activitySharedElementExitTransition () {
		return this._object.activitySharedElementExitTransition;
	}
	set activitySharedElementExitTransition (value) {
		this._object.activitySharedElementExitTransition = value;
	}
	get activitySharedElementEnterTransition () {
		return this._object.activitySharedElementEnterTransition;
	}
	set activitySharedElementEnterTransition (value) {
		this._object.activitySharedElementEnterTransition = value;
	}
	get activitySharedElementReturnTransition () {
		return this._object.activitySharedElementReturnTransition;
	}
	set activitySharedElementReturnTransition (value) {
		this._object.activitySharedElementReturnTransition = value;
	}
	get activitySharedElementReenterTransition () {
		return this._object.activitySharedElementReenterTransition;
	}
	set activitySharedElementReenterTransition (value) {
		this._object.activitySharedElementReenterTransition = value;
	}
	get exitOnClose () {
		return this._object.exitOnClose;
	}
	set exitOnClose (value) {
		this._object.exitOnClose = value;
	}
	get fullscreen () {
		return this._object.fullscreen;
	}
	set fullscreen (value) {
		this._object.fullscreen = value;
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
	addSharedElement (view, transitionName) {
		view = normalize(view);
		return this._object.addSharedElement(view, transitionName);
	}
	hideNavBar (options) {
		options = normalize(options);
		return this._object.hideNavBar(options);
	}
	hideTabBar () {
		return this._object.hideTabBar();
	}
	removeAllSharedElements () {
		return this._object.removeAllSharedElements();
	}
	setToolbar (items, params) {
		return this._object.setToolbar(items, params);
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
	getActivity () {
		return new Activity(this._object.getActivity());
	}
	getBackButtonTitle () {
		return this._object.getBackButtonTitle();
	}
	setBackButtonTitle (backButtonTitle) {
		return this._object.setBackButtonTitle(backButtonTitle);
	}
	getBackButtonTitleImage () {
		return this._object.getBackButtonTitleImage();
	}
	setBackButtonTitleImage (backButtonTitleImage) {
		return this._object.setBackButtonTitleImage(backButtonTitleImage);
	}
	getBarColor () {
		return this._object.getBarColor();
	}
	setBarColor (barColor) {
		return this._object.setBarColor(barColor);
	}
	getBarImage () {
		return this._object.getBarImage();
	}
	setBarImage (barImage) {
		return this._object.setBarImage(barImage);
	}
	getExtendEdges () {
		return this._object.getExtendEdges();
	}
	setExtendEdges (extendEdges) {
		return this._object.setExtendEdges(extendEdges);
	}
	getFlagSecure () {
		return this._object.getFlagSecure();
	}
	setFlagSecure (flagSecure) {
		return this._object.setFlagSecure(flagSecure);
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
	getHideShadow () {
		return this._object.getHideShadow();
	}
	setHideShadow (hideShadow) {
		return this._object.setHideShadow(hideShadow);
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
	getLeftNavButton () {
		return new View(this._object.getLeftNavButton());
	}
	setLeftNavButton (leftNavButton) {
		leftNavButton = normalize(leftNavButton);
		return this._object.setLeftNavButton(leftNavButton);
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
	getNavBarHidden () {
		return this._object.getNavBarHidden();
	}
	setNavBarHidden (navBarHidden) {
		return this._object.setNavBarHidden(navBarHidden);
	}
	getNavTintColor () {
		return this._object.getNavTintColor();
	}
	setNavTintColor (navTintColor) {
		return this._object.setNavTintColor(navTintColor);
	}
	getOnBack () {
		return this._object.getOnBack();
	}
	setOnBack (onBack) {
		return this._object.setOnBack(onBack);
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
	getRightNavButton () {
		return new View(this._object.getRightNavButton());
	}
	setRightNavButton (rightNavButton) {
		rightNavButton = normalize(rightNavButton);
		return this._object.setRightNavButton(rightNavButton);
	}
	getRightNavButtons () {
		return this._object.getRightNavButtons();
	}
	setRightNavButtons (rightNavButtons) {
		return this._object.setRightNavButtons(rightNavButtons);
	}
	getShadowImage () {
		return this._object.getShadowImage();
	}
	setShadowImage (shadowImage) {
		return this._object.setShadowImage(shadowImage);
	}
	getSplitActionBar () {
		return this._object.getSplitActionBar();
	}
	setSplitActionBar (splitActionBar) {
		return this._object.setSplitActionBar(splitActionBar);
	}
	getStatusBarStyle () {
		return this._object.getStatusBarStyle();
	}
	setStatusBarStyle (statusBarStyle) {
		return this._object.setStatusBarStyle(statusBarStyle);
	}
	getSustainedPerformanceMode () {
		return this._object.getSustainedPerformanceMode();
	}
	setSustainedPerformanceMode (sustainedPerformanceMode) {
		return this._object.setSustainedPerformanceMode(sustainedPerformanceMode);
	}
	getSwipeToClose () {
		return this._object.getSwipeToClose();
	}
	setSwipeToClose (swipeToClose) {
		return this._object.setSwipeToClose(swipeToClose);
	}
	getTabBarHidden () {
		return this._object.getTabBarHidden();
	}
	setTabBarHidden (tabBarHidden) {
		return this._object.setTabBarHidden(tabBarHidden);
	}
	getTheme () {
		return this._object.getTheme();
	}
	setTheme (theme) {
		return this._object.setTheme(theme);
	}
	getTitleAttributes () {
		return this._object.getTitleAttributes();
	}
	setTitleAttributes (titleAttributes) {
		return this._object.setTitleAttributes(titleAttributes);
	}
	getTitleControl () {
		return new View(this._object.getTitleControl());
	}
	setTitleControl (titleControl) {
		titleControl = normalize(titleControl);
		return this._object.setTitleControl(titleControl);
	}
	getTitleImage () {
		return this._object.getTitleImage();
	}
	setTitleImage (titleImage) {
		return this._object.setTitleImage(titleImage);
	}
	getTitlePrompt () {
		return this._object.getTitlePrompt();
	}
	setTitlePrompt (titlePrompt) {
		return this._object.setTitlePrompt(titlePrompt);
	}
	getTitlepromptid () {
		return this._object.getTitlepromptid();
	}
	setTitlepromptid (titlepromptid) {
		return this._object.setTitlepromptid(titlepromptid);
	}
	getToolbar () {
		return this._object.getToolbar();
	}
	setToolbar (toolbar) {
		return this._object.setToolbar(toolbar);
	}
	getTransitionAnimation () {
		return new Proxy(this._object.getTransitionAnimation());
	}
	setTransitionAnimation (transitionAnimation) {
		transitionAnimation = normalize(transitionAnimation);
		return this._object.setTransitionAnimation(transitionAnimation);
	}
	getTranslucent () {
		return this._object.getTranslucent();
	}
	setTranslucent (translucent) {
		return this._object.setTranslucent(translucent);
	}
	getUrl () {
		return this._object.getUrl();
	}
	setUrl (url) {
		return this._object.setUrl(url);
	}
	getWindowFlags () {
		return this._object.getWindowFlags();
	}
	setWindowFlags (windowFlags) {
		return this._object.setWindowFlags(windowFlags);
	}
	getWindowSoftInputMode () {
		return this._object.getWindowSoftInputMode();
	}
	setWindowSoftInputMode (windowSoftInputMode) {
		return this._object.setWindowSoftInputMode(windowSoftInputMode);
	}
	getWindowPixelFormat () {
		return this._object.getWindowPixelFormat();
	}
	setWindowPixelFormat (windowPixelFormat) {
		return this._object.setWindowPixelFormat(windowPixelFormat);
	}
	getActivityExitTransition () {
		return this._object.getActivityExitTransition();
	}
	setActivityExitTransition (activityExitTransition) {
		return this._object.setActivityExitTransition(activityExitTransition);
	}
	getActivityEnterTransition () {
		return this._object.getActivityEnterTransition();
	}
	setActivityEnterTransition (activityEnterTransition) {
		return this._object.setActivityEnterTransition(activityEnterTransition);
	}
	getActivityReturnTransition () {
		return this._object.getActivityReturnTransition();
	}
	setActivityReturnTransition (activityReturnTransition) {
		return this._object.setActivityReturnTransition(activityReturnTransition);
	}
	getActivityReenterTransition () {
		return this._object.getActivityReenterTransition();
	}
	setActivityReenterTransition (activityReenterTransition) {
		return this._object.setActivityReenterTransition(activityReenterTransition);
	}
	getActivitySharedElementExitTransition () {
		return this._object.getActivitySharedElementExitTransition();
	}
	setActivitySharedElementExitTransition (activitySharedElementExitTransition) {
		return this._object.setActivitySharedElementExitTransition(activitySharedElementExitTransition);
	}
	getActivitySharedElementEnterTransition () {
		return this._object.getActivitySharedElementEnterTransition();
	}
	setActivitySharedElementEnterTransition (activitySharedElementEnterTransition) {
		return this._object.setActivitySharedElementEnterTransition(activitySharedElementEnterTransition);
	}
	getActivitySharedElementReturnTransition () {
		return this._object.getActivitySharedElementReturnTransition();
	}
	setActivitySharedElementReturnTransition (activitySharedElementReturnTransition) {
		return this._object.setActivitySharedElementReturnTransition(activitySharedElementReturnTransition);
	}
	getActivitySharedElementReenterTransition () {
		return this._object.getActivitySharedElementReenterTransition();
	}
	setActivitySharedElementReenterTransition (activitySharedElementReenterTransition) {
		return this._object.setActivitySharedElementReenterTransition(activitySharedElementReenterTransition);
	}
	getExitOnClose () {
		return this._object.getExitOnClose();
	}
	setExitOnClose (exitOnClose) {
		return this._object.setExitOnClose(exitOnClose);
	}
	getFullscreen () {
		return this._object.getFullscreen();
	}
	setFullscreen (fullscreen) {
		return this._object.setFullscreen(fullscreen);
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
Object.freeze(Window);

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