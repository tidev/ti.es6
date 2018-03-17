import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as _2DMatrix } from './_2DMatrix';
import { default as Blob } from './../Blob';
import { default as View } from './View';

export default class Toolbar {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.Toolbar')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createToolbar(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.Toolbar.apiName;
	}
	static get animatedCenter () {
		return Titanium.UI.Toolbar.animatedCenter;
	}
	static get rect () {
		return Titanium.UI.Toolbar.rect;
	}
	static get size () {
		return Titanium.UI.Toolbar.size;
	}
	static get children () {
		return Titanium.UI.Toolbar.children;
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
	get children () {
		return this._object.children;
	}
	get barColor () {
		return this._object.barColor;
	}
	set barColor (value) {
		this._object.barColor = value;
	}
	get items () {
		return this._object.items;
	}
	set items (value) {
		this._object.items = value;
	}
	get extendBackground () {
		return this._object.extendBackground;
	}
	set extendBackground (value) {
		this._object.extendBackground = value;
	}
	get translucent () {
		return this._object.translucent;
	}
	set translucent (value) {
		this._object.translucent = value;
	}
	get contentInsetEndWithActions () {
		return this._object.contentInsetEndWithActions;
	}
	set contentInsetEndWithActions (value) {
		this._object.contentInsetEndWithActions = value;
	}
	get contentInsetStartWithNavigation () {
		return this._object.contentInsetStartWithNavigation;
	}
	set contentInsetStartWithNavigation (value) {
		this._object.contentInsetStartWithNavigation = value;
	}
	get logo () {
		return this._object.logo;
	}
	set logo (value) {
		this._object.logo = value;
	}
	get navigationIcon () {
		return this._object.navigationIcon;
	}
	set navigationIcon (value) {
		this._object.navigationIcon = value;
	}
	get overflowIcon () {
		return this._object.overflowIcon;
	}
	set overflowIcon (value) {
		this._object.overflowIcon = value;
	}
	get subtitle () {
		return this._object.subtitle;
	}
	set subtitle (value) {
		this._object.subtitle = value;
	}
	get subtitleTextColor () {
		return this._object.subtitleTextColor;
	}
	set subtitleTextColor (value) {
		this._object.subtitleTextColor = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get titleTextColor () {
		return this._object.titleTextColor;
	}
	set titleTextColor (value) {
		this._object.titleTextColor = value;
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
	collapseActionViews () {
		return this._object.collapseActionViews();
	}
	dismissPopupMenus () {
		return this._object.dismissPopupMenus();
	}
	getContentInsetEnd () {
		return this._object.getContentInsetEnd();
	}
	getContentInsetLeft () {
		return this._object.getContentInsetLeft();
	}
	getContentInsetRight () {
		return this._object.getContentInsetRight();
	}
	getContentInsetStart () {
		return this._object.getContentInsetStart();
	}
	getCurrentContentInsetEnd () {
		return this._object.getCurrentContentInsetEnd();
	}
	getCurrentContentInsetLeft () {
		return this._object.getCurrentContentInsetLeft();
	}
	getCurrentContentInsetRight () {
		return this._object.getCurrentContentInsetRight();
	}
	getCurrentContentInsetStart () {
		return this._object.getCurrentContentInsetStart();
	}
	hasExpandedActionView () {
		return this._object.hasExpandedActionView();
	}
	hideOverflowMenu () {
		return this._object.hideOverflowMenu();
	}
	isOverflowMenuShowing () {
		return this._object.isOverflowMenuShowing();
	}
	setContentInsetsAbsolute (insetLeft, insetRight) {
		return this._object.setContentInsetsAbsolute(insetLeft, insetRight);
	}
	setContentInsetsRelative (insetStart, insetEnd) {
		return this._object.setContentInsetsRelative(insetStart, insetEnd);
	}
	showOverflowMenu () {
		return this._object.showOverflowMenu();
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
	getChildren () {
		return this._object.getChildren();
	}
	getBarColor () {
		return this._object.getBarColor();
	}
	setBarColor (barColor) {
		return this._object.setBarColor(barColor);
	}
	getItems () {
		return this._object.getItems();
	}
	setItems (items) {
		return this._object.setItems(items);
	}
	getTranslucent () {
		return this._object.getTranslucent();
	}
	setTranslucent (translucent) {
		return this._object.setTranslucent(translucent);
	}
	getContentInsetEndWithActions () {
		return this._object.getContentInsetEndWithActions();
	}
	setContentInsetEndWithActions (contentInsetEndWithActions) {
		return this._object.setContentInsetEndWithActions(contentInsetEndWithActions);
	}
	getContentInsetStartWithNavigation () {
		return this._object.getContentInsetStartWithNavigation();
	}
	setContentInsetStartWithNavigation (contentInsetStartWithNavigation) {
		return this._object.setContentInsetStartWithNavigation(contentInsetStartWithNavigation);
	}
	getLogo () {
		return this._object.getLogo();
	}
	setLogo (logo) {
		return this._object.setLogo(logo);
	}
	getNavigationIcon () {
		return this._object.getNavigationIcon();
	}
	setNavigationIcon (navigationIcon) {
		return this._object.setNavigationIcon(navigationIcon);
	}
	getOverflowIcon () {
		return this._object.getOverflowIcon();
	}
	setOverflowIcon (overflowIcon) {
		return this._object.setOverflowIcon(overflowIcon);
	}
	getSubtitle () {
		return this._object.getSubtitle();
	}
	setSubtitle (subtitle) {
		return this._object.setSubtitle(subtitle);
	}
	getSubtitleTextColor () {
		return this._object.getSubtitleTextColor();
	}
	setSubtitleTextColor (subtitleTextColor) {
		return this._object.setSubtitleTextColor(subtitleTextColor);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getTitleTextColor () {
		return this._object.getTitleTextColor();
	}
	setTitleTextColor (titleTextColor) {
		return this._object.setTitleTextColor(titleTextColor);
	}

	// modules
};
Object.freeze(Toolbar);

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