import { default as Window } from './Window';
import { default as PreviewContext } from './iOS/PreviewContext';
import { default as _2DMatrix } from './_2DMatrix';
import { default as View } from './View';
import { default as RefreshControl } from './RefreshControl';
import { default as SearchBar } from './SearchBar';
import { default as Blob } from './../Blob';

export default class ListView {

	constructor (object) {
		if (object && object.apiName && object.apiName.endsWith('.UI.ListView')) {
			this._object = object;
		} else {
			this._object = Titanium.UI.createListView(normalize(object));
		}
	}

	// constants
	static get apiName () {
		return Titanium.UI.ListView.apiName;
	}
	static get animatedCenter () {
		return Titanium.UI.ListView.animatedCenter;
	}
	static get rect () {
		return Titanium.UI.ListView.rect;
	}
	static get size () {
		return Titanium.UI.ListView.size;
	}
	static get children () {
		return Titanium.UI.ListView.children;
	}
	static get sectionCount () {
		return Titanium.UI.ListView.sectionCount;
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
	get allowsSelection () {
		return this._object.allowsSelection;
	}
	set allowsSelection (value) {
		this._object.allowsSelection = value;
	}
	get canScroll () {
		return this._object.canScroll;
	}
	set canScroll (value) {
		this._object.canScroll = value;
	}
	get disableBounce () {
		return this._object.disableBounce;
	}
	set disableBounce (value) {
		this._object.disableBounce = value;
	}
	get editing () {
		return this._object.editing;
	}
	set editing (value) {
		this._object.editing = value;
	}
	get allowsSelectionDuringEditing () {
		return this._object.allowsSelectionDuringEditing;
	}
	set allowsSelectionDuringEditing (value) {
		this._object.allowsSelectionDuringEditing = value;
	}
	get allowsMultipleSelectionDuringEditing () {
		return this._object.allowsMultipleSelectionDuringEditing;
	}
	set allowsMultipleSelectionDuringEditing (value) {
		this._object.allowsMultipleSelectionDuringEditing = value;
	}
	get lazyLoadingEnabled () {
		return this._object.lazyLoadingEnabled;
	}
	set lazyLoadingEnabled (value) {
		this._object.lazyLoadingEnabled = value;
	}
	get pruneSectionsOnEdit () {
		return this._object.pruneSectionsOnEdit;
	}
	set pruneSectionsOnEdit (value) {
		this._object.pruneSectionsOnEdit = value;
	}
	get templates () {
		return this._object.templates;
	}
	set templates (value) {
		this._object.templates = value;
	}
	get separatorHeight () {
		return this._object.separatorHeight;
	}
	set separatorHeight (value) {
		this._object.separatorHeight = value;
	}
	get footerDividersEnabled () {
		return this._object.footerDividersEnabled;
	}
	set footerDividersEnabled (value) {
		this._object.footerDividersEnabled = value;
	}
	get headerDividersEnabled () {
		return this._object.headerDividersEnabled;
	}
	set headerDividersEnabled (value) {
		this._object.headerDividersEnabled = value;
	}
	get pullView () {
		return new View(this._object.pullView);
	}
	set pullView (value) {
		this._object.pullView = value;
	}
	get refreshControl () {
		return new RefreshControl(this._object.refreshControl);
	}
	set refreshControl (value) {
		this._object.refreshControl = value;
	}
	get keepSectionsInSearch () {
		return this._object.keepSectionsInSearch;
	}
	set keepSectionsInSearch (value) {
		this._object.keepSectionsInSearch = value;
	}
	get keyboardDismissMode () {
		return this._object.keyboardDismissMode;
	}
	set keyboardDismissMode (value) {
		this._object.keyboardDismissMode = value;
	}
	get sectionIndexTitles () {
		return this._object.sectionIndexTitles;
	}
	set sectionIndexTitles (value) {
		this._object.sectionIndexTitles = value;
	}
	get scrollIndicatorStyle () {
		return this._object.scrollIndicatorStyle;
	}
	set scrollIndicatorStyle (value) {
		this._object.scrollIndicatorStyle = value;
	}
	get willScrollOnStatusTap () {
		return this._object.willScrollOnStatusTap;
	}
	set willScrollOnStatusTap (value) {
		this._object.willScrollOnStatusTap = value;
	}
	get showVerticalScrollIndicator () {
		return this._object.showVerticalScrollIndicator;
	}
	set showVerticalScrollIndicator (value) {
		this._object.showVerticalScrollIndicator = value;
	}
	get separatorColor () {
		return this._object.separatorColor;
	}
	set separatorColor (value) {
		this._object.separatorColor = value;
	}
	get separatorInsets () {
		return this._object.separatorInsets;
	}
	set separatorInsets (value) {
		this._object.separatorInsets = value;
	}
	get separatorStyle () {
		return this._object.separatorStyle;
	}
	set separatorStyle (value) {
		this._object.separatorStyle = value;
	}
	get style () {
		return this._object.style;
	}
	set style (value) {
		this._object.style = value;
	}
	get tableSeparatorInsets () {
		return this._object.tableSeparatorInsets;
	}
	set tableSeparatorInsets (value) {
		this._object.tableSeparatorInsets = value;
	}
	get listSeparatorInsets () {
		return this._object.listSeparatorInsets;
	}
	set listSeparatorInsets (value) {
		this._object.listSeparatorInsets = value;
	}
	get rowSeparatorInsets () {
		return this._object.rowSeparatorInsets;
	}
	set rowSeparatorInsets (value) {
		this._object.rowSeparatorInsets = value;
	}
	get dimBackgroundForSearch () {
		return this._object.dimBackgroundForSearch;
	}
	set dimBackgroundForSearch (value) {
		this._object.dimBackgroundForSearch = value;
	}
	get resultsBackgroundColor () {
		return this._object.resultsBackgroundColor;
	}
	set resultsBackgroundColor (value) {
		this._object.resultsBackgroundColor = value;
	}
	get resultsSeparatorColor () {
		return this._object.resultsSeparatorColor;
	}
	set resultsSeparatorColor (value) {
		this._object.resultsSeparatorColor = value;
	}
	get resultsSeparatorStyle () {
		return this._object.resultsSeparatorStyle;
	}
	set resultsSeparatorStyle (value) {
		this._object.resultsSeparatorStyle = value;
	}
	get resultsSeparatorInsets () {
		return this._object.resultsSeparatorInsets;
	}
	set resultsSeparatorInsets (value) {
		this._object.resultsSeparatorInsets = value;
	}
	get selectedItems () {
		return this._object.selectedItems;
	}
	set selectedItems (value) {
		this._object.selectedItems = value;
	}
	get sections () {
		return this._object.sections;
	}
	set sections (value) {
		this._object.sections = value;
	}
	get footerTitle () {
		return this._object.footerTitle;
	}
	set footerTitle (value) {
		this._object.footerTitle = value;
	}
	get headerTitle () {
		return this._object.headerTitle;
	}
	set headerTitle (value) {
		this._object.headerTitle = value;
	}
	get searchText () {
		return this._object.searchText;
	}
	set searchText (value) {
		this._object.searchText = value;
	}
	get footerView () {
		return new View(this._object.footerView);
	}
	set footerView (value) {
		this._object.footerView = value;
	}
	get headerView () {
		return new View(this._object.headerView);
	}
	set headerView (value) {
		this._object.headerView = value;
	}
	get searchView () {
		return new SearchBar(this._object.searchView);
	}
	set searchView (value) {
		this._object.searchView = value;
	}
	get caseInsensitiveSearch () {
		return this._object.caseInsensitiveSearch;
	}
	set caseInsensitiveSearch (value) {
		this._object.caseInsensitiveSearch = value;
	}
	get sectionCount () {
		return this._object.sectionCount;
	}
	get defaultItemTemplate () {
		return this._object.defaultItemTemplate;
	}
	set defaultItemTemplate (value) {
		this._object.defaultItemTemplate = value;
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
	deselectItem (sectionIndex, itemIndex) {
		return this._object.deselectItem(sectionIndex, itemIndex);
	}
	selectItem (sectionIndex, itemIndex) {
		return this._object.selectItem(sectionIndex, itemIndex);
	}
	setContentInsets (edgeInsets, animated) {
		return this._object.setContentInsets(edgeInsets, animated);
	}
	setContentOffset (contentOffset) {
		contentOffset = normalize(contentOffset);
		return this._object.setContentOffset(contentOffset);
	}
	scrollToItem (sectionIndex, itemIndex, animation) {
		return this._object.scrollToItem(sectionIndex, itemIndex, animation);
	}
	appendSection (section, animation) {
		section = normalize(section);
		return this._object.appendSection(section, animation);
	}
	deleteSectionAt (sectionIndex, animation) {
		return this._object.deleteSectionAt(sectionIndex, animation);
	}
	insertSectionAt (sectionIndex, section, animation) {
		section = normalize(section);
		return this._object.insertSectionAt(sectionIndex, section, animation);
	}
	replaceSectionAt (sectionIndex, section, animation) {
		section = normalize(section);
		return this._object.replaceSectionAt(sectionIndex, section, animation);
	}
	addMarker (markerProps) {
		return this._object.addMarker(markerProps);
	}
	setMarker (markerProps) {
		return this._object.setMarker(markerProps);
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
	getAllowsSelection () {
		return this._object.getAllowsSelection();
	}
	setAllowsSelection (allowsSelection) {
		return this._object.setAllowsSelection(allowsSelection);
	}
	getCanScroll () {
		return this._object.getCanScroll();
	}
	setCanScroll (canScroll) {
		return this._object.setCanScroll(canScroll);
	}
	getDisableBounce () {
		return this._object.getDisableBounce();
	}
	setDisableBounce (disableBounce) {
		return this._object.setDisableBounce(disableBounce);
	}
	getEditing () {
		return this._object.getEditing();
	}
	setEditing (editing) {
		return this._object.setEditing(editing);
	}
	getAllowsSelectionDuringEditing () {
		return this._object.getAllowsSelectionDuringEditing();
	}
	setAllowsSelectionDuringEditing (allowsSelectionDuringEditing) {
		return this._object.setAllowsSelectionDuringEditing(allowsSelectionDuringEditing);
	}
	getAllowsMultipleSelectionDuringEditing () {
		return this._object.getAllowsMultipleSelectionDuringEditing();
	}
	setAllowsMultipleSelectionDuringEditing (allowsMultipleSelectionDuringEditing) {
		return this._object.setAllowsMultipleSelectionDuringEditing(allowsMultipleSelectionDuringEditing);
	}
	getLazyLoadingEnabled () {
		return this._object.getLazyLoadingEnabled();
	}
	setLazyLoadingEnabled (lazyLoadingEnabled) {
		return this._object.setLazyLoadingEnabled(lazyLoadingEnabled);
	}
	getPruneSectionsOnEdit () {
		return this._object.getPruneSectionsOnEdit();
	}
	setPruneSectionsOnEdit (pruneSectionsOnEdit) {
		return this._object.setPruneSectionsOnEdit(pruneSectionsOnEdit);
	}
	getTemplates () {
		return this._object.getTemplates();
	}
	setTemplates (templates) {
		templates = normalize(templates);
		return this._object.setTemplates(templates);
	}
	getSeparatorHeight () {
		return this._object.getSeparatorHeight();
	}
	setSeparatorHeight (separatorHeight) {
		return this._object.setSeparatorHeight(separatorHeight);
	}
	getFooterDividersEnabled () {
		return this._object.getFooterDividersEnabled();
	}
	setFooterDividersEnabled (footerDividersEnabled) {
		return this._object.setFooterDividersEnabled(footerDividersEnabled);
	}
	getHeaderDividersEnabled () {
		return this._object.getHeaderDividersEnabled();
	}
	setHeaderDividersEnabled (headerDividersEnabled) {
		return this._object.setHeaderDividersEnabled(headerDividersEnabled);
	}
	getPullView () {
		return new View(this._object.getPullView());
	}
	setPullView (pullView) {
		pullView = normalize(pullView);
		return this._object.setPullView(pullView);
	}
	getRefreshControl () {
		return new RefreshControl(this._object.getRefreshControl());
	}
	setRefreshControl (refreshControl) {
		refreshControl = normalize(refreshControl);
		return this._object.setRefreshControl(refreshControl);
	}
	getKeepSectionsInSearch () {
		return this._object.getKeepSectionsInSearch();
	}
	setKeepSectionsInSearch (keepSectionsInSearch) {
		return this._object.setKeepSectionsInSearch(keepSectionsInSearch);
	}
	getKeyboardDismissMode () {
		return this._object.getKeyboardDismissMode();
	}
	setKeyboardDismissMode (keyboardDismissMode) {
		return this._object.setKeyboardDismissMode(keyboardDismissMode);
	}
	getSectionIndexTitles () {
		return this._object.getSectionIndexTitles();
	}
	setSectionIndexTitles (sectionIndexTitles) {
		return this._object.setSectionIndexTitles(sectionIndexTitles);
	}
	getScrollIndicatorStyle () {
		return this._object.getScrollIndicatorStyle();
	}
	setScrollIndicatorStyle (scrollIndicatorStyle) {
		return this._object.setScrollIndicatorStyle(scrollIndicatorStyle);
	}
	getWillScrollOnStatusTap () {
		return this._object.getWillScrollOnStatusTap();
	}
	setWillScrollOnStatusTap (willScrollOnStatusTap) {
		return this._object.setWillScrollOnStatusTap(willScrollOnStatusTap);
	}
	getShowVerticalScrollIndicator () {
		return this._object.getShowVerticalScrollIndicator();
	}
	setShowVerticalScrollIndicator (showVerticalScrollIndicator) {
		return this._object.setShowVerticalScrollIndicator(showVerticalScrollIndicator);
	}
	getSeparatorColor () {
		return this._object.getSeparatorColor();
	}
	setSeparatorColor (separatorColor) {
		return this._object.setSeparatorColor(separatorColor);
	}
	getSeparatorInsets () {
		return this._object.getSeparatorInsets();
	}
	setSeparatorInsets (separatorInsets) {
		separatorInsets = normalize(separatorInsets);
		return this._object.setSeparatorInsets(separatorInsets);
	}
	getSeparatorStyle () {
		return this._object.getSeparatorStyle();
	}
	setSeparatorStyle (separatorStyle) {
		return this._object.setSeparatorStyle(separatorStyle);
	}
	getStyle () {
		return this._object.getStyle();
	}
	setStyle (style) {
		return this._object.setStyle(style);
	}
	getTableSeparatorInsets () {
		return this._object.getTableSeparatorInsets();
	}
	setTableSeparatorInsets (tableSeparatorInsets) {
		tableSeparatorInsets = normalize(tableSeparatorInsets);
		return this._object.setTableSeparatorInsets(tableSeparatorInsets);
	}
	getListSeparatorInsets () {
		return this._object.getListSeparatorInsets();
	}
	setListSeparatorInsets (listSeparatorInsets) {
		listSeparatorInsets = normalize(listSeparatorInsets);
		return this._object.setListSeparatorInsets(listSeparatorInsets);
	}
	getRowSeparatorInsets () {
		return this._object.getRowSeparatorInsets();
	}
	setRowSeparatorInsets (rowSeparatorInsets) {
		rowSeparatorInsets = normalize(rowSeparatorInsets);
		return this._object.setRowSeparatorInsets(rowSeparatorInsets);
	}
	getDimBackgroundForSearch () {
		return this._object.getDimBackgroundForSearch();
	}
	setDimBackgroundForSearch (dimBackgroundForSearch) {
		return this._object.setDimBackgroundForSearch(dimBackgroundForSearch);
	}
	getResultsBackgroundColor () {
		return this._object.getResultsBackgroundColor();
	}
	setResultsBackgroundColor (resultsBackgroundColor) {
		return this._object.setResultsBackgroundColor(resultsBackgroundColor);
	}
	getResultsSeparatorColor () {
		return this._object.getResultsSeparatorColor();
	}
	setResultsSeparatorColor (resultsSeparatorColor) {
		return this._object.setResultsSeparatorColor(resultsSeparatorColor);
	}
	getResultsSeparatorStyle () {
		return this._object.getResultsSeparatorStyle();
	}
	setResultsSeparatorStyle (resultsSeparatorStyle) {
		return this._object.setResultsSeparatorStyle(resultsSeparatorStyle);
	}
	getResultsSeparatorInsets () {
		return this._object.getResultsSeparatorInsets();
	}
	setResultsSeparatorInsets (resultsSeparatorInsets) {
		resultsSeparatorInsets = normalize(resultsSeparatorInsets);
		return this._object.setResultsSeparatorInsets(resultsSeparatorInsets);
	}
	getSelectedItems () {
		return this._object.getSelectedItems();
	}
	setSelectedItems (selectedItems) {
		return this._object.setSelectedItems(selectedItems);
	}
	getSections () {
		return this._object.getSections();
	}
	setSections (sections) {
		return this._object.setSections(sections);
	}
	getFooterTitle () {
		return this._object.getFooterTitle();
	}
	setFooterTitle (footerTitle) {
		return this._object.setFooterTitle(footerTitle);
	}
	getHeaderTitle () {
		return this._object.getHeaderTitle();
	}
	setHeaderTitle (headerTitle) {
		return this._object.setHeaderTitle(headerTitle);
	}
	getSearchText () {
		return this._object.getSearchText();
	}
	setSearchText (searchText) {
		return this._object.setSearchText(searchText);
	}
	getFooterView () {
		return new View(this._object.getFooterView());
	}
	setFooterView (footerView) {
		footerView = normalize(footerView);
		return this._object.setFooterView(footerView);
	}
	getHeaderView () {
		return new View(this._object.getHeaderView());
	}
	setHeaderView (headerView) {
		headerView = normalize(headerView);
		return this._object.setHeaderView(headerView);
	}
	getSearchView () {
		return new SearchBar(this._object.getSearchView());
	}
	setSearchView (searchView) {
		searchView = normalize(searchView);
		return this._object.setSearchView(searchView);
	}
	getCaseInsensitiveSearch () {
		return this._object.getCaseInsensitiveSearch();
	}
	setCaseInsensitiveSearch (caseInsensitiveSearch) {
		return this._object.setCaseInsensitiveSearch(caseInsensitiveSearch);
	}
	getSectionCount () {
		return this._object.getSectionCount();
	}
	getDefaultItemTemplate () {
		return this._object.getDefaultItemTemplate();
	}
	setDefaultItemTemplate (defItemTemplate) {
		return this._object.setDefaultItemTemplate(defItemTemplate);
	}

	// modules
};
Object.freeze(ListView);

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