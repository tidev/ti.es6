import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as Activity } from './../Android/Activity';
import { default as Tab } from './Tab';
import { default as Blob } from './../Blob';
import { default as View } from './View';

export default class TabGroup {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.TabGroup')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createTabGroup(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.TabGroup.apiName;
	}
	static get rect () {
		return Titanium.UI.TabGroup.rect;
	}
	static get size () {
		return Titanium.UI.TabGroup.size;
	}
	static get activity () {
		return new Activity(Titanium.UI.TabGroup.activity);
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
	get keepScreenOn () {
		return this._object.keepScreenOn;
	}
	set keepScreenOn (value) {
		this._object.keepScreenOn = value;
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
	get center () {
		return this._object.center;
	}
	set center (value) {
		this._object.center = value;
	}
	get activity () {
		return new Activity(this._object.activity);
	}
	get allowUserCustomization () {
		return this._object.allowUserCustomization;
	}
	set allowUserCustomization (value) {
		this._object.allowUserCustomization = value;
	}
	get translucent () {
		return this._object.translucent;
	}
	set translucent (value) {
		this._object.translucent = value;
	}
	get titleAttributes () {
		return this._object.titleAttributes;
	}
	set titleAttributes (value) {
		this._object.titleAttributes = value;
	}
	get navTintColor () {
		return this._object.navTintColor;
	}
	set navTintColor (value) {
		this._object.navTintColor = value;
	}
	get editButtonTitle () {
		return this._object.editButtonTitle;
	}
	set editButtonTitle (value) {
		this._object.editButtonTitle = value;
	}
	get exitOnClose () {
		return this._object.exitOnClose;
	}
	set exitOnClose (value) {
		this._object.exitOnClose = value;
	}
	get swipeable () {
		return this._object.swipeable;
	}
	set swipeable (value) {
		this._object.swipeable = value;
	}
	get smoothScrollOnTabClick () {
		return this._object.smoothScrollOnTabClick;
	}
	set smoothScrollOnTabClick (value) {
		this._object.smoothScrollOnTabClick = value;
	}
	get windowSoftInputMode () {
		return this._object.windowSoftInputMode;
	}
	set windowSoftInputMode (value) {
		this._object.windowSoftInputMode = value;
	}
	get tabsTintColor () {
		return this._object.tabsTintColor;
	}
	set tabsTintColor (value) {
		this._object.tabsTintColor = value;
	}
	get tabsTranslucent () {
		return this._object.tabsTranslucent;
	}
	set tabsTranslucent (value) {
		this._object.tabsTranslucent = value;
	}
	get unselectedItemTintColor () {
		return this._object.unselectedItemTintColor;
	}
	set unselectedItemTintColor (value) {
		this._object.unselectedItemTintColor = value;
	}
	get shadowImage () {
		return this._object.shadowImage;
	}
	set shadowImage (value) {
		this._object.shadowImage = value;
	}
	get activeTabIconTint () {
		return this._object.activeTabIconTint;
	}
	set activeTabIconTint (value) {
		this._object.activeTabIconTint = value;
	}
	get activeTab () {
		return new Tab(this._object.activeTab);
	}
	set activeTab (value) {
		this._object.activeTab = value;
	}
	get barColor () {
		return this._object.barColor;
	}
	set barColor (value) {
		this._object.barColor = value;
	}
	get tabs () {
		return this._object.tabs;
	}
	set tabs (value) {
		this._object.tabs = value;
	}
	get tabsBackgroundColor () {
		return this._object.tabsBackgroundColor;
	}
	set tabsBackgroundColor (value) {
		this._object.tabsBackgroundColor = value;
	}
	get title () {
		return this._object.title;
	}
	set title (value) {
		this._object.title = value;
	}
	get tabsBackgroundImage () {
		return this._object.tabsBackgroundImage;
	}
	set tabsBackgroundImage (value) {
		this._object.tabsBackgroundImage = value;
	}
	get tabsBackgroundSelectedColor () {
		return this._object.tabsBackgroundSelectedColor;
	}
	set tabsBackgroundSelectedColor (value) {
		this._object.tabsBackgroundSelectedColor = value;
	}
	get activeTabBackgroundImage () {
		return this._object.activeTabBackgroundImage;
	}
	set activeTabBackgroundImage (value) {
		this._object.activeTabBackgroundImage = value;
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
	disableTabNavigation (disable) {
		return this._object.disableTabNavigation(disable);
	}
	addTab (tab) {
		tab = normalize(tab);
		return this._object.addTab(tab);
	}
	close () {
		return this._object.close();
	}
	open () {
		return this._object.open();
	}
	removeTab (tab) {
		tab = normalize(tab);
		return this._object.removeTab(tab);
	}
	getActiveTab () {
		return new Tab(this._object.getActiveTab());
	}
	setActiveTab (indexOrObject) {
		return this._object.setActiveTab(indexOrObject);
	}
	getTabs () {
		return this._object.getTabs();
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
	getKeepScreenOn () {
		return this._object.getKeepScreenOn();
	}
	setKeepScreenOn (keepScreenOn) {
		return this._object.setKeepScreenOn(keepScreenOn);
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
	getCenter () {
		return this._object.getCenter();
	}
	setCenter (center) {
		return this._object.setCenter(center);
	}
	getActivity () {
		return new Activity(this._object.getActivity());
	}
	getAllowUserCustomization () {
		return this._object.getAllowUserCustomization();
	}
	setAllowUserCustomization (allowUserCustomization) {
		return this._object.setAllowUserCustomization(allowUserCustomization);
	}
	getTranslucent () {
		return this._object.getTranslucent();
	}
	setTranslucent (translucent) {
		return this._object.setTranslucent(translucent);
	}
	getTitleAttributes () {
		return this._object.getTitleAttributes();
	}
	setTitleAttributes (titleAttributes) {
		return this._object.setTitleAttributes(titleAttributes);
	}
	getNavTintColor () {
		return this._object.getNavTintColor();
	}
	setNavTintColor (navTintColor) {
		return this._object.setNavTintColor(navTintColor);
	}
	getEditButtonTitle () {
		return this._object.getEditButtonTitle();
	}
	setEditButtonTitle (editButtonTitle) {
		return this._object.setEditButtonTitle(editButtonTitle);
	}
	getExitOnClose () {
		return this._object.getExitOnClose();
	}
	setExitOnClose (exitOnClose) {
		return this._object.setExitOnClose(exitOnClose);
	}
	getSwipeable () {
		return this._object.getSwipeable();
	}
	setSwipeable (swipeable) {
		return this._object.setSwipeable(swipeable);
	}
	getSmoothScrollOnTabClick () {
		return this._object.getSmoothScrollOnTabClick();
	}
	setSmoothScrollOnTabClick (smoothScrollOnTabClick) {
		return this._object.setSmoothScrollOnTabClick(smoothScrollOnTabClick);
	}
	getWindowSoftInputMode () {
		return this._object.getWindowSoftInputMode();
	}
	setWindowSoftInputMode (windowSoftInputMode) {
		return this._object.setWindowSoftInputMode(windowSoftInputMode);
	}
	getTabsTintColor () {
		return this._object.getTabsTintColor();
	}
	setTabsTintColor (tabsTintColor) {
		return this._object.setTabsTintColor(tabsTintColor);
	}
	getTabsTranslucent () {
		return this._object.getTabsTranslucent();
	}
	setTabsTranslucent (tabsTranslucent) {
		return this._object.setTabsTranslucent(tabsTranslucent);
	}
	getUnselectedItemTintColor () {
		return this._object.getUnselectedItemTintColor();
	}
	setUnselectedItemTintColor (unselectedItemTintColor) {
		return this._object.setUnselectedItemTintColor(unselectedItemTintColor);
	}
	getShadowImage () {
		return this._object.getShadowImage();
	}
	setShadowImage (shadowImage) {
		return this._object.setShadowImage(shadowImage);
	}
	getActiveTabIconTint () {
		return this._object.getActiveTabIconTint();
	}
	setActiveTabIconTint (activeTabIconTint) {
		return this._object.setActiveTabIconTint(activeTabIconTint);
	}
	getActiveTab () {
		return new Tab(this._object.getActiveTab());
	}
	setActiveTab (activeTab) {
		activeTab = normalize(activeTab);
		return this._object.setActiveTab(activeTab);
	}
	getBarColor () {
		return this._object.getBarColor();
	}
	setBarColor (barColor) {
		return this._object.setBarColor(barColor);
	}
	getTabs () {
		return this._object.getTabs();
	}
	setTabs (tabs) {
		return this._object.setTabs(tabs);
	}
	getTabsBackgroundColor () {
		return this._object.getTabsBackgroundColor();
	}
	setTabsBackgroundColor (tabsBackgroundColor) {
		return this._object.setTabsBackgroundColor(tabsBackgroundColor);
	}
	getTitle () {
		return this._object.getTitle();
	}
	setTitle (title) {
		return this._object.setTitle(title);
	}
	getTabsBackgroundImage () {
		return this._object.getTabsBackgroundImage();
	}
	setTabsBackgroundImage (tabsBackgroundImage) {
		return this._object.setTabsBackgroundImage(tabsBackgroundImage);
	}
	getTabsBackgroundSelectedColor () {
		return this._object.getTabsBackgroundSelectedColor();
	}
	setTabsBackgroundSelectedColor (tabsBackgroundSelectedColor) {
		return this._object.setTabsBackgroundSelectedColor(tabsBackgroundSelectedColor);
	}
	getActiveTabBackgroundImage () {
		return this._object.getActiveTabBackgroundImage();
	}
	setActiveTabBackgroundImage (activeTabBackgroundImage) {
		return this._object.setActiveTabBackgroundImage(activeTabBackgroundImage);
	}

	// modules
};
Object.freeze(TabGroup);

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